import express from 'express';
import { authenticate, isAdmin } from '../middleware/authMiddleware';
import { 
  processPremiumPayment, 
  verifyPayment, 
  getUserPayments, 
  getUserPayouts, 
  getPayoutById, 
  connectWallet, 
  processPayout 
} from '../controllers/paymentController';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Payment:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the payment
 *         policyId:
 *           type: integer
 *           description: The ID of the associated policy
 *         amount:
 *           type: number
 *           format: decimal
 *           description: Payment amount
 *         paymentTxHash:
 *           type: string
 *           description: Blockchain transaction hash (if applicable)
 *         paidAt:
 *           type: string
 *           format: date-time
 *           description: When the payment was made
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: When payment record was created
 *     Payout:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the payout
 *         policyId:
 *           type: integer
 *           description: The ID of the associated policy
 *         riskPoolId:
 *           type: integer
 *           description: The ID of the risk pool
 *         payoutAmount:
 *           type: number
 *           format: decimal
 *           description: Payout amount
 *         payoutTxHash:
 *           type: string
 *           description: Blockchain transaction hash (if applicable)
 *         paidAt:
 *           type: string
 *           format: date-time
 *           description: When the payout was executed
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: When payout record was created
 */

/**
 * @swagger
 * /payments/premium:
 *   post:
 *     summary: Process premium payment
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - policyId
 *               - amount
 *             properties:
 *               policyId:
 *                 type: integer
 *                 description: Policy ID to pay for
 *               amount:
 *                 type: number
 *                 format: decimal
 *                 description: Payment amount
 *               paymentMethod:
 *                 type: string
 *                 enum: [wallet, card, mobile_money]
 *                 description: Payment method to use
 *     responses:
 *       200:
 *         description: Payment processed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Payment'
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid payment information
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Policy not found
 *       500:
 *         description: Server error
 */
router.post('/premium', authenticate, processPremiumPayment);

/**
 * @swagger
 * /payments/verify/{paymentId}:
 *   get:
 *     summary: Verify payment status
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: paymentId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment ID to verify
 *     responses:
 *       200:
 *         description: Payment verification result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     verified:
 *                       type: boolean
 *                     payment:
 *                       $ref: '#/components/schemas/Payment'
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Server error
 */
router.get('/verify/:paymentId', authenticate, verifyPayment);

/**
 * @swagger
 * /payments/user:
 *   get:
 *     summary: Get all payments for current user
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of user's payments
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Payment'
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */
router.get('/user', authenticate, getUserPayments);

/**
 * @swagger
 * /payments/payouts:
 *   get:
 *     summary: Get all payouts for current user
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of user's payouts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Payout'
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */
router.get('/payouts', authenticate, getUserPayouts);

/**
 * @swagger
 * /payments/payouts/{id}:
 *   get:
 *     summary: Get payout details by ID
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payout ID
 *     responses:
 *       200:
 *         description: Payout details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Payout'
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Not authorized
 *       404:
 *         description: Payout not found
 *       500:
 *         description: Server error
 */
router.get('/payouts/:id', authenticate, getPayoutById);

/**
 * @swagger
 * /payments/wallet/connect:
 *   post:
 *     summary: Connect Solana wallet for blockchain payments
 *     tags: [Payments]
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
 *                 description: Solana wallet address
 *     responses:
 *       200:
 *         description: Wallet connected successfully
 *       400:
 *         description: Invalid wallet address
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */
router.post('/wallet/connect', authenticate, connectWallet);

/**
 * @swagger
 * /payments/process-payout:
 *   post:
 *     summary: Process payout for a triggered policy (admin only)
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - policyId
 *               - payoutAmount
 *               - riskPoolId
 *             properties:
 *               policyId:
 *                 type: integer
 *                 description: Policy ID to process payout for
 *               payoutAmount:
 *                 type: number
 *                 format: decimal
 *                 description: Payout amount
 *               payoutTxHash:
 *                 type: string
 *                 description: Blockchain transaction hash (if applicable)
 *               riskPoolId:
 *                 type: integer
 *                 description: Risk pool ID
 *     responses:
 *       200:
 *         description: Payout processed successfully
 *       400:
 *         description: Invalid payout information
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Not authorized (admin only)
 *       500:
 *         description: Server error
 */
router.post('/process-payout', authenticate, isAdmin, processPayout);

export default router; 