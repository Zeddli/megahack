import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Interface for authenticated request with user information
 */
export interface AuthRequest extends Request {
  user?: {
    id: number;
    email: string;
    role?: string;
  };
}

/**
 * Authentication middleware to verify JWT token
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
    const jwtSecret = process.env.JWT_SECRET;
    
    if (!jwtSecret) {
      console.error('JWT_SECRET not defined in environment variables');
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
    
    const decoded = jwt.verify(token, jwtSecret) as { id: number; email: string; role?: string };
    
    // Attach user info to request
    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
    };
    
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token',
      });
    }
    
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        success: false,
        message: 'Token expired',
      });
    }
    
    console.error('Authentication error:', error);
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