import { Request, Response, NextFunction } from 'express';
import PaymentService from '../services/paymentService';
import NotificationService from '../services/notificationService';
import AuditLogService, { AuditAction } from '../services/auditLogService';
import { BadRequestError } from '../utils/errors';
import UserRepository from '../repositories/UserRepository';
import PolicyRepository from '../repositories/PolicyRepository';

const paymentService = new PaymentService();
const notificationService = new NotificationService();
const auditLogService = new AuditLogService();
const userRepository = new UserRepository();
const policyRepository = new PolicyRepository();

/**
 * Process premium payment for a policy
 */
export const processPremiumPayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { policyId, amount, paymentMethod, paymentTxHash } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      throw new BadRequestError('User ID is required');
    }

    if (!policyId || !amount || !paymentMethod) {
      throw new BadRequestError('Missing required payment information');
    }

    const payment = await paymentService.processPremiumPayment({
      policyId,
      amount,
      paymentMethod,
      userId,
      paymentTxHash
    });

    // Get policy and user details for notification
    const policy = await policyRepository.findById(policyId);
    const user = await userRepository.findById(userId);

    if (policy && user) {
      // Send payment notification
      await notificationService.notifyPaymentProcessed(payment, policy, user);
      
      // If policy was activated by this payment, send activation notification
      if (policy.status === 'ACTIVE') {
        await notificationService.notifyPolicyActivated(policy, user);
      }
    }

    // Log the payment action
    await auditLogService.logPaymentAction(
      AuditAction.PAYMENT_PROCESS,
      payment.$id || '',
      userId,
      policyId,
      amount,
      {
        ipAddress: req.ip,
        userAgent: req.headers['user-agent']
      }
    );

    return res.status(200).json({
      success: true,
      data: payment,
      message: 'Payment processed successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Verify payment status
 */
export const verifyPayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const paymentId = req.params.paymentId;
    const userId = req.user?.id;

    if (!userId) {
      throw new BadRequestError('User ID is required');
    }

    if (!paymentId) {
      throw new BadRequestError('Invalid payment ID');
    }

    const result = await paymentService.verifyPayment(paymentId, userId);

    // Log the verification action
    await auditLogService.logPaymentAction(
      AuditAction.PAYMENT_VERIFY,
      paymentId,
      userId,
      result.payment?.$id || '',
      result.payment?.amount || 0,
      {
        ipAddress: req.ip,
        userAgent: req.headers['user-agent']
      }
    );

    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all payments for current user
 */
export const getUserPayments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    
    if (!userId) {
      throw new BadRequestError('User ID is required');
    }
    
    const payments = await paymentService.getUserPayments(userId);

    return res.status(200).json({
      success: true,
      data: payments
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all payouts for current user
 */
export const getUserPayouts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    
    if (!userId) {
      throw new BadRequestError('User ID is required');
    }
    
    const payouts = await paymentService.getUserPayouts(userId);

    return res.status(200).json({
      success: true,
      data: payouts
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get payout details by ID
 */
export const getPayoutById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payoutId = req.params.id;
    const userId = req.user?.id;

    if (!userId) {
      throw new BadRequestError('User ID is required');
    }

    if (!payoutId) {
      throw new BadRequestError('Invalid payout ID');
    }

    const payout = await paymentService.getPayoutById(payoutId, userId);

    if (!payout) {
      throw new BadRequestError('Payout not found or does not belong to you');
    }

    return res.status(200).json({
      success: true,
      data: payout
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Connect wallet for blockchain payments
 */
export const connectWallet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { walletAddress } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      throw new BadRequestError('User ID is required');
    }

    if (!walletAddress) {
      throw new BadRequestError('Wallet address is required');
    }

    await paymentService.connectWallet(userId, walletAddress);

    // Log the wallet connection
    await auditLogService.logUserAction(
      AuditAction.USER_UPDATE,
      userId,
      userId,
      { walletAddress: null },
      { walletAddress },
      {
        ipAddress: req.ip,
        userAgent: req.headers['user-agent']
      }
    );

    return res.status(200).json({
      success: true,
      message: 'Wallet connected successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Process payout for a triggered policy (admin only)
 */
export const processPayout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { policyId, payoutAmount, payoutTxHash, riskPoolId } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      throw new BadRequestError('User ID is required');
    }

    if (!policyId || !payoutAmount || !riskPoolId) {
      throw new BadRequestError('Missing required payout information');
    }

    const payout = await paymentService.processPayout({
      policyId,
      payoutAmount,
      payoutTxHash,
      riskPoolId,
      userId
    });

    // Get policy and user details for notification
    const policy = await policyRepository.findById(policyId);
    
    if (policy) {
      const user = await userRepository.findById(policy.userId);
      
      if (user) {
        // Send payout notification
        await notificationService.notifyPayoutProcessed(payout, policy, user);
      }
    }

    // Log the payout action
    await auditLogService.logPayoutAction(
      AuditAction.PAYOUT_PROCESS,
      payout.$id || '',
      userId,
      policyId,
      payoutAmount,
      {
        ipAddress: req.ip,
        userAgent: req.headers['user-agent']
      }
    );

    return res.status(200).json({
      success: true,
      data: payout,
      message: 'Payout processed successfully'
    });
  } catch (error) {
    next(error);
  }
}; 