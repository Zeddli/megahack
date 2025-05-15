import express from 'express';
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  getWalletData
} from '../controllers/userController';
import { validateCreateUser, validateLogin } from '../middleware/validationMiddleware';
import { authenticate, isAdmin } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        id:
 *          type: integer
 *          description: The auto-generated ID of the user
 *        email:
 *          type: string
 *          format: email
 *          description: User's email address
 *        fullName:
 *          type: string
 *          description: User's full name
 *        phoneNumber:
 *          type: string
 *          description: User's phone number
 *        walletAddress:
 *          type: string
 *          description: User's Solana wallet address
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: The date the user was created
 *        updatedAt:
 *          type: string
 *          format: date-time
 *          description: The date the user was last updated
 *    UserRegistration:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          format: email
 *        password:
 *          type: string
 *          format: password
 *          minLength: 6
 *        fullName:
 *          type: string
 *        phoneNumber:
 *          type: string
 *        walletAddress:
 *          type: string
 *    LoginCredentials:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          format: email
 *        password:
 *          type: string
 *    AuthResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        data:
 *          type: object
 *          properties:
 *            user:
 *              $ref: '#/components/schemas/User'
 *            accessToken:
 *              type: string
 *              description: JWT access token for authentication
 *            refreshToken:
 *              type: string
 *              description: Refresh token for obtaining new access tokens
 *            expiresIn:
 *              type: integer
 *              description: Access token expiration time in seconds
 *        message:
 *          type: string
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/register', validateCreateUser, registerUser);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: User login
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput'
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', validateLogin, loginUser);

/**
 * @swagger
 * /users/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *       401:
 *         description: Not authenticated
 */
router.get('/profile', authenticate, getUserProfile);

/**
 * @swagger
 * /users/profile:
 *   put:
 *     summary: Update user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUserInput'
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *       401:
 *         description: Not authenticated
 */
router.put('/profile', authenticate, updateUserProfile);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users (admin only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Not authorized
 */
router.get('/', authenticate, isAdmin, getAllUsers);

/**
 * @swagger
 * /users/link-wallet:
 *   put:
 *     summary: Link a wallet address to the user account
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
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
 *                 description: The blockchain wallet address to link
 *     responses:
 *       200:
 *         description: Wallet linked successfully
 *       400:
 *         description: Invalid request or wallet already linked to another account
 *       401:
 *         description: Not authenticated
 */
router.put('/link-wallet', authenticate, updateUserProfile);

/**
 * @swagger
 * /users/wallet-data:
 *   get:
 *     summary: Get wallet-related data for the user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Wallet data retrieved successfully
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Wallet not linked or no data found
 */
router.get('/wallet-data', authenticate, getWalletData);

export default router; 