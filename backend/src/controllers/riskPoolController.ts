import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../middleware/authMiddleware';

const prisma = new PrismaClient();

/**
 * Get all risk pools
 * @param req - Express request object
 * @param res - Express response object
 * @returns List of risk pools
 */
export const getRiskPools = async (req: Request, res: Response) => {
  try {
    // Query parameters for filtering
    const { communityId, eventTypeId } = req.query;
    
    // Build where clause based on filters
    const whereClause: any = {};
    if (communityId) {
      whereClause.communityId = Number(communityId);
    }
    if (eventTypeId) {
      whereClause.eventTypeId = Number(eventTypeId);
    }
    
    // Get all risk pools with optional filters
    const riskPools = await prisma.riskPool.findMany({
      where: whereClause,
      include: {
        community: true,
        eventType: true,
      },
    });
    
    return res.status(200).json({
      success: true,
      data: riskPools,
    });
  } catch (error) {
    console.error('Error fetching risk pools:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch risk pools',
      error: (error as Error).message,
    });
  }
};

/**
 * Get risk pool by ID
 * @param req - Express request object with risk pool ID parameter
 * @param res - Express response object
 * @returns Risk pool data or error
 */
export const getRiskPoolById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    // Find risk pool by ID with all related data
    const riskPool = await prisma.riskPool.findUnique({
      where: { id: Number(id) },
      include: {
        community: true,
        eventType: true,
        capitalProviders: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
                fullName: true,
                walletAddress: true,
              },
            },
          },
        },
        policies: true,
      },
    });
    
    // Return 404 if risk pool not found
    if (!riskPool) {
      return res.status(404).json({
        success: false,
        message: 'Risk pool not found',
      });
    }
    
    return res.status(200).json({
      success: true,
      data: riskPool,
    });
  } catch (error) {
    console.error('Error fetching risk pool:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch risk pool',
      error: (error as Error).message,
    });
  }
};

/**
 * Create a new risk pool
 * @param req - Express request object with risk pool data
 * @param res - Express response object
 * @returns Newly created risk pool or error
 */
export const createRiskPool = async (req: Request, res: Response) => {
  try {
    const { communityId, eventTypeId, totalCapital = 0 } = req.body;
    
    // Verify that community exists
    const community = await prisma.community.findUnique({
      where: { id: Number(communityId) },
    });
    
    if (!community) {
      return res.status(400).json({
        success: false,
        message: 'Community not found',
      });
    }
    
    // Verify that event type exists
    const eventType = await prisma.eventType.findUnique({
      where: { id: Number(eventTypeId) },
    });
    
    if (!eventType) {
      return res.status(400).json({
        success: false,
        message: 'Event type not found',
      });
    }
    
    // Check if risk pool for this community and event type already exists
    const existingRiskPool = await prisma.riskPool.findFirst({
      where: {
        communityId: Number(communityId),
        eventTypeId: Number(eventTypeId),
      },
    });
    
    if (existingRiskPool) {
      return res.status(400).json({
        success: false,
        message: 'Risk pool for this community and event type already exists',
      });
    }
    
    // Create new risk pool
    const newRiskPool = await prisma.riskPool.create({
      data: {
        communityId: Number(communityId),
        eventTypeId: Number(eventTypeId),
        totalCapital: totalCapital.toString(),
      },
      include: {
        community: true,
        eventType: true,
      },
    });
    
    return res.status(201).json({
      success: true,
      data: newRiskPool,
      message: 'Risk pool created successfully',
    });
  } catch (error) {
    console.error('Error creating risk pool:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create risk pool',
      error: (error as Error).message,
    });
  }
};

/**
 * Update an existing risk pool
 * @param req - Express request object with risk pool ID and updated data
 * @param res - Express response object
 * @returns Updated risk pool data or error
 */
export const updateRiskPool = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { totalCapital } = req.body;
    
    // Check if risk pool exists
    const existingRiskPool = await prisma.riskPool.findUnique({
      where: { id: Number(id) },
    });
    
    if (!existingRiskPool) {
      return res.status(404).json({
        success: false,
        message: 'Risk pool not found',
      });
    }
    
    // Update risk pool
    const updatedRiskPool = await prisma.riskPool.update({
      where: { id: Number(id) },
      data: {
        totalCapital: totalCapital !== undefined ? totalCapital.toString() : undefined,
      },
      include: {
        community: true,
        eventType: true,
      },
    });
    
    return res.status(200).json({
      success: true,
      data: updatedRiskPool,
      message: 'Risk pool updated successfully',
    });
  } catch (error) {
    console.error('Error updating risk pool:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update risk pool',
      error: (error as Error).message,
    });
  }
};

/**
 * Delete a risk pool
 * @param req - Express request object with risk pool ID
 * @param res - Express response object
 * @returns Success message or error
 */
