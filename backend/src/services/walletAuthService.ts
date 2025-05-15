import jwt from 'jsonwebtoken';
import { ethers } from 'ethers';
import { logger } from '../utils/logger';

// JWT secret from environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'farm-protection-platform-secret';

class WalletAuthService {
  /**
   * Verify a wallet signature to authenticate a user
   * @param address Wallet address
   * @param message Original message that was signed
   * @param signature Signature produced by wallet
   * @returns True if signature is valid
   */
  async verifySignature(address: string, message: string, signature: string): Promise<boolean> {
    try {
      // Recover the address from the signature
      const recoveredAddress = ethers.verifyMessage(message, signature);
      return recoveredAddress.toLowerCase() === address.toLowerCase();
    } catch (error) {
      logger.error('Signature verification error:', error);
      return false;
    }
  }

  /**
   * Generate a JWT token for a wallet address
   * @param walletAddress User's wallet address
   * @returns JWT token
   */
  generateToken(walletAddress: string): string {
    return jwt.sign(
      { 
        walletAddress,
        type: 'access'
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
  }

  /**
   * Verify a JWT token
   * @param token JWT token
   * @returns Decoded token payload or null if invalid
   */
  verifyToken(token: string): any {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      logger.error('Token verification error:', error);
      return null;
    }
  }

  /**
   * Generate a nonce for wallet signature verification
   * @returns Random nonce string
   */
  generateNonce(): string {
    return Math.floor(Math.random() * 1000000).toString();
  }
}

export default new WalletAuthService(); 