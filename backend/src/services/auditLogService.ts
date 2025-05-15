import AuditLogRepository from '../repositories/AuditLogRepository';
import { AuditLog, AuditLogCreateData, AuditLogDataValues } from '../models/AuditLog';

// Initialize repository
const auditLogRepository = new AuditLogRepository();

/**
 * Actions that can be audited
 */
export enum AuditAction {
  // User actions
  USER_CREATE = 'USER_CREATE',
  USER_UPDATE = 'USER_UPDATE',
  USER_DELETE = 'USER_DELETE',
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT',
  
  // Policy actions
  POLICY_CREATE = 'POLICY_CREATE',
  POLICY_UPDATE = 'POLICY_UPDATE',
  POLICY_DELETE = 'POLICY_DELETE',
  POLICY_ACTIVATE = 'POLICY_ACTIVATE',
  POLICY_EXPIRE = 'POLICY_EXPIRE',
  
  // Payment actions
  PAYMENT_PROCESS = 'PAYMENT_PROCESS',
  PAYMENT_VERIFY = 'PAYMENT_VERIFY',
  PAYOUT_PROCESS = 'PAYOUT_PROCESS',
  
  // Risk pool actions
  POOL_CREATE = 'POOL_CREATE',
  POOL_UPDATE = 'POOL_UPDATE',
  POOL_DELETE = 'POOL_DELETE',
  
  // Capital provider actions
  CAPITAL_STAKE = 'CAPITAL_STAKE',
  CAPITAL_WITHDRAW = 'CAPITAL_WITHDRAW',
  
  // Oracle actions
  ORACLE_DATA_RECEIVE = 'ORACLE_DATA_RECEIVE',
  TRIGGER_DETECT = 'TRIGGER_DETECT',
  
  // System actions
  SYSTEM_STARTUP = 'SYSTEM_STARTUP',
  SYSTEM_SHUTDOWN = 'SYSTEM_SHUTDOWN',
  SYSTEM_ERROR = 'SYSTEM_ERROR',
  SYSTEM_CONFIG_CHANGE = 'SYSTEM_CONFIG_CHANGE'
}

/**
 * Entities that can be audited
 */
export enum AuditEntity {
  USER = 'User',
  POLICY = 'Policy',
  PAYMENT = 'Payment',
  PAYOUT = 'Payout',
  RISK_POOL = 'RiskPool',
  CAPITAL_PROVIDER = 'CapitalProvider',
  ORACLE_DATA = 'OracleData',
  SYSTEM = 'System'
}

/**
 * Interface for audit log data
 */
interface AuditLogData {
  userId?: string;
  action: AuditAction | string;
  entity: AuditEntity | string;
  entityId?: string;
  oldValues?: Record<string, any>;
  newValues?: Record<string, any>;
  metadata?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
}

/**
 * Service for handling audit logging
 */
export default class AuditLogService {
  /**
   * Log an auditable action
   */
  async log(data: AuditLogData): Promise<void> {
    try {
      await auditLogRepository.createAuditLog({
        userId: data.userId,
        action: data.action.toString(),
        entity: data.entity.toString(),
        entityId: data.entityId,
        oldValues: data.oldValues,
        newValues: data.newValues,
        metadata: data.metadata,
        ipAddress: data.ipAddress,
        userAgent: data.userAgent
      });
    } catch (error) {
      // Log to console if audit logging fails, but don't interrupt the main flow
      console.error('Error creating audit log:', error);
    }
  }

  /**
   * Log user action
   */
  async logUserAction(action: AuditAction, userId: string, entityId?: string, oldValues?: any, newValues?: any, reqInfo?: {ipAddress?: string, userAgent?: string}): Promise<void> {
    await this.log({
      userId,
      action,
      entity: AuditEntity.USER,
      entityId: entityId || userId,
      oldValues,
      newValues,
      ipAddress: reqInfo?.ipAddress,
      userAgent: reqInfo?.userAgent
    });
  }

