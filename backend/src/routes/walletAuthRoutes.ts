import express from 'express';
import { getNonce, verifyWalletSignature } from '../controllers/walletAuthController';

const router = express.Router();

/**
 * Routes for wallet authentication
 * 
 * GET /api/wallet-auth/nonce - Get a nonce for wallet signature
 * POST /api/wallet-auth/verify - Verify wallet signature and issue token
 */

// Get nonce for signing
router.get('/nonce', getNonce);

// Verify wallet signature and issue token
router.post('/verify', verifyWalletSignature);

export default router; 