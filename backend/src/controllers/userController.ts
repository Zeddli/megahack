import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { AuthRequest } from '../middleware/authMiddleware';
import { generateTokens } from '../services/tokenService';
import UserRepository from '../repositories/UserRepository';
import { User, SafeUser, UserUpdateData } from '../models/User';
import { appwrite } from '../services/appwriteService';

// Initialize repositories
const userRepository = new UserRepository();

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
    const existingUser = await userRepository.findByEmail(email);
    
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists',
      });
    }
    
    // Check if wallet address is provided and if it's already in use
    if (walletAddress) {
      const userWithWallet = await userRepository.findByWalletAddress(walletAddress);
      
      if (userWithWallet) {
        return res.status(400).json({
          success: false,
          message: 'Wallet address is already linked to another account',
        });
      }
    }
    
    // Create new user using the repository
    const newUser = await userRepository.createUser({
      email,
      password,
      fullName,
      phoneNumber,
      walletAddress
    });
    
    // Generate tokens using the token service
    const tokens = await generateTokens({
      id: newUser.$id,
      email: newUser.email,
    });
    
    // Return user data without password
    const { password: _, ...userWithoutPassword } = newUser;
    
    return res.status(201).json({
      success: true,
      data: {
        user: userWithoutPassword,
        ...tokens,
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
 * @returns User data and tokens or error
 */
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    
    // Find user by email
    const user = await userRepository.findByEmail(email);
    
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
    const user = await userRepository.findById(userId);
    
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
      const userWithWallet = await userRepository.findByWalletAddress(walletAddress);
      
      if (userWithWallet && userWithWallet.$id !== userId) {
        return res.status(400).json({
          success: false,
          message: 'Wallet address is already linked to another account',
        });
      }
    }
    
    // Update user profile
    const userData: UserUpdateData = {
      fullName,
      phoneNumber,
      walletAddress
    };
    
    const updatedUser = await userRepository.updateProfile(userId, userData);
    
    // Return user data without password
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
 * @returns List of all users or error
 */
export const getAllUsers = async (req: AuthRequest, res: Response) => {
  try {
    // Users are fetched with pagination
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;
    
    // Get users from repository
    const users = await userRepository.findAll(limit, offset);
    
    // Remove passwords from user data
    const safeUsers: SafeUser[] = users.map(user => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword as SafeUser;
    });
    
    return res.status(200).json({
      success: true,
      data: safeUsers,
      pagination: {
        page,
        limit,
        total: safeUsers.length // Note: This doesn't give the total count, just the current page count
      }
    });
  } catch (error) {
    console.error('Error fetching all users:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch users',
      error: (error as Error).message,
    });
  }
};

/**
 * Get wallet-related data for the user
 * @param req - Authenticated request with user info
 * @param res - Express response object
 * @returns Wallet data including blockchain information
 */
export const getWalletData = async (req: AuthRequest, res: Response) => {
  try {
    // Ensure user is authenticated
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required',
      });
    }
    
    const userId = req.user.id;
    
    // Fetch user data to get the wallet address
    const user = await userRepository.findById(userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
    
    // Check if user has a linked wallet
    if (!user.walletAddress) {
      return res.status(404).json({
        success: false,
        message: 'No wallet linked to this account',
      });
    }
    
    // Query blockchain data for the wallet address
    const walletAddress = user.walletAddress;
    
    // Fetch policies linked to this wallet address from the database
    // This data is synced from the blockchain by the blockchain-sync service
    const { databases } = appwrite;
    
    interface PolicyDocument {
      status: string;
      coverageAmount: string;
      [key: string]: any;
    }
    
    interface TransactionDocument {
      [key: string]: any;
    }
    
    let policies: PolicyDocument[] = [];
    let transactions: TransactionDocument[] = [];
    
    try {
      // Query policies where owner matches the wallet address
      const policiesResponse = await databases.listDocuments(
        process.env.APPWRITE_DATABASE_ID || '',
        process.env.APPWRITE_COLLECTION_POLICIES_ID || '',
        [
          appwrite.Query.equal('owner', walletAddress)
        ]
      );
      
      if (policiesResponse && policiesResponse.documents) {
        policies = policiesResponse.documents as unknown as PolicyDocument[];
      }
      
      // Query transactions related to this wallet address
      const transactionsResponse = await databases.listDocuments(
        process.env.APPWRITE_DATABASE_ID || '',
        process.env.APPWRITE_COLLECTION_TRANSACTIONS_ID || '',
        [
          appwrite.Query.equal('sender', walletAddress)
        ]
      );
      
      if (transactionsResponse && transactionsResponse.documents) {
        transactions = transactionsResponse.documents as unknown as TransactionDocument[];
      }
    } catch (error) {
      console.error('Error fetching blockchain data from Appwrite:', error);
    }
    
    // Calculate total funds, active policies, etc.
    const totalActivePolicies = policies.filter((p: any) => p.status === 'Active').length;
    const totalPolicyValue = policies.reduce((sum: number, policy: any) => {
      return sum + (parseInt(policy.coverageAmount) || 0);
    }, 0);
    
    // Return consolidated data
    return res.status(200).json({
      success: true,
      data: {
        walletAddress,
        policies,
        transactions,
        summary: {
          totalActivePolicies,
          totalPolicyValue,
          totalTransactions: transactions.length,
        }
      },
    });
  } catch (error) {
    console.error('Error fetching wallet data:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch wallet data',
      error: (error as Error).message,
    });
  }
}; 