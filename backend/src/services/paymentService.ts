import { BadRequestError, NotFoundError } from '../utils/errors';
import PaymentRepository, { PaymentDocument } from '../repositories/PaymentRepository';
import PayoutRepository, { PayoutDocument } from '../repositories/PayoutRepository';
import UserRepository from '../repositories/UserRepository';
import PolicyRepository from '../repositories/PolicyRepository';

type PaymentMethod = 'wallet' | 'card' | 'mobile_money';

interface PremiumPaymentParams {
  policyId: string;
  amount: number;
  paymentMethod: PaymentMethod;
  userId: string; // User ID from auth context
  paymentTxHash?: string; // Optional transaction hash for blockchain payments
}

interface PayoutParams {
  policyId: string;
  payoutAmount: number;
  payoutTxHash?: string;
  riskPoolId: string;
  userId: string;
}

/**
 * Service for handling payments and payouts using Appwrite
 */
export default class PaymentService {
  private paymentRepository: PaymentRepository;
  private payoutRepository: PayoutRepository;
  private userRepository: UserRepository;
  private policyRepository: PolicyRepository;

  constructor() {
    this.paymentRepository = new PaymentRepository();
    this.payoutRepository = new PayoutRepository();
    this.userRepository = new UserRepository();
    this.policyRepository = new PolicyRepository();
  }

  /**
   * Process a premium payment for a policy
   */
  async processPremiumPayment(params: PremiumPaymentParams): Promise<PaymentDocument> {
    const { policyId, amount, userId, paymentMethod, paymentTxHash } = params;

    // Validate policy exists and belongs to user
    const policy = await this.policyRepository.findById(policyId);

    if (!policy || policy.userId !== userId) {
      throw new NotFoundError('Policy not found or does not belong to you');
    }

    // Validate payment amount matches premium
    if (amount !== policy.premiumAmount) {
      throw new BadRequestError(`Payment amount ${amount} does not match required premium amount ${policy.premiumAmount}`);
    }

    // Create payment record
    const payment = await this.paymentRepository.processPremiumPayment({
      policyId,
      amount,
      paymentTxHash,
      paidAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      paymentMethod,
      status: 'completed',
      userId
    });

    // Update policy status to active if it's in pending state
    if (policy.status === 'PENDING_PAYMENT') {
      await this.policyRepository.update(policyId, { 
        status: 'ACTIVE' 
      });
    }

    return payment;
  }

  /**
   * Verify payment status
   */
  async verifyPayment(paymentId: string, userId: string): Promise<{ verified: boolean; payment: PaymentDocument | null }> {
    return this.paymentRepository.verifyPayment(paymentId, userId);
  }

  /**
   * Get all payments for a user
   */
  async getUserPayments(userId: string): Promise<PaymentDocument[]> {
    return this.paymentRepository.getUserPayments(userId);
  }

  /**
   * Get all payouts for a user
   */
  async getUserPayouts(userId: string): Promise<PayoutDocument[]> {
    return this.payoutRepository.getUserPayouts(userId);
  }

  /**
   * Get payout details by ID
   */
  async getPayoutById(payoutId: string, userId: string): Promise<PayoutDocument | null> {
    return this.payoutRepository.getPayoutById(payoutId, userId);
  }

  /**
   * Process a payout for a triggered policy
   */
  async processPayout(params: PayoutParams): Promise<PayoutDocument> {
    const { policyId, payoutAmount, payoutTxHash, riskPoolId, userId } = params;

    // Create payout record
    const payout = await this.payoutRepository.processPayout({
      policyId,
      riskPoolId,
      payoutAmount,
      payoutTxHash,
      paidAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      status: 'completed',
      userId
    });

    // Update policy status to PAID_OUT
    await this.policyRepository.update(policyId, { 
      status: 'PAID_OUT' 
    });

    return payout;
  }

  /**
   * Connect user wallet for blockchain payments
   */
  async connectWallet(userId: string, walletAddress: string): Promise<void> {
    // Validate wallet address format
    if (!this.isValidWalletAddress(walletAddress)) {
      throw new BadRequestError('Invalid wallet address format');
    }

    await this.userRepository.update(userId, { 
      walletAddress 
    });
  }

  /**
   * Check if wallet address format is valid (Solana address)
   */
  private isValidWalletAddress(address: string): boolean {
    // Basic validation: Solana addresses are 44 characters 
    // and typically begin with a specific pattern
    return /^[1-9A-HJ-NP-Za-km-z]{43,44}$/.test(address);
  }
} 