  /**
   * Log policy action
   */
  async logPolicyAction(action: AuditAction, policyId: string, userId?: string, oldValues?: any, newValues?: any, reqInfo?: {ipAddress?: string, userAgent?: string}): Promise<void> {
    await this.log({
      userId,
      action,
      entity: AuditEntity.POLICY,
      entityId: policyId,
      oldValues,
      newValues,
      ipAddress: reqInfo?.ipAddress,
      userAgent: reqInfo?.userAgent
    });
  }

  /**
   * Log payment action
   */
  async logPaymentAction(action: AuditAction, paymentId: string, userId?: string, policyId?: string, amount?: any, reqInfo?: {ipAddress?: string, userAgent?: string}): Promise<void> {
    await this.log({
      userId,
      action,
      entity: AuditEntity.PAYMENT,
      entityId: paymentId,
      metadata: {
        policyId,
        amount: amount?.toString()
      },
      ipAddress: reqInfo?.ipAddress,
      userAgent: reqInfo?.userAgent
    });
  }

  /**
   * Log payout action
   */
  async logPayoutAction(action: AuditAction, payoutId: string, userId?: string, policyId?: string, amount?: any, reqInfo?: {ipAddress?: string, userAgent?: string}): Promise<void> {
    await this.log({
      userId,
      action,
      entity: AuditEntity.PAYOUT,
      entityId: payoutId,
      metadata: {
        policyId,
        amount: amount?.toString()
      },
      ipAddress: reqInfo?.ipAddress,
      userAgent: reqInfo?.userAgent
    });
  }

  /**
   * Log risk pool action
   */
  async logRiskPoolAction(action: AuditAction, poolId: string, userId?: string, oldValues?: any, newValues?: any, reqInfo?: {ipAddress?: string, userAgent?: string}): Promise<void> {
    await this.log({
      userId,
      action,
      entity: AuditEntity.RISK_POOL,
      entityId: poolId,
      oldValues,
      newValues,
      ipAddress: reqInfo?.ipAddress,
      userAgent: reqInfo?.userAgent
    });
  }

  /**
   * Log capital provider action
   */
  async logCapitalAction(action: AuditAction, stakeId: string, userId?: string, poolId?: string, amount?: any, reqInfo?: {ipAddress?: string, userAgent?: string}): Promise<void> {
    await this.log({
      userId,
      action,
      entity: AuditEntity.CAPITAL_PROVIDER,
      entityId: stakeId,
      metadata: {
        poolId,
        amount: amount?.toString()
      },
      ipAddress: reqInfo?.ipAddress,
      userAgent: reqInfo?.userAgent
    });
  }

  /**
   * Log oracle data action
   */
  async logOracleAction(action: AuditAction, dataId: string, sourceId?: string, metadata?: any, reqInfo?: {ipAddress?: string, userAgent?: string}): Promise<void> {
    await this.log({
      action,
      entity: AuditEntity.ORACLE_DATA,
      entityId: dataId,
      metadata: {
        sourceId,
        ...metadata
      },
      ipAddress: reqInfo?.ipAddress,
      userAgent: reqInfo?.userAgent
    });
  }

  /**
   * Log system action
   */
  async logSystemAction(action: AuditAction, metadata?: any, userId?: string, reqInfo?: {ipAddress?: string, userAgent?: string}): Promise<void> {
    await this.log({
      userId: userId || 'system',
      action,
      entity: AuditEntity.SYSTEM,
      metadata,
      ipAddress: reqInfo?.ipAddress,
      userAgent: reqInfo?.userAgent
    });
  }
  
  /**
   * Get audit logs for a specific entity
   */
  async getEntityLogs(entity: AuditEntity, entityId: string): Promise<any[]> {
    return auditLogRepository.findByEntity(entity, entityId);
  }
  
  /**
   * Get audit logs for a specific user
   */
  async getUserLogs(userId: string): Promise<any[]> {
    return auditLogRepository.findByUser(userId);
  }
  
  /**
   * Get audit logs for a specific action
   */
  async getLogsByAction(action: AuditAction): Promise<any[]> {
    return auditLogRepository.findByAction(action.toString());
  }
  
  /**
   * Get recent audit logs
   */
  async getRecentLogs(limit: number = 100): Promise<any[]> {
    return auditLogRepository.findRecent(limit);
  }
} 