import { PrismaClient, User, Policy } from '@prisma/client';
import { NotFoundError } from '../utils/errors';

const prisma = new PrismaClient();

/**
 * Types of notifications in the system
 */
export enum NotificationType {
  POLICY_CREATED = 'POLICY_CREATED',
  POLICY_ACTIVATED = 'POLICY_ACTIVATED',
  POLICY_EXPIRED = 'POLICY_EXPIRED',
  POLICY_PAYOUT = 'POLICY_PAYOUT',
  PAYMENT_PROCESSED = 'PAYMENT_PROCESSED',
  TRIGGER_DETECTED = 'TRIGGER_DETECTED',
  SYSTEM_NOTIFICATION = 'SYSTEM_NOTIFICATION'
}

/**
 * Interface for notification data
 */
interface NotificationData {
  userId: number;
  type: NotificationType;
  title: string;
  message: string;
  resourceId?: number; // Optional ID of related resource (policy, payment, etc.)
  resourceType?: string; // Type of resource (policy, payment, etc.)
  metadata?: Record<string, any>; // Additional data
}

/**
 * Service for handling user notifications
 */
export default class NotificationService {
  /**
   * Create a new notification
   */
  async createNotification(data: NotificationData): Promise<any> {
    // Validate user exists
    const user = await prisma.user.findUnique({
      where: { id: data.userId }
    });

    if (!user) {
      throw new NotFoundError(`User with ID ${data.userId} not found`);
    }

    // Create notification in database
    // Note: This assumes a Notification model exists in Prisma schema
    // In a real implementation, you would need to add this model
    return prisma.notification.create({
      data: {
        userId: data.userId,
        type: data.type,
        title: data.title,
        message: data.message,
        resourceId: data.resourceId,
        resourceType: data.resourceType,
        metadata: data.metadata ? JSON.stringify(data.metadata) : null,
        createdAt: new Date(),
        isRead: false
      }
    });
  }

  /**
   * Send policy created notification
   */
  async notifyPolicyCreated(policy: Policy, user: User): Promise<void> {
    await this.createNotification({
      userId: user.id,
      type: NotificationType.POLICY_CREATED,
      title: 'New Policy Created',
      message: `Your policy #${policy.id} has been created successfully.`,
      resourceId: policy.id,
      resourceType: 'policy',
      metadata: {
        coverageAmount: policy.coverageAmount.toString(),
        premiumAmount: policy.premiumAmount.toString(),
        coverageStart: policy.coverageStart,
        coverageEnd: policy.coverageEnd
      }
    });
  }

  /**
   * Send policy activated notification
   */
  async notifyPolicyActivated(policy: Policy, user: User): Promise<void> {
    await this.createNotification({
      userId: user.id,
      type: NotificationType.POLICY_ACTIVATED,
      title: 'Policy Activated',
      message: `Your policy #${policy.id} is now active. Coverage begins on ${policy.coverageStart.toLocaleDateString()}.`,
      resourceId: policy.id,
      resourceType: 'policy'
    });
  }

  /**
   * Send policy expired notification
   */
  async notifyPolicyExpired(policy: Policy, user: User): Promise<void> {
    await this.createNotification({
      userId: user.id,
      type: NotificationType.POLICY_EXPIRED,
      title: 'Policy Expired',
      message: `Your policy #${policy.id} has expired as of ${policy.coverageEnd.toLocaleDateString()}.`,
      resourceId: policy.id,
      resourceType: 'policy'
    });
  }

  /**
   * Send payment processed notification
   */
  async notifyPaymentProcessed(payment: any, policy: Policy, user: User): Promise<void> {
    await this.createNotification({
      userId: user.id,
      type: NotificationType.PAYMENT_PROCESSED,
      title: 'Payment Processed',
      message: `Your payment of ${payment.amount} for policy #${policy.id} has been processed successfully.`,
      resourceId: payment.id,
      resourceType: 'payment',
      metadata: {
        amount: payment.amount.toString(),
        policyId: policy.id,
        paymentDate: payment.paidAt
      }
    });
  }

