import BaseRepository from './BaseRepository';
import { config } from '../config/appwrite';
import { Query } from 'node-appwrite';

/**
 * Payment document structure for Appwrite
 */
export interface PaymentDocument {
  $id?: string;
  policyId: string;
  amount: number;
  paymentTxHash?: string;
  paidAt: string;  // ISO date string
  createdAt: string;  // ISO date string
  paymentMethod?: string;
  status: string;
  userId: string;
}

/**
 * Repository for handling Payment operations with Appwrite
 */
export default class PaymentRepository extends BaseRepository<PaymentDocument> {
  constructor() {
    super(config.collections.payments);
  }

  /**
   * Get all payments for a specific user
   * @param userId - The ID of the user
   * @returns Array of payment documents
   */
  async getUserPayments(userId: string): Promise<PaymentDocument[]> {
    try {
      const result = await this.findWithQueries([
        Query.equal('userId', userId),
        Query.orderDesc('paidAt')
      ]);
      return result;
    } catch (error) {
      console.error('Error fetching user payments:', error);
      throw error;
    }
  }

  /**
   * Process a new payment
   * @param payment - Payment data to create
   * @returns Created payment document
   */
  async processPremiumPayment(payment: Omit<PaymentDocument, '$id'>): Promise<PaymentDocument> {
    try {
      return await this.create(payment);
    } catch (error) {
      console.error('Error processing premium payment:', error);
      throw error;
    }
  }

  /**
   * Verify payment status
   * @param paymentId - ID of the payment to verify
   * @param userId - ID of the user making the request
   * @returns Object with verification status and payment details
   */
  async verifyPayment(paymentId: string, userId: string): Promise<{ verified: boolean; payment: PaymentDocument | null }> {
    try {
      const payment = await this.findById(paymentId);
      
      if (!payment || payment.userId !== userId) {
        return { verified: false, payment: null };
      }
      
      return {
        verified: payment.status === 'completed',
        payment
      };
    } catch (error) {
      console.error('Error verifying payment:', error);
      throw error;
    }
  }
} 