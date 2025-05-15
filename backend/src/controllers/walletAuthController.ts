import { Request, Response } from 'express';
import walletAuthService from '../services/walletAuthService';
import { logger } from '../utils/logger';

/**
 * Generate a nonce for wallet signature verification
 * @param req - Express request object
 * @param res - Express response object
 * @returns Nonce to be signed by wallet
 */
export const getNonce = (req: Request, res: Response) => {
  try {
    const nonce = walletAuthService.generateNonce();
    
    // Return the nonce to be signed by the wallet
    return res.status(200).json({
      success: true,
      data: {
        nonce,
        message: `Sign this message to authenticate: ${nonce}`
      }
    });
  } catch (error) {
    logger.error('Error generating nonce:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to generate authentication nonce'
    });
  }
};

/**
 * Verify wallet signature and issue JWT token
 * @param req - Express request object
 * @param res - Express response object
 * @returns JWT token or error
 */
export const verifyWalletSignature = async (req: Request, res: Response) => {
  try {
    const { walletAddress, message, signature } = req.body;
    
    // Validate inputs
    if (!walletAddress || !message || !signature) {
      return res.status(400).json({
        success: false,
        message: 'Wallet address, message, and signature are required'
      });
    }
    
    // Verify the signature
    const isValid = await walletAuthService.verifySignature(walletAddress, message, signature);
    
    if (!isValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid signature'
      });
    }
    
    // Generate token
    const token = walletAuthService.generateToken(walletAddress);
    
    // Return token to client
    return res.status(200).json({
      success: true,
      data: {
        token,
        walletAddress
      },
      message: 'Wallet authenticated successfully'
    });
  } catch (error) {
    logger.error('Error verifying wallet signature:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to verify wallet signature'
    });
  }
}; 