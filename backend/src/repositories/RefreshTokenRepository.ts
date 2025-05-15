import BaseRepository from './BaseRepository';
import { RefreshToken, RefreshTokenCreateData } from '../models/RefreshToken';
import { config } from '../config/appwrite';
import { Query } from 'node-appwrite';

/**
 * Repository for RefreshToken collection operations
 */
export default class RefreshTokenRepository extends BaseRepository<RefreshToken> {
  /**
   * Initialize with the refresh tokens collection ID
   */
  constructor() {
    super(config.collections.refreshTokens);
  }
  
  /**
   * Find a refresh token by token string
   * @param token - Token string to search for
   * @returns RefreshToken document or null if not found
   */
  async findByToken(token: string): Promise<RefreshToken | null> {
    return this.findOneByField('token', token);
  }
  
  /**
   * Create a new refresh token
   * @param data - RefreshToken data
   * @returns Created RefreshToken document
   */
  async createRefreshToken(data: RefreshTokenCreateData): Promise<RefreshToken> {
    const now = new Date().toISOString();
    
    try {
      return this.create({
        ...data,
        createdAt: now,
        updatedAt: now
      });
    } catch (error) {
      // If there's an error about unknown attribute "expiresAt", try without it
      if (error instanceof Error && 
          error.message.includes('Unknown attribute: "expiresAt"')) {
        console.warn('RefreshToken collection does not have expiresAt field, creating without it');
        const { expiresAt, ...dataWithoutExpiry } = data;
        return this.create({
          ...dataWithoutExpiry,
          createdAt: now,
          updatedAt: now
        });
      }
      throw error;
    }
  }
  
  /**
   * Revoke a refresh token by marking it as revoked
   * @param token - Token string to revoke
   * @returns Updated token document or null if not found
   */
  async revokeToken(token: string): Promise<RefreshToken | null> {
    const tokenDoc = await this.findByToken(token);
    
    if (!tokenDoc) {
      return null;
    }
    
    return this.update(tokenDoc.$id, {
      isRevoked: true,
      updatedAt: new Date().toISOString()
    });
  }
  
  /**
   * Revoke all refresh tokens for a specific user
   * @param userId - User ID whose tokens should be revoked
   * @returns Number of tokens revoked
   */
  async revokeAllUserTokens(userId: string): Promise<number> {
    try {
      const tokens = await this.findByField('userId', userId);
      
      if (tokens.length === 0) {
        return 0;
      }
      
      // Revoke each token individually
      const revokedTokens = await Promise.all(
        tokens.map(token => this.update(token.$id, {
          isRevoked: true,
          updatedAt: new Date().toISOString()
        }))
      );
      
      return revokedTokens.length;
    } catch (error) {
      console.error('Error revoking all user tokens:', error);
      throw error;
    }
  }
  
  /**
   * Check if a token is valid (exists, not expired, not revoked)
   * @param token - Token string to check
   * @returns True if valid, false otherwise
   */
  async isTokenValid(token: string): Promise<boolean> {
    const tokenDoc = await this.findByToken(token);
    
    if (!tokenDoc) {
      return false;
    }
    
    if (tokenDoc.isRevoked) {
      return false;
    }
    
    // Check expiration only if expiresAt field exists
    if (tokenDoc.expiresAt) {
      const now = new Date();
      const expiresAt = new Date(tokenDoc.expiresAt);
      
      return now < expiresAt;
    }
    
    // If no expiresAt field, consider it valid (or implement alternative logic)
    // For example, check createdAt and consider tokens valid for 30 days
    if (tokenDoc.createdAt) {
      const now = new Date();
      const createdAt = new Date(tokenDoc.createdAt);
      const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
      
      return (now.getTime() - createdAt.getTime()) < thirtyDaysInMs;
    }
    
    return true;
  }
  
  /**
   * Delete expired tokens for cleanup
   * @returns Number of tokens deleted
   */
  async cleanupExpiredTokens(): Promise<number> {
    try {
      let tokens: RefreshToken[] = [];
      
      try {
        const now = new Date().toISOString();
        tokens = await this.findWithQueries([
          Query.lessThan('expiresAt', now)
        ]);
      } catch (error) {
        // If expiresAt field doesn't exist, try an alternative approach
        if (error instanceof Error && 
            error.message.includes('Unknown attribute: "expiresAt"')) {
          console.warn('RefreshToken collection does not have expiresAt field, using createdAt for cleanup');
          
          // Get all tokens
          const allTokens = await this.findAll(1000, 0);
          
          // Filter tokens that are older than 30 days
          const now = new Date();
          const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
          
          tokens = allTokens.filter(token => {
            if (!token.createdAt) return false;
            
            const createdAt = new Date(token.createdAt);
            return (now.getTime() - createdAt.getTime()) > thirtyDaysInMs;
          });
        } else {
          throw error;
        }
      }
      
      if (tokens.length === 0) {
        return 0;
      }
      
      // Delete each expired token
      const deletedTokens = await Promise.all(
        tokens.map(token => this.delete(token.$id))
      );
      
      return deletedTokens.filter(success => success).length;
    } catch (error) {
      console.error('Error cleaning up expired tokens:', error);
      throw error;
    }
  }
} 