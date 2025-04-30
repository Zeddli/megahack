import express from 'express';
import { getEventTypes, getEventTypeById, createEventType, updateEventType, deleteEventType } from '../controllers/eventTypeController';
import { validateCreateEventType, validateUpdateEventType } from '../middleware/validationMiddleware';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @route GET /api/event-types
 * @desc Get all event types (rainfall shortage, power outage, flooding)
 * @access Public
 */
router.get('/', getEventTypes);

/**
 * @route GET /api/event-types/:id
 * @desc Get event type by ID
 * @access Public
 */
router.get('/:id', getEventTypeById);

/**
 * @route POST /api/event-types
 * @desc Create a new event type
 * @access Private (Admin)
 */
router.post('/', authenticate, validateCreateEventType, createEventType);

/**
 * @route PUT /api/event-types/:id
 * @desc Update an event type
 * @access Private (Admin)
 */
router.put('/:id', authenticate, validateUpdateEventType, updateEventType);

/**
 * @route DELETE /api/event-types/:id
 * @desc Delete an event type
 * @access Private (Admin)
 */
router.delete('/:id', authenticate, deleteEventType);

export default router; 