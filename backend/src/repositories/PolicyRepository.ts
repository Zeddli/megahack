import BaseRepository from './BaseRepository';
import { config } from '../config/appwrite';
import { Query } from 'node-appwrite';

/**
 * Policy document structure for Appwrite
 */
export interface PolicyDocument {
  $id?: string;
  userId: string;
  riskPoolId: string;
  coverageAmount: number;
  premiumAmount: number;
  coverageStart: string;  // ISO date string
  coverageEnd: string;    // ISO date string
  status: string;
  createdAt: string;      // ISO date string
  updatedAt: string;      // ISO date string
}

/**
 * Repository for handling Policy operations with Appwrite
 */
export default class PolicyRepository extends BaseRepository<PolicyDocument> {
  constructor() {
    super(config.collections.policies);
  }

  /**
   * Get all policies for a specific user
   * @param userId - The ID of the user
   * @returns Array of policy documents
   */
  async getUserPolicies(userId: string): Promise<PolicyDocument[]> {
    try {
      const result = await this.findWithQueries([
        Query.equal('userId', userId),
        Query.orderDesc('createdAt')
      ]);
      return result;
    } catch (error) {
      console.error('Error fetching user policies:', error);
      throw error;
    }
  }

  /**
   * Create a new policy
   * @param policy - Policy data to create
   * @returns Created policy document
   */
  async createPolicy(policy: Omit<PolicyDocument, '$id'>): Promise<PolicyDocument> {
    try {
      return await this.create(policy);
    } catch (error) {
      console.error('Error creating policy:', error);
      throw error;
    }
  }

  /**
   * Get policy by ID and validate ownership
   * @param policyId - ID of the policy to fetch
   * @param userId - ID of the user making the request
   * @returns Policy document if found and belongs to user
   */
  async getPolicyByIdAndUser(policyId: string, userId: string): Promise<PolicyDocument | null> {
    try {
      const policy = await this.findById(policyId);
      
      if (!policy || policy.userId !== userId) {
        return null;
      }
      
      return policy;
    } catch (error) {
      console.error('Error fetching policy by ID and user:', error);
      throw error;
    }
  }
} 