export const deleteRiskPool = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    // Check if risk pool exists and if it has associated policies or capital providers
    const existingRiskPool = await prisma.riskPool.findUnique({
      where: { id: Number(id) },
      include: {
        policies: true,
        capitalProviders: true,
      },
    });
    
    if (!existingRiskPool) {
      return res.status(404).json({
        success: false,
        message: 'Risk pool not found',
      });
    }
    
    // Prevent deletion if risk pool has associated policies
    if (existingRiskPool.policies.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Cannot delete risk pool with active policies',
      });
    }
    
    // Prevent deletion if risk pool has capital providers
    if (existingRiskPool.capitalProviders.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Cannot delete risk pool with active capital providers',
      });
    }
    
    // Delete risk pool
    await prisma.riskPool.delete({
      where: { id: Number(id) },
    });
    
    return res.status(200).json({
      success: true,
      message: 'Risk pool deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting risk pool:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete risk pool',
      error: (error as Error).message,
    });
  }
};

/**
 * Add capital provider to risk pool
 * @param req - Authenticated request with user info and capital data
 * @param res - Express response object
 * @returns Updated capital provider data or error
 */
export const addCapitalProvider = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params; // Risk pool ID
    const { stakeAmount } = req.body;
    
    // Ensure user is authenticated
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required',
      });
    }
    
    const userId = req.user.id;
    
    // Check if risk pool exists
    const riskPool = await prisma.riskPool.findUnique({
      where: { id: Number(id) },
    });
    
    if (!riskPool) {
      return res.status(404).json({
        success: false,
        message: 'Risk pool not found',
      });
    }
    
    // Check if user has already provided capital to this risk pool
    const existingProvider = await prisma.capitalProvider.findFirst({
      where: {
        userId: userId,
        riskPoolId: Number(id),
      },
    });
    
    let capitalProvider;
    
    if (existingProvider) {
      // Update existing capital provider's stake
      const newStakeAmount = parseFloat(existingProvider.stakeAmount.toString()) + parseFloat(stakeAmount);
      
      capitalProvider = await prisma.capitalProvider.update({
        where: { id: existingProvider.id },
        data: {
          stakeAmount: newStakeAmount.toString(),
          stakeDate: new Date(),
        },
      });
      
      // Update risk pool total capital
      await prisma.riskPool.update({
        where: { id: Number(id) },
        data: {
          totalCapital: (parseFloat(riskPool.totalCapital.toString()) + parseFloat(stakeAmount)).toString(),
        },
      });
    } else {
      // Create new capital provider
      capitalProvider = await prisma.capitalProvider.create({
        data: {
          userId: userId,
          riskPoolId: Number(id),
          stakeAmount: stakeAmount.toString(),
        },
      });
      
      // Update risk pool total capital
      await prisma.riskPool.update({
        where: { id: Number(id) },
        data: {
          totalCapital: (parseFloat(riskPool.totalCapital.toString()) + parseFloat(stakeAmount)).toString(),
        },
      });
    }
    
    return res.status(200).json({
      success: true,
      data: capitalProvider,
      message: 'Capital added to risk pool successfully',
    });
  } catch (error) {
    console.error('Error adding capital provider:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to add capital provider',
      error: (error as Error).message,
    });
  }
};

/**
 * Remove capital provider from risk pool
 * @param req - Authenticated request with user info and capital provider ID
 * @param res - Express response object
 * @returns Success message or error
 */
export const removeCapitalProvider = async (req: AuthRequest, res: Response) => {
  try {
    const { id, providerId } = req.params;
    
    // Ensure user is authenticated
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required',
      });
    }
    
    // Retrieve capital provider and check ownership
    const capitalProvider = await prisma.capitalProvider.findUnique({
      where: { id: Number(providerId) },
      include: {
        riskPool: true,
      },
    });
    
    if (!capitalProvider) {
      return res.status(404).json({
        success: false,
        message: 'Capital provider not found',
      });
    }
    
    // Ensure user owns the capital provision or is an admin
    if (capitalProvider.userId !== req.user.id && req.user.role !== 'ADMIN') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to remove this capital provider',
      });
    }
    
    // Ensure risk pool IDs match
    if (capitalProvider.riskPoolId !== Number(id)) {
      return res.status(400).json({
        success: false,
        message: 'Capital provider does not belong to the specified risk pool',
      });
    }
    
    // Update risk pool total capital
    await prisma.riskPool.update({
      where: { id: Number(id) },
      data: {
        totalCapital: (
          parseFloat(capitalProvider.riskPool.totalCapital.toString()) - 
          parseFloat(capitalProvider.stakeAmount.toString())
        ).toString(),
      },
    });
    
    // Delete capital provider
    await prisma.capitalProvider.delete({
      where: { id: Number(providerId) },
    });
    
    return res.status(200).json({
      success: true,
      message: 'Capital provider removed successfully',
    });
  } catch (error) {
    console.error('Error removing capital provider:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to remove capital provider',
      error: (error as Error).message,
    });
  }
}; 