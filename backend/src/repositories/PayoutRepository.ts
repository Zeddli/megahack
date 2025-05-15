import BaseRepository from './BaseRepository';
import { config } from '../config/appwrite';
import { Query } from 'node-appwrite';

/**
 * Payout document structure for Appwrite
 */
export interface PayoutDocument {
  $id?: string;
  policyId: string;
  riskPoolId: string;
  payoutAmount: number;
  payoutTxHash?: string;
  paidAt?: string;  // ISO date string
  createdAt: string;  // ISO date string
  status: string;
  userId: string;
}

/**
 * Repository for handling Payout operations with Appwrite
 */
export default class PayoutRepository extends BaseRepository<PayoutDocument> {
  constructor() {
    super(config.collections.payouts);
  }

  /**
   * Get all payouts for a specific user
   * @param userId - The ID of the user
   * @returns Array of payout documents
   */
  async getUserPayouts(userId: string): Promise<PayoutDocument[]> {
    try {
      const result = await this.findWithQueries([
        Query.equal('userId', userId),
        Query.orderDesc('createdAt')
      ]);
      return result;
    } catch (error) {
      console.error('Error fetching user payouts:', error);
      throw error;
    }
  }

  /**
   * Get payout details by ID
   * @param payoutId - ID of the payout
   * @param userId - ID of the user making the request
   * @returns Payout document if found and belongs to user
   */
  async getPayoutById(payoutId: string, userId: string): Promise<PayoutDocument | null> {
    try {
      const payout = await this.findById(payoutId);
      
      if (!payout || payout.userId !== userId) {
        return null;
      }
      
      return payout;
    } catch (error) {
      console.error('Error fetching payout by ID:', error);
      throw error;
    }
  }

  /**
   * Process a new payout
   * @param payout - Payout data to create
   * @returns Created payout document
   */
  async processPayout(payout: Omit<PayoutDocument, '$id'>): Promise<PayoutDocument> {
    try {
      return await this.create(payout);
    } catch (error) {
      console.error('Error processing payout:', error);
      throw error;
    }
  }
} 