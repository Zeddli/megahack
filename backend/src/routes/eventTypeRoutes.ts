import express from 'express';
import { getEventTypes, getEventTypeById, createEventType, updateEventType, deleteEventType } from '../controllers/eventTypeController';
import { validateCreateEventType, validateUpdateEventType } from '../middleware/validationMiddleware';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     EventType:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the event type
 *         name:
 *           type: string
 *           description: Name of the event type (e.g., rainfall shortage)
 *         description:
 *           type: string
 *           description: Detailed description of the event type
 *     CreateEventType:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the event type
 *         description:
 *           type: string
 *           description: Detailed description of the event type
 */

/**
 * @swagger
 * /event-types:
 *   get:
 *     summary: Get all event types
 *     tags: [Event Types]
 *     responses:
 *       200:
 *         description: List of all event types
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
 *                     $ref: '#/components/schemas/EventType'
 *       500:
 *         description: Server error
 */
router.get('/', getEventTypes);

/**
 * @swagger
 * /event-types/{id}:
 *   get:
 *     summary: Get event type by ID
 *     tags: [Event Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the event type
 *     responses:
 *       200:
 *         description: Event type details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/EventType'
 *       404:
 *         description: Event type not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getEventTypeById);

/**
 * @swagger
 * /event-types:
 *   post:
 *     summary: Create a new event type
 *     tags: [Event Types]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateEventType'
 *     responses:
 *       201:
 *         description: Event type created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/EventType'
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */
router.post('/', authenticate, validateCreateEventType, createEventType);

/**
 * @swagger
 * /event-types/{id}:
 *   put:
 *     summary: Update an event type
 *     tags: [Event Types]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the event type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Event type updated successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Event type not found
 *       500:
 *         description: Server error
 */
router.put('/:id', authenticate, validateUpdateEventType, updateEventType);

/**
 * @swagger
 * /event-types/{id}:
 *   delete:
 *     summary: Delete an event type
 *     tags: [Event Types]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the event type
 *     responses:
 *       200:
 *         description: Event type deleted successfully
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Event type not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', authenticate, deleteEventType);

export default router; 