  /**
   * Send payout notification
   */
  async notifyPolicyPayout(payout: any, policy: Policy, user: User): Promise<void> {
    await this.createNotification({
      userId: user.id,
      type: NotificationType.POLICY_PAYOUT,
      title: 'Policy Payout Processed',
      message: `A payout of ${payout.payoutAmount} has been processed for your policy #${policy.id}.`,
      resourceId: payout.id,
      resourceType: 'payout',
      metadata: {
        amount: payout.payoutAmount.toString(),
        policyId: policy.id,
        payoutDate: payout.paidAt
      }
    });
  }

  /**
   * Send trigger detected notification
   */
  async notifyTriggerDetected(policy: Policy, triggerData: any, user: User): Promise<void> {
    await this.createNotification({
      userId: user.id,
      type: NotificationType.TRIGGER_DETECTED,
      title: 'Policy Trigger Detected',
      message: `A trigger condition has been detected for your policy #${policy.id}. A payout will be processed soon.`,
      resourceId: policy.id,
      resourceType: 'policy',
      metadata: {
        triggerType: triggerData.type,
        triggerValue: triggerData.value,
        triggerDate: triggerData.date
      }
    });
  }

  /**
   * Send a system notification to all users
   */
  async sendSystemNotificationToAll(title: string, message: string): Promise<void> {
    // Get all active users
    const users = await prisma.user.findMany();
    
    // Send notification to each user
    for (const user of users) {
      await this.createNotification({
        userId: user.id,
        type: NotificationType.SYSTEM_NOTIFICATION,
        title,
        message
      });
    }
  }

  /**
   * Get all notifications for a user
   */
  async getUserNotifications(userId: number): Promise<any[]> {
    return prisma.notification.findMany({
      where: {
        userId
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  /**
   * Mark a notification as read
   */
  async markNotificationAsRead(notificationId: number, userId: number): Promise<any> {
    const notification = await prisma.notification.findFirst({
      where: {
        id: notificationId,
        userId
      }
    });

    if (!notification) {
      throw new NotFoundError('Notification not found');
    }

    return prisma.notification.update({
      where: { id: notificationId },
      data: {
        isRead: true,
        readAt: new Date()
      }
    });
  }

  /**
   * Mark all notifications as read for a user
   */
  async markAllNotificationsAsRead(userId: number): Promise<void> {
    await prisma.notification.updateMany({
      where: {
        userId,
        isRead: false
      },
      data: {
        isRead: true,
        readAt: new Date()
      }
    });
  }

  /**
   * Notify user about a processed payout
   */
  async notifyPayoutProcessed(payout: any, policy: any, user: any): Promise<void> {
    try {
      // Create notification in Appwrite
      await this.createNotification({
        userId: user.$id || user.id,
        type: 'PAYOUT',
        title: 'Payout Processed',
        message: `Your claim has been processed with a payout of ${payout.payoutAmount}`,
        metadata: {
          payoutId: payout.$id || payout.id,
          policyId: policy.$id || policy.id,
          amount: payout.payoutAmount
        },
        read: false
      });
      
      // Send email notification if user has email
      if (user.email) {
        await this.sendEmail({
          to: user.email,
          subject: 'Your Insurance Payout Has Been Processed',
          text: `Dear ${user.fullName || 'Valued Customer'},\n\nYour claim has been processed and a payout of ${payout.payoutAmount} has been issued.\n\nPolicy ID: ${policy.$id || policy.id}\nPayout ID: ${payout.$id || payout.id}\n\nThank you for choosing Farm Protection.\n\nRegards,\nThe Farm Protection Team`,
          html: `<p>Dear ${user.fullName || 'Valued Customer'},</p><p>Your claim has been processed and a payout of ${payout.payoutAmount} has been issued.</p><p><strong>Policy ID:</strong> ${policy.$id || policy.id}<br><strong>Payout ID:</strong> ${payout.$id || payout.id}</p><p>Thank you for choosing Farm Protection.</p><p>Regards,<br>The Farm Protection Team</p>`
        });
      }
    } catch (error) {
      console.error('Error sending payout notification:', error);
      // Don't throw - notifications shouldn't block the main process
    }
  }
} 