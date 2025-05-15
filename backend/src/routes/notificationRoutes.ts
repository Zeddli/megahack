import express from 'express';
import { authenticate } from '../middleware/authMiddleware';
import { 
  getUserNotifications, 
  markNotificationAsRead, 
  markAllNotificationsAsRead 
} from '../controllers/notificationController';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Notification:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The notification ID
 *         userId:
 *           type: integer
 *           description: The user ID the notification belongs to
 *         type:
 *           type: string
 *           description: Type of notification
 *         title:
 *           type: string
 *           description: Notification title
 *         message:
 *           type: string
 *           description: Notification message content
 *         resourceId:
 *           type: integer
 *           description: ID of related resource (policy, payment, etc.)
 *         resourceType:
 *           type: string
 *           description: Type of related resource
 *         isRead:
 *           type: boolean
 *           description: Whether the notification has been read
 *         readAt:
 *           type: string
 *           format: date-time
 *           description: When the notification was read (if applicable)
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: When the notification was created
 */

/**
 * @swagger
 * /notifications:
 *   get:
 *     summary: Get all notifications for current user
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of user's notifications
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
 *                     $ref: '#/components/schemas/Notification'
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */
router.get('/', authenticate, getUserNotifications);

/**
 * @swagger
 * /notifications/{id}/mark-read:
 *   put:
 *     summary: Mark a notification as read
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Notification ID
 *     responses:
 *       200:
 *         description: Notification marked as read
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid notification ID
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Notification not found
 *       500:
 *         description: Server error
 */
router.put('/:id/mark-read', authenticate, markNotificationAsRead);

/**
 * @swagger
 * /notifications/mark-all-read:
 *   put:
 *     summary: Mark all notifications as read
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All notifications marked as read
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */
router.put('/mark-all-read', authenticate, markAllNotificationsAsRead);

export default router; 