import { Request, Response, NextFunction } from 'express';
import AuditLogService, { AuditEntity, AuditAction } from '../services/auditLogService';
import { BadRequestError } from '../utils/errors';

const auditLogService = new AuditLogService();

/**
 * Get recent audit logs (admin only)
 */
export const getRecentLogs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 100;
    
    if (isNaN(limit) || limit <= 0) {
      throw new BadRequestError('Invalid limit parameter');
    }

    const logs = await auditLogService.getRecentLogs(limit);

    return res.status(200).json({
      success: true,
      data: logs
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get logs for a specific entity (admin only)
 */
export const getEntityLogs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { entity, entityId } = req.params;
    
    // Validate entity type
    if (!Object.values(AuditEntity).includes(entity as AuditEntity)) {
      throw new BadRequestError('Invalid entity type');
    }

    const id = parseInt(entityId);
    if (isNaN(id)) {
      throw new BadRequestError('Invalid entity ID');
    }

    const logs = await auditLogService.getEntityLogs(entity as AuditEntity, id);

    return res.status(200).json({
      success: true,
      data: logs
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get logs for a specific user (admin or self)
 */
export const getUserLogs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = parseInt(req.params.userId);
    
    if (isNaN(userId)) {
      throw new BadRequestError('Invalid user ID');
    }

    // Check if user is requesting their own logs or is an admin
    if (userId !== req.user?.id && req.user?.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Forbidden: You can only access your own audit logs'
      });
    }

    const logs = await auditLogService.getUserLogs(userId);

    return res.status(200).json({
      success: true,
      data: logs
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get logs by action type (admin only)
 */
export const getLogsByAction = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { action } = req.params;
    
    // Validate action type
    if (!Object.values(AuditAction).includes(action as AuditAction)) {
      throw new BadRequestError('Invalid action type');
    }

    const logs = await auditLogService.getLogsByAction(action as AuditAction);

    return res.status(200).json({
      success: true,
      data: logs
    });
  } catch (error) {
    next(error);
  }
}; 