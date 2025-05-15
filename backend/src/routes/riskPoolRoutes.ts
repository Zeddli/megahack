import express from 'express';
import { 
  getRiskPools, 
  getRiskPoolById, 
  createRiskPool, 
  updateRiskPool, 
  deleteRiskPool,
  addCapitalProvider,
  removeCapitalProvider
} from '../controllers/riskPoolController';
import { validateCreateRiskPool, validateUpdateRiskPool } from '../middleware/validationMiddleware';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     RiskPool:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the risk pool
 *         communityId:
 *           type: integer
 *           description: The ID of the community this pool serves
 *         eventTypeId:
 *           type: integer
 *           description: The ID of the event type this pool covers
 *         totalCapital:
 *           type: number
 *           format: decimal
 *           description: The total capital available in the pool
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the risk pool was created
 *         community:
 *           $ref: '#/components/schemas/Community'
 *         eventType:
 *           $ref: '#/components/schemas/EventType'
 *     Community:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         description:
 *           type: string
 *     EventType:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         description:
 *           type: string
 *     CreateRiskPool:
 *       type: object
 *       required:
 *         - communityId
 *         - eventTypeId
 *       properties:
 *         communityId:
 *           type: integer
 *         eventTypeId:
 *           type: integer
 *     CapitalProvider:
 *       type: object
 *       required:
 *         - userId
 *         - stakeAmount
 *       properties:
 *         userId:
 *           type: integer
 *           description: The ID of the user providing capital
 *         stakeAmount:
 *           type: number
 *           format: decimal
 *           description: Amount of capital being staked
 */

/**
 * @swagger
 * /risk-pools:
 *   get:
 *     summary: Get all risk pools
 *     tags: [Risk Pools]
 *     responses:
 *       200:
 *         description: List of all risk pools
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
 *                     $ref: '#/components/schemas/RiskPool'
 *       500:
 *         description: Server error
 */
router.get('/', getRiskPools);

/**
 * @swagger
 * /risk-pools/{id}:
 *   get:
 *     summary: Get risk pool by ID
 *     tags: [Risk Pools]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the risk pool
 *     responses:
 *       200:
 *         description: Risk pool details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/RiskPool'
 *       404:
 *         description: Risk pool not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getRiskPoolById);

/**
 * @swagger
 * /risk-pools:
 *   post:
 *     summary: Create a new risk pool
 *     tags: [Risk Pools]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateRiskPool'
 *     responses:
 *       201:
 *         description: Risk pool created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/RiskPool'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */
router.post('/', authenticate, validateCreateRiskPool, createRiskPool);

/**
 * @swagger
 * /risk-pools/{id}:
 *   put:
 *     summary: Update a risk pool
 *     tags: [Risk Pools]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the risk pool
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               communityId:
 *                 type: integer
 *               eventTypeId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Risk pool updated successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Risk pool not found
 *       500:
 *         description: Server error
 */
router.put('/:id', authenticate, validateUpdateRiskPool, updateRiskPool);

/**
 * @swagger
 * /risk-pools/{id}:
 *   delete:
 *     summary: Delete a risk pool
 *     tags: [Risk Pools]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the risk pool
 *     responses:
 *       200:
 *         description: Risk pool deleted successfully
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Risk pool not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', authenticate, deleteRiskPool);

/**
 * @swagger
 * /risk-pools/{id}/capital:
 *   post:
 *     summary: Add capital provider to risk pool
 *     tags: [Risk Pools]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the risk pool
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CapitalProvider'
 *     responses:
 *       201:
 *         description: Capital provider added successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Risk pool not found
 *       500:
 *         description: Server error
 */
router.post('/:id/capital', authenticate, addCapitalProvider);

/**
 * @swagger
 * /risk-pools/{id}/capital/{providerId}:
 *   delete:
 *     summary: Remove capital provider from risk pool
 *     tags: [Risk Pools]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the risk pool
 *       - in: path
 *         name: providerId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the capital provider
 *     responses:
 *       200:
 *         description: Capital provider removed successfully
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Risk pool or capital provider not found
 *       500:
 *         description: Server error
 */
router.delete('/:id/capital/:providerId', authenticate, removeCapitalProvider);

export default router; 