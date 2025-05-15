import { Request, Response, NextFunction } from 'express';
import walletAuthService from '../services/walletAuthService';
import { logger } from '../utils/logger';

/**
 * Interface for authenticated request with wallet information
 */
export interface AuthRequest extends Request {
  user?: {
    walletAddress: string;
  };
}

/**
 * Authentication middleware to verify wallet JWT token
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 * @returns Continues to next middleware if authenticated, otherwise returns error
 */
export const authenticate = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    // Get token from authorization header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided',
      });
    }
    
    const token = authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. Invalid token format',
      });
    }
    
    // Verify token
    const decoded = walletAuthService.verifyToken(token);
    
    if (!decoded || !decoded.walletAddress) {
      return res.status(401).json({
        success: false,
        message: 'Invalid or expired token',
      });
    }
    
    // Attach wallet info to request
    req.user = {
      walletAddress: decoded.walletAddress,
    };
    
    logger.info(`Authenticated request from wallet: ${decoded.walletAddress}`);
    
    next();
  } catch (error) {
    logger.error('Authentication error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

/**
 * Middleware to check if user is an admin
 * @param req - Express request object with user info
 * @param res - Express response object
 * @param next - Express next function
 * @returns Continues if user is admin, otherwise returns error
 */
export const isAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Access denied. Not authenticated',
    });
  }
  
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({
      success: false,
      message: 'Access denied. Admin privileges required',
    });
  }
  
  next();
}; 