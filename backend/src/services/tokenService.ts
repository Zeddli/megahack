import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import config from '../config/config';
import UserRepository from '../repositories/UserRepository';
import RefreshTokenRepository from '../repositories/RefreshTokenRepository';

// Initialize repositories
const userRepository = new UserRepository();
const refreshTokenRepository = new RefreshTokenRepository();

/**
 * Interface for token payload
 */
export interface TokenPayload {
  id: string;
  email: string;
  role?: string;
}

/**
 * Interface for token response
 */
export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

/**
 * Generate access token (JWT)
 * @param payload - User data for token payload
 * @returns JWT access token
 */
export const generateAccessToken = (payload: TokenPayload): string => {
  const jwtSecret = config.jwt.secret;
  
  // Use any type to bypass strict type checking for jwt options
  const jwtOptions: any = { 
    expiresIn: config.jwt.expiration
  };
  
  return jwt.sign(payload, jwtSecret, jwtOptions);
};

/**
 * Generate refresh token and save to database
 * @param userId - User ID for whom to create refresh token
 * @returns Refresh token string
 */
export const generateRefreshToken = async (userId: string): Promise<string> => {
  // Create a new refresh token with UUID
  const token = uuidv4();
  
  // Calculate expiry date (30 days)
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30);
  
  try {
    // Save refresh token to database using repository
    await refreshTokenRepository.createRefreshToken({
      userId,
      token,
      expiresAt: expiresAt.toISOString(),
      isRevoked: false
    });
  } catch (error) {
    // If there's an error about unknown attribute "expiresAt", try without it
    if (error instanceof Error && 
        error.message.includes('Unknown attribute: "expiresAt"')) {
      console.warn('RefreshToken collection does not have expiresAt field, creating without it');
      await refreshTokenRepository.createRefreshToken({
        userId,
        token,
        isRevoked: false
      } as any);
    } else {
      // Re-throw any other errors
      throw error;
    }
  }
  
  return token;
};

/**
 * Generate both access and refresh tokens
 * @param payload - User data for token payload
 * @returns Object containing both tokens and expiry information
 */
export const generateTokens = async (payload: TokenPayload): Promise<TokenResponse> => {
  const accessToken = generateAccessToken(payload);
  const refreshToken = await generateRefreshToken(payload.id);
  
  // Convert string like '1h' to seconds
  const expiresIn = parseExpiryToSeconds(config.jwt.expiration);
  
  return {
    accessToken,
    refreshToken,
    expiresIn,
  };
};

/**
 * Verify access token
 * @param token - JWT token to verify
 * @returns Decoded token payload or null if invalid
 */
export const verifyAccessToken = (token: string): TokenPayload | null => {
  try {
    const jwtSecret = config.jwt.secret;
    const decoded = jwt.verify(token, jwtSecret) as TokenPayload;
    return decoded;
  } catch (error) {
    return null;
  }
};

/**
 * Verify refresh token from database
 * @param token - Refresh token to verify
 * @returns User ID associated with token or null if invalid
 */
export const verifyRefreshToken = async (token: string): Promise<string | null> => {
  try {
    // Find token in database
    const refreshToken = await refreshTokenRepository.findByToken(token);
    
    // Check if token exists and is not revoked
    if (!refreshToken || refreshToken.isRevoked) {
      return null;
    }
    
    // If expiresAt field exists, check token expiration
    if (refreshToken.expiresAt) {
      const now = new Date();
      const expiresAt = new Date(refreshToken.expiresAt);
      
      if (now > expiresAt) {
        // Token is expired, mark as revoked
        await refreshTokenRepository.revokeToken(token);
        return null;
      }
    } else if (refreshToken.createdAt) {
      // If no expiresAt field but createdAt exists, consider tokens valid for 30 days
      const now = new Date();
      const createdAt = new Date(refreshToken.createdAt);
      const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
      
      if ((now.getTime() - createdAt.getTime()) > thirtyDaysInMs) {
        // Token is older than 30 days, mark as revoked
        await refreshTokenRepository.revokeToken(token);
        return null;
      }
    }
    
    return refreshToken.userId;
  } catch (error) {
    console.error('Error verifying refresh token:', error);
    return null;
  }
};

/**
 * Refresh access token using refresh token
 * @param refreshToken - Refresh token string
 * @returns New access token or null if refresh token is invalid
 */
export const refreshAccessToken = async (refreshToken: string): Promise<TokenResponse | null> => {
  // Verify refresh token
  const userId = await verifyRefreshToken(refreshToken);
  
  if (!userId) {
    return null;
  }
  
  // Get user data for new token
  const user = await userRepository.findById(userId);
  
  if (!user) {
    return null;
  }
  
  // Create payload for new token
  const payload: TokenPayload = {
    id: user.$id,
    email: user.email,
  };
  
  // Generate new tokens
  return generateTokens(payload);
};

/**
 * Revoke a refresh token
 * @param token - Refresh token to revoke
 */
export const revokeRefreshToken = async (token: string): Promise<void> => {
  await refreshTokenRepository.revokeToken(token);
};

/**
 * Revoke all refresh tokens for a user
 * @param userId - User ID whose tokens should be revoked
 */
export const revokeAllUserTokens = async (userId: string): Promise<void> => {
  await refreshTokenRepository.revokeAllUserTokens(userId);
};

/**
 * Parse JWT expiry string (like '1h', '7d') to seconds
 * @param expiry - Expiry string
 * @returns Seconds until expiry
 */
const parseExpiryToSeconds = (expiry: string): number => {
  const unit = expiry.slice(-1);
  const value = parseInt(expiry.slice(0, -1), 10);
  
  switch (unit) {
    case 's':
      return value;
    case 'm':
      return value * 60;
    case 'h':
      return value * 60 * 60;
    case 'd':
      return value * 24 * 60 * 60;
    default:
      return 3600; // Default 1 hour
  }
}; 