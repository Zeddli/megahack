import express from 'express';
import { refreshToken, logout, getSession, walletLogin } from '../controllers/authController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    RefreshTokenRequest:
 *      type: object
 *      required:
 *        - refreshToken
 *      properties:
 *        refreshToken:
 *          type: string
 *          description: The refresh token string
 *    TokenResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        data:
 *          type: object
 *          properties:
 *            accessToken:
 *              type: string
 *              description: JWT access token
 *            refreshToken:
 *              type: string
 *              description: Refresh token for obtaining new access tokens
 *            expiresIn:
 *              type: integer
 *              description: Token expiration time in seconds
 *        message:
 *          type: string
 *    LogoutRequest:
 *      type: object
 *      required:
 *        - refreshToken
 *      properties:
 *        refreshToken:
 *          type: string
 *          description: The refresh token to revoke
 *    SessionResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        data:
 *          type: object
 *          properties:
 *            user:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                email:
 *                  type: string
 *                role:
 *                  type: string
 *            isAuthenticated:
 *              type: boolean
 *        message:
 *          type: string
 */

/**
 * @swagger
 * /auth/refresh:
 *   post:
 *     summary: Refresh access token
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RefreshTokenRequest'
 *     responses:
 *       200:
 *         description: Token refreshed successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TokenResponse'
 *       400:
 *         description: Refresh token not provided
 *       401:
 *         description: Invalid or expired refresh token
 *       500:
 *         description: Server error
 */
router.post('/refresh', refreshToken);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout user by revoking refresh token
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LogoutRequest'
 *     responses:
 *       200:
 *         description: Logged out successfully
 *       400:
 *         description: Refresh token not provided
 *       500:
 *         description: Server error
 */
router.post('/logout', logout);

/**
 * @swagger
 * /auth/session:
 *   get:
 *     summary: Get current session information
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current session information
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */
router.get('/session', authenticate, getSession);

/**
 * @swagger
 * /auth/wallet-login:
 *   post:
 *     summary: Login using a wallet address
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - walletAddress
 *             properties:
 *               walletAddress:
 *                 type: string
 *                 description: The blockchain wallet address
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid request
 *       401:
 *         description: No account found with this wallet address
 */
router.post('/wallet-login', walletLogin);

export default router; 