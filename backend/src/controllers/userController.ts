import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt, { SignOptions } from 'jsonwebtoken';
import { AuthRequest } from '../middleware/authMiddleware';
import config from '../config/config';

const prisma = new PrismaClient();

/**
 * Register a new user
 * @param req - Express request object with user registration data
 * @param res - Express response object
 * @returns Newly created user or error
 */
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password, fullName, phoneNumber, walletAddress } = req.body;
    
    // Check if user with this email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists',
      });
    }
    
    // Check if wallet address is provided and if it's already in use
    if (walletAddress) {
      const userWithWallet = await prisma.user.findUnique({
        where: { walletAddress },
      });
      
      if (userWithWallet) {
        return res.status(400).json({
          success: false,
          message: 'Wallet address is already linked to another account',
        });
      }
    }
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create new user
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        fullName,
        phoneNumber,
        walletAddress,
      },
    });
    
    // Generate JWT token
    const payload = {
      id: newUser.id,
      email: newUser.email,
    };
    
    const jwtSecret = config.jwt.secret;
    const jwtOptions: SignOptions = { expiresIn: config.jwt.expiration };
    
    const token = jwt.sign(payload, jwtSecret, jwtOptions);
    
    // Return user data without password
    const { password: _, ...userWithoutPassword } = newUser;
    
    return res.status(201).json({
      success: true,
      data: {
        user: userWithoutPassword,
        token,
      },
      message: 'User registered successfully',
    });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to register user',
      error: (error as Error).message,
    });
  }
};

/**
 * Login a user
 * @param req - Express request object with login credentials
 * @param res - Express response object
 * @returns User data and JWT token or error
 */
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });
    
    // Return error if user not found or password doesn't match
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }
    
    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }
    
    // Generate JWT token
    const payload = {
      id: user.id,
      email: user.email,
    };
    
    const jwtSecret = config.jwt.secret;
    const jwtOptions: SignOptions = { expiresIn: config.jwt.expiration };
    
    const token = jwt.sign(payload, jwtSecret, jwtOptions);
    
    // Return user data without password
    const { password: _, ...userWithoutPassword } = user;
    
    return res.status(200).json({
      success: true,
      data: {
        user: userWithoutPassword,
        token,
      },
      message: 'Login successful',
    });
  } catch (error) {
    console.error('Error logging in user:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to login',
      error: (error as Error).message,
    });
  }
};

/**
 * Get user profile
 * @param req - Authenticated request with user info
 * @param res - Express response object
 * @returns User profile data or error
 */
export const getUserProfile = async (req: AuthRequest, res: Response) => {
  try {
    // Ensure user is authenticated
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required',
      });
    }
    
    const userId = req.user.id;
    
    // Fetch user data
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        policies: true,
        capitalProviders: {
          include: {
            riskPool: {
              include: {
                community: true,
                eventType: true,
              },
            },
          },
        },
      },
    });
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
    
    // Return user data without password
    const { password, ...userWithoutPassword } = user;
    
    return res.status(200).json({
      success: true,
      data: userWithoutPassword,
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch user profile',
      error: (error as Error).message,
    });
  }
};

/**
 * Update user profile
 * @param req - Authenticated request with user info and updated data
 * @param res - Express response object
 * @returns Updated user data or error
 */
export const updateUserProfile = async (req: AuthRequest, res: Response) => {
  try {
    // Ensure user is authenticated
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required',
      });
    }
    
    const userId = req.user.id;
    const { fullName, phoneNumber, walletAddress } = req.body;
    
    // Check if wallet address is provided and if it's already in use
    if (walletAddress) {
      const userWithWallet = await prisma.user.findUnique({
        where: { walletAddress },
      });
      
      if (userWithWallet && userWithWallet.id !== userId) {
        return res.status(400).json({
          success: false,
          message: 'Wallet address is already linked to another account',
        });
      }
    }
    
    // Update user profile
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        fullName,
        phoneNumber,
        walletAddress,
        updatedAt: new Date(),
      },
    });
    
    // Return updated user data without password
    const { password, ...userWithoutPassword } = updatedUser;
    
    return res.status(200).json({
      success: true,
      data: userWithoutPassword,
      message: 'Profile updated successfully',
    });
  } catch (error) {
    console.error('Error updating user profile:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update profile',
      error: (error as Error).message,
    });
  }
};

/**
 * Get all users (admin only)
 * @param req - Authenticated request with admin user info
 * @param res - Express response object
 * @returns List of users or error
 */
export const getAllUsers = async (req: AuthRequest, res: Response) => {
  try {
    // Get all users without password field
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        fullName: true,
        phoneNumber: true,
        walletAddress: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            policies: true,
            capitalProviders: true,
          },
        },
      },
    });
    
    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch users',
      error: (error as Error).message,
    });
  }
}; 