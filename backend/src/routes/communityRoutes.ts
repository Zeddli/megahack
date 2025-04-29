import express from 'express';
import { getCommunities, getCommunityById, createCommunity, updateCommunity, deleteCommunity } from '../controllers/communityController';
import { validateCreateCommunity, validateUpdateCommunity } from '../middleware/validationMiddleware';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @route GET /api/communities
 * @desc Get all communities
 * @access Public
 */
router.get('/', getCommunities);

/**
 * @route GET /api/communities/:id
 * @desc Get community by ID
 * @access Public
 */
router.get('/:id', getCommunityById);

/**
 * @route POST /api/communities
 * @desc Create a new community
 * @access Private (Admin)
 */
router.post('/', authenticate, validateCreateCommunity, createCommunity);

/**
 * @route PUT /api/communities/:id
 * @desc Update a community
 * @access Private (Admin)
 */
router.put('/:id', authenticate, validateUpdateCommunity, updateCommunity);

/**
 * @route DELETE /api/communities/:id
 * @desc Delete a community
 * @access Private (Admin)
 */
router.delete('/:id', authenticate, deleteCommunity);

export default router;