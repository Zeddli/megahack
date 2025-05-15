import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../middleware/authMiddleware';
import { calculatePremium } from '../services/premiumService';

const prisma = new PrismaClient();

/**
 * Create a new policy for the authenticated user
 * @route POST /policies
 */
export const createPolicy = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    const { riskPoolId, coverageAmount, coverageDuration } = req.body;

    if (!userId) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }
    if (!riskPoolId || !coverageAmount) {
      return res.status(400).json({ success: false, message: 'riskPoolId and coverageAmount are required' });
    }

    // Calculate premium (placeholder, to be replaced with real logic)
    const premiumAmount = Number(coverageAmount) * 0.05; // 5% premium for now
    const duration = coverageDuration || 180; // Default 180 days
    const now = new Date();
    const coverageStart = now;
    const coverageEnd = new Date(now.getTime() + duration * 24 * 60 * 60 * 1000);

    // Create policy
    const policy = await prisma.policy.create({
      data: {
        userId,
        riskPoolId,
        coverageAmount,
        premiumAmount,
        coverageStart,
        coverageEnd,
        status: 'active',
      },
    });

    return res.status(201).json({
      success: true,
      data: policy,
      message: 'Policy created successfully',
    });
  } catch (error) {
    console.error('Error creating policy:', error);
    return res.status(500).json({ success: false, message: 'Failed to create policy', error: (error as Error).message });
  }
};

/**
 * Get all policies (admin: all, user: own) with advanced filtering
 * Supports filters: status, riskPoolId, coverageStartFrom, coverageStartTo, coverageEndFrom, coverageEndTo, userId (admin only)
 * @route GET /policies
 */
export const getPolicies = async (req: AuthRequest, res: Response) => {
  try {
    const { status, riskPoolId, coverageStartFrom, coverageStartTo, coverageEndFrom, coverageEndTo, userId } = req.query;
    const user = req.user;

    if (!user || !user.id) {
      return res.status(401).json({ 
        success: false, 
        message: 'Authentication required' 
      });
    }

    // Create a query filter
    let where: any = {};
    
    // Add filters based on query parameters
    try {
      // Always filter by user ID for regular users
      // Admin users can see all policies or filter by specific user
      if (user.role === 'ADMIN' && userId) {
        where.userId = parseInt(userId as string, 10);
      } else {
        where.userId = parseInt(user.id, 10);
      }
      
      // Add other filters
      if (status) where.status = status as string;
      if (riskPoolId) where.riskPoolId = parseInt(riskPoolId as string, 10);
      
      // Handle date filters
      if (coverageStartFrom || coverageStartTo) {
        where.coverageStart = {};
        if (coverageStartFrom) where.coverageStart.gte = new Date(coverageStartFrom as string);
        if (coverageStartTo) where.coverageStart.lte = new Date(coverageStartTo as string);
      }
      
      if (coverageEndFrom || coverageEndTo) {
        where.coverageEnd = {};
        if (coverageEndFrom) where.coverageEnd.gte = new Date(coverageEndFrom as string);
        if (coverageEndTo) where.coverageEnd.lte = new Date(coverageEndTo as string);
      }
    } catch (filterError) {
      console.error('Error setting up query filters:', filterError);
      return res.status(400).json({
        success: false,
        message: 'Invalid query parameters',
        error: (filterError as Error).message
      });
    }
    
    // Query the database
    try {
      const policies = await prisma.policy.findMany({
        where,
        include: {
          riskPool: {
            include: {
              community: true,
              eventType: true
            }
          },
          policyTriggers: {
            include: {
              oracleData: true
            }
          },
          payouts: true
        }
      });
      
      // Transform policies to a more frontend-friendly format
      const formattedPolicies = policies.map(policy => {
        return {
          id: policy.id,
          policyNumber: `POL-${policy.id.toString().padStart(6, '0')}`,
          coverageType: policy.riskPool?.eventType?.name || 'Unknown',
          coverageAmount: Number(policy.coverageAmount),
          premiumAmount: Number(policy.premiumAmount),
          coverageStart: policy.coverageStart.toISOString(),
          coverageEnd: policy.coverageEnd.toISOString(),
          status: policy.status,
          riskPool: {
            id: policy.riskPool?.id || 0,
            name: `${policy.riskPool?.community?.name || 'Unknown'} - ${policy.riskPool?.eventType?.name || 'Unknown'}`,
            community: policy.riskPool?.community?.name || 'Unknown',
            eventType: policy.riskPool?.eventType?.name || 'Unknown',
          },
          claims: policy.payouts.map(payout => ({
            id: payout.id,
            timestamp: payout.createdAt.toISOString(),
            amount: Number(payout.payoutAmount),
            status: payout.paidAt ? 'Paid' : 'Pending',
            txHash: payout.payoutTxHash || undefined
          }))
        };
      });
      
      return res.status(200).json({
        success: true,
        data: formattedPolicies
      });
    } catch (dbError) {
      console.error('Database error when fetching policies:', dbError);
      return res.status(500).json({
        success: false,
        message: 'Error fetching policies from database',
        error: (dbError as Error).message
      });
    }
  } catch (error) {
    console.error('Unhandled error in getPolicies:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error when fetching policies',
      error: (error as Error).message
    });
  }
};

/**
 * Get a policy by ID (admin: any, user: own)
 * @route GET /policies/:id
 */
export const getPolicyById = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const user = req.user;
    const policy = await prisma.policy.findUnique({ where: { id: Number(id) } });
    if (!policy) {
      return res.status(404).json({ success: false, message: 'Policy not found' });
    }
    if (user?.role !== 'ADMIN' && policy.userId !== user?.id) {
      return res.status(403).json({ success: false, message: 'Not authorized to view this policy' });
    }
    return res.status(200).json({ success: true, data: policy });
  } catch (error) {
    console.error('Error fetching policy:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch policy', error: (error as Error).message });
  }
};

/**
 * Cancel a policy (set status to 'inactive')
 * @route PUT /policies/:id/cancel
 */
export const cancelPolicy = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const user = req.user;
    const policy = await prisma.policy.findUnique({ where: { id: Number(id) } });
    if (!policy) {
      return res.status(404).json({ success: false, message: 'Policy not found' });
    }
    if (user?.role !== 'ADMIN' && policy.userId !== user?.id) {
      return res.status(403).json({ success: false, message: 'Not authorized to cancel this policy' });
    }
    if (policy.status !== 'active') {
      return res.status(400).json({ success: false, message: 'Only active policies can be canceled' });
    }
    const updated = await prisma.policy.update({ where: { id: Number(id) }, data: { status: 'inactive' } });
    return res.status(200).json({ success: true, data: updated, message: 'Policy canceled successfully' });
  } catch (error) {
    console.error('Error canceling policy:', error);
    return res.status(500).json({ success: false, message: 'Failed to cancel policy', error: (error as Error).message });
  }
};

/**
 * Calculate premium for a potential policy
 * @route POST /policies/premium-calculator
 */
export const calculatePremiumController = async (req: AuthRequest, res: Response) => {
  try {
    const { riskPoolId, coverageAmount, coverageDuration } = req.body;
    if (!riskPoolId || !coverageAmount) {
      return res.status(400).json({ success: false, message: 'riskPoolId and coverageAmount are required' });
    }
    // Call the premium calculation service
    const result = calculatePremium({ riskPoolId, coverageAmount, coverageDuration });
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error('Error calculating premium:', error);
    return res.status(500).json({ success: false, message: 'Failed to calculate premium', error: (error as Error).message });
  }
}; 