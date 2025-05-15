/**
 * RefreshToken model interface
 */
export interface RefreshToken {
  $id: string;
  userId: string;
  token: string;
  expiresAt?: string; // ISO date string, optional
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  isRevoked: boolean;
}

/**
 * RefreshToken creation data
 */
export type RefreshTokenCreateData = Omit<RefreshToken, '$id' | 'createdAt' | 'updatedAt'>; 