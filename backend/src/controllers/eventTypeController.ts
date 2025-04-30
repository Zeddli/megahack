import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Get all event types
 * @param req - Express request object
 * @param res - Express response object
 * @returns List of event types (rainfall shortage, power outage, flooding)
 */
export const getEventTypes = async (req: Request, res: Response) => {
  try {
    // Retrieve all event types from the database
    const eventTypes = await prisma.eventType.findMany();
    
    return res.status(200).json({
      success: true,
      data: eventTypes,
    });
  } catch (error) {
    console.error('Error fetching event types:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch event types',
      error: (error as Error).message,
    });
  }
};

/**
 * Get event type by ID
 * @param req - Express request object with event type ID parameter
 * @param res - Express response object
 * @returns Event type data or error
 */
export const getEventTypeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    // Find event type by ID, including related risk pools
    const eventType = await prisma.eventType.findUnique({
      where: { id: Number(id) },
      include: {
        riskPools: true,
      },
    });
    
    // Return 404 if event type not found
    if (!eventType) {
      return res.status(404).json({
        success: false,
        message: 'Event type not found',
      });
    }
    
    return res.status(200).json({
      success: true,
      data: eventType,
    });
  } catch (error) {
    console.error('Error fetching event type:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch event type',
      error: (error as Error).message,
    });
  }
};

/**
 * Create a new event type
 * @param req - Express request object with event type data
 * @param res - Express response object
 * @returns Newly created event type or error
 */
export const createEventType = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    
    // Check if event type with the same name already exists
    const existingEventType = await prisma.eventType.findUnique({
      where: { name },
    });
    
    if (existingEventType) {
      return res.status(400).json({
        success: false,
        message: 'Event type with this name already exists',
      });
    }
    
    // Create new event type
    const newEventType = await prisma.eventType.create({
      data: {
        name,
        description,
      },
    });
    
    return res.status(201).json({
      success: true,
      data: newEventType,
      message: 'Event type created successfully',
    });
  } catch (error) {
    console.error('Error creating event type:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create event type',
      error: (error as Error).message,
    });
  }
};

/**
 * Update an existing event type
 * @param req - Express request object with event type ID and updated data
 * @param res - Express response object
 * @returns Updated event type data or error
 */
export const updateEventType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    
    // Check if event type exists
    const existingEventType = await prisma.eventType.findUnique({
      where: { id: Number(id) },
    });
    
    if (!existingEventType) {
      return res.status(404).json({
        success: false,
        message: 'Event type not found',
      });
    }
    
    // If name is being updated, check if it conflicts with another event type
    if (name && name !== existingEventType.name) {
      const nameConflict = await prisma.eventType.findUnique({
        where: { name },
      });
      
      if (nameConflict) {
        return res.status(400).json({
          success: false,
          message: 'Event type with this name already exists',
        });
      }
    }
    
    // Update event type
    const updatedEventType = await prisma.eventType.update({
      where: { id: Number(id) },
      data: {
        name: name || existingEventType.name,
        description: description !== undefined ? description : existingEventType.description,
      },
    });
    
    return res.status(200).json({
      success: true,
      data: updatedEventType,
      message: 'Event type updated successfully',
    });
  } catch (error) {
    console.error('Error updating event type:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update event type',
      error: (error as Error).message,
    });
  }
};

/**
 * Delete an event type
 * @param req - Express request object with event type ID
 * @param res - Express response object
 * @returns Success message or error
 */
export const deleteEventType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    // Check if event type exists and get associated risk pools
    const existingEventType = await prisma.eventType.findUnique({
      where: { id: Number(id) },
      include: {
        riskPools: true,
      },
    });
    
    if (!existingEventType) {
      return res.status(404).json({
        success: false,
        message: 'Event type not found',
      });
    }
    
    // Prevent deletion if event type has associated risk pools
    if (existingEventType.riskPools.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Cannot delete event type with associated risk pools',
      });
    }
    
    // Delete event type
    await prisma.eventType.delete({
      where: { id: Number(id) },
    });
    
    return res.status(200).json({
      success: true,
      message: 'Event type deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting event type:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete event type',
      error: (error as Error).message,
    });
  }
}; 