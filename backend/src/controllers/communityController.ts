import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Get all communities
 * @param req - Express request object
 * @param res - Express response object
 * @returns List of communities
 */
export const getCommunities = async (req: Request, res: Response) => {
  try {
    const communities = await prisma.community.findMany();
    return res.status(200).json({
      success: true,
      data: communities,
    });
  } catch (error) {
    console.error('Error fetching communities:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch communities',
      error: (error as Error).message,
    });
  }
};

/**
 * Get community by ID
 * @param req - Express request object with community ID parameter
 * @param res - Express response object
 * @returns Community data or error
 */
export const getCommunityById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const community = await prisma.community.findUnique({
      where: { id: Number(id) },
      include: {
        riskPools: true,
      },
    });
    
    if (!community) {
      return res.status(404).json({
        success: false,
        message: 'Community not found',
      });
    }
    
    return res.status(200).json({
      success: true,
      data: community,
    });
  } catch (error) {
    console.error('Error fetching community:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch community',
      error: (error as Error).message,
    });
  }
};

/**
 * Create a new community
 * @param req - Express request object with community data
 * @param res - Express response object
 * @returns Newly created community or error
 */
export const createCommunity = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    
    // Check if community already exists
    const existingCommunity = await prisma.community.findUnique({
      where: { name },
    });
    
    if (existingCommunity) {
      return res.status(400).json({
        success: false,
        message: 'Community with this name already exists',
      });
    }
    
    const newCommunity = await prisma.community.create({
      data: {
        name,
        description,
      },
    });
    
    return res.status(201).json({
      success: true,
      data: newCommunity,
      message: 'Community created successfully',
    });
  } catch (error) {
    console.error('Error creating community:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create community',
      error: (error as Error).message,
    });
  }
};

/**
 * Update an existing community
 * @param req - Express request object with community ID and updated data
 * @param res - Express response object
 * @returns Updated community data or error
 */
export const updateCommunity = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    
    // Check if community exists
    const existingCommunity = await prisma.community.findUnique({
      where: { id: Number(id) },
    });
    
    if (!existingCommunity) {
      return res.status(404).json({
        success: false,
        message: 'Community not found',
      });
    }
    
    // If name is being updated, check if it conflicts with another community
    if (name && name !== existingCommunity.name) {
      const nameConflict = await prisma.community.findUnique({
        where: { name },
      });
      
      if (nameConflict) {
        return res.status(400).json({
          success: false,
          message: 'Community with this name already exists',
        });
      }
    }
    
    const updatedCommunity = await prisma.community.update({
      where: { id: Number(id) },
      data: {
        name: name || existingCommunity.name,
        description: description !== undefined ? description : existingCommunity.description,
      },
    });
    
    return res.status(200).json({
      success: true,
      data: updatedCommunity,
      message: 'Community updated successfully',
    });
  } catch (error) {
    console.error('Error updating community:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update community',
      error: (error as Error).message,
    });
  }
};

/**
 * Delete a community
 * @param req - Express request object with community ID
 * @param res - Express response object
 * @returns Success message or error
 */
export const deleteCommunity = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    // Check if community exists
    const existingCommunity = await prisma.community.findUnique({
      where: { id: Number(id) },
      include: {
        riskPools: true,
      },
    });
    
    if (!existingCommunity) {
      return res.status(404).json({
        success: false,
        message: 'Community not found',
      });
    }
    
    // Check if community has associated risk pools
    if (existingCommunity.riskPools.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Cannot delete community with associated risk pools',
      });
    }
    
    await prisma.community.delete({
      where: { id: Number(id) },
    });
    
    return res.status(200).json({
      success: true,
      message: 'Community deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting community:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete community',
      error: (error as Error).message,
    });
  }
}; 