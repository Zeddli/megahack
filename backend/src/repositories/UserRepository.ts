import BaseRepository from './BaseRepository';
import { User, UserCreateData } from '../models/User';
import { config } from '../config/appwrite';
import { Query } from 'node-appwrite';
import bcrypt from 'bcrypt';

/**
 * Repository for User collection operations
 */
export default class UserRepository extends BaseRepository<User> {
  /**
   * Initialize with the users collection ID
   */
  constructor() {
    super(config.collections.users);
  }
  
  /**
   * Find a user by email
   * @param email - User email to search for
   * @returns User document or null if not found
   */
  async findByEmail(email: string): Promise<User | null> {
    return this.findOneByField('email', email);
  }
  
  /**
   * Find a user by wallet address
   * @param walletAddress - Wallet address to search for
   * @returns User document or null if not found
   */
  async findByWalletAddress(walletAddress: string): Promise<User | null> {
    return this.findOneByField('walletAddress', walletAddress);
  }
  
  /**
   * Create a new user with hashed password
   * @param userData - User data including plain text password
   * @returns Created user document
   */
  async createUser(userData: UserCreateData): Promise<User> {
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    
    // Prepare user data with timestamps
    const now = new Date().toISOString();
    const newUserData = {
      ...userData,
      password: hashedPassword,
      createdAt: now,
      updatedAt: now
    };
    
    // Create the user
    return this.create(newUserData);
  }
  
  /**
   * Update a user's profile
   * @param id - User ID
   * @param data - User data to update
   * @returns Updated user document
   */
  async updateProfile(id: string, data: Partial<User>): Promise<User> {
    // Update the updatedAt timestamp
    const updateData = {
      ...data,
      updatedAt: new Date().toISOString()
    };
    
    return this.update(id, updateData);
  }
  
  /**
   * Update a user's password
   * @param id - User ID
   * @param newPassword - New password in plain text
   * @returns Updated user document
   */
  async updatePassword(id: string, newPassword: string): Promise<User> {
    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    
    // Update the user with new password and timestamp
    return this.update(id, {
      password: hashedPassword,
      updatedAt: new Date().toISOString()
    });
  }
  
  /**
   * Find users with policies by querying relationships
   * @param limit - Optional limit of users to return
   * @param offset - Optional offset for pagination
   * @returns Array of users with their policies
   */
  async findUsersWithPolicies(limit = 100, offset = 0): Promise<User[]> {
    // In Appwrite, we need to do this as separate queries or using relations
    const users = await this.findAll(limit, offset);
    
    // Note: In Appwrite, the actual policies would need to be fetched separately 
    // using a PolicyRepository and related by user ID
    
    return users;
  }
} 