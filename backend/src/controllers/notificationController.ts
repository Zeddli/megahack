import { Request, Response, NextFunction } from 'express';
import NotificationService from '../services/notificationService';
import { BadRequestError } from '../utils/errors';

const notificationService = new NotificationService();

/**
 * Get all notifications for the current user
 */
export const getUserNotifications = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      throw new BadRequestError('User ID is required');
    }

    const notifications = await notificationService.getUserNotifications(userId);

    return res.status(200).json({
      success: true,
      data: notifications
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Mark a notification as read
 */
export const markNotificationAsRead = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notificationId = parseInt(req.params.id);
    const userId = req.user?.id;

    if (!userId) {
      throw new BadRequestError('User ID is required');
    }

    if (isNaN(notificationId)) {
      throw new BadRequestError('Invalid notification ID');
    }

    await notificationService.markNotificationAsRead(notificationId, userId);

    return res.status(200).json({
      success: true,
      message: 'Notification marked as read'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Mark all notifications as read
 */
export const markAllNotificationsAsRead = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      throw new BadRequestError('User ID is required');
    }

    await notificationService.markAllNotificationsAsRead(userId);

    return res.status(200).json({
      success: true,
      message: 'All notifications marked as read'
    });
  } catch (error) {
    next(error);
  }
}; 