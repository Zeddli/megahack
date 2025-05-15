import express from 'express';
import { authenticate, isAdmin } from '../middleware/authMiddleware';
import { 
  getRecentLogs, 
  getEntityLogs, 
  getUserLogs, 
  getLogsByAction 
} from '../controllers/auditLogController';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     AuditLog:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The audit log ID
 *         userId:
 *           type: integer
 *           description: The user ID who performed the action (if applicable)
 *         action:
 *           type: string
 *           description: The action performed
 *         entity:
 *           type: string
 *           description: The entity affected
 *         entityId:
 *           type: integer
 *           description: ID of the affected entity
 *         oldValues:
 *           type: string
 *           description: JSON string of previous values (if applicable)
 *         newValues:
 *           type: string
 *           description: JSON string of new values (if applicable)
 *         metadata:
 *           type: string
 *           description: Additional context (JSON string)
 *         ipAddress:
 *           type: string
 *           description: IP address of the request (if available)
 *         userAgent:
 *           type: string
 *           description: User agent of the request (if available)
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: When the audit log was created
 */

/**
 * @swagger
 * /audit/logs:
 *   get:
 *     summary: Get recent audit logs (admin only)
 *     tags: [Audit]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 100
 *         description: Maximum number of logs to return
 *     responses:
 *       200:
 *         description: List of recent audit logs
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
 *                     $ref: '#/components/schemas/AuditLog'
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Not authorized (admin only)
 *       500:
 *         description: Server error
 */
router.get('/logs', authenticate, isAdmin, getRecentLogs);

/**
 * @swagger
 * /audit/entity/{entity}/{entityId}:
 *   get:
 *     summary: Get logs for a specific entity (admin only)
 *     tags: [Audit]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: entity
 *         schema:
 *           type: string
 *           enum: [User, Policy, Payment, Payout, RiskPool, CapitalProvider, OracleData, System]
 *         required: true
 *         description: Entity type
 *       - in: path
 *         name: entityId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Entity ID
 *     responses:
 *       200:
 *         description: List of audit logs for the entity
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
 *                     $ref: '#/components/schemas/AuditLog'
 *       400:
 *         description: Invalid entity or entity ID
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Not authorized (admin only)
 *       500:
 *         description: Server error
 */
router.get('/entity/:entity/:entityId', authenticate, isAdmin, getEntityLogs);

/**
 * @swagger
 * /audit/user/{userId}:
 *   get:
 *     summary: Get logs for a specific user (admin or self)
 *     tags: [Audit]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: List of audit logs for the user
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
 *                     $ref: '#/components/schemas/AuditLog'
 *       400:
 *         description: Invalid user ID
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Not authorized (admin or self only)
 *       500:
 *         description: Server error
 */
router.get('/user/:userId', authenticate, getUserLogs);

/**
 * @swagger
 * /audit/action/{action}:
 *   get:
 *     summary: Get logs by action type (admin only)
 *     tags: [Audit]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: action
 *         schema:
 *           type: string
 *         required: true
 *         description: Action type (e.g., USER_CREATE, POLICY_UPDATE)
 *     responses:
 *       200:
 *         description: List of audit logs for the action
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
 *                     $ref: '#/components/schemas/AuditLog'
 *       400:
 *         description: Invalid action type
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Not authorized (admin only)
 *       500:
 *         description: Server error
 */
router.get('/action/:action', authenticate, isAdmin, getLogsByAction);

export default router; 