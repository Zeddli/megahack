import { Request, Response } from 'express';
import { TokenPayload, refreshAccessToken, revokeRefreshToken } from '../services/tokenService';
import { AuthRequest } from '../middleware/authMiddleware';
import jwt from 'jsonwebtoken';
import { generateTokens } from '../services/tokenService';
import UserRepository from '../repositories/UserRepository';

// Initialize repositories
const userRepository = new UserRepository();

/**
 * Refresh access token using refresh token
 * @param req - Express request with refresh token
 * @param res - Express response
 * @returns New tokens or error
 */
export const refreshToken = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;

    // Check if refresh token is provided
    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        message: 'Refresh token is required',
      });
    }

    // Try to refresh the token
    const tokens = await refreshAccessToken(refreshToken);

    if (!tokens) {
      return res.status(401).json({
        success: false,
        message: 'Invalid or expired refresh token',
      });
    }

    // Return new tokens
    return res.status(200).json({
      success: true,
      data: tokens,
      message: 'Token refreshed successfully',
    });
  } catch (error) {
    console.error('Error refreshing token:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to refresh token',
      error: (error as Error).message,
    });
  }
};

/**
 * Logout user by revoking refresh token
 * @param req - Express request with refresh token
 * @param res - Express response
 * @returns Success or error message
 */
export const logout = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        message: 'Refresh token is required',
      });
    }

    // Revoke the refresh token
    await revokeRefreshToken(refreshToken);

    return res.status(200).json({
      success: true,
      message: 'Logged out successfully',
    });
  } catch (error) {
    console.error('Error logging out:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to logout',
      error: (error as Error).message,
    });
  }
};

/**
 * Get current session information
 * @param req - Authenticated request with user info
 * @param res - Express response
 * @returns Session information
 */
export const getSession = async (req: AuthRequest, res: Response) => {
  try {
    // Ensure user is authenticated
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Not authenticated',
      });
    }

    // Return session information
    return res.status(200).json({
      success: true,
      data: {
        user: {
          id: req.user.id,
          email: req.user.email,
          role: req.user.role,
        },
        isAuthenticated: true,
      },
      message: 'Session retrieved successfully',
    });
  } catch (error) {
    console.error('Error getting session:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to get session information',
      error: (error as Error).message,
    });
  }
};

/**
 * Process wallet-based login
 * @param req - Express request object with wallet address
 * @param res - Express response object
 * @returns User data and tokens or error
 */
export const walletLogin = async (req: Request, res: Response) => {
  try {
    const { walletAddress } = req.body;
    
    // Validate request payload
    if (!walletAddress) {
      return res.status(400).json({
        success: false,
        message: 'Wallet address is required',
      });
    }
    
    // Find user by wallet address
    const user = await userRepository.findByWalletAddress(walletAddress);
    
    // Return error if user not found
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'No account found with this wallet address',
      });
    }
    
    // Generate tokens using the token service
    const tokens = await generateTokens({
      id: user.$id,
      email: user.email,
    });
    
    // Return user data without password
    const { password: _, ...userWithoutPassword } = user;
    
    return res.status(200).json({
      success: true,
      data: {
        user: userWithoutPassword,
        ...tokens,
      },
      message: 'Wallet login successful',
    });
  } catch (error) {
    console.error('Error during wallet login:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process wallet login',
      error: (error as Error).message,
    });
  }
}; 