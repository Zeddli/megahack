import express from 'express';
import { 
  getRiskPools, 
  getRiskPoolById, 
  createRiskPool, 
  updateRiskPool, 
  deleteRiskPool,
  addCapitalProvider,
  removeCapitalProvider
} from '../controllers/riskPoolController';
import { validateCreateRiskPool, validateUpdateRiskPool } from '../middleware/validationMiddleware';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @route GET /api/risk-pools
 * @desc Get all risk pools
 * @access Public
 */
router.get('/', getRiskPools);

/**
 * @route GET /api/risk-pools/:id
 * @desc Get risk pool by ID
 * @access Public
 */
router.get('/:id', getRiskPoolById);

/**
 * @route POST /api/risk-pools
 * @desc Create a new risk pool
 * @access Private (Admin)
 */
router.post('/', authenticate, validateCreateRiskPool, createRiskPool);

/**
 * @route PUT /api/risk-pools/:id
 * @desc Update a risk pool
 * @access Private (Admin)
 */
router.put('/:id', authenticate, validateUpdateRiskPool, updateRiskPool);

/**
 * @route DELETE /api/risk-pools/:id
 * @desc Delete a risk pool
 * @access Private (Admin)
 */
router.delete('/:id', authenticate, deleteRiskPool);

/**
 * @route POST /api/risk-pools/:id/capital
 * @desc Add capital provider to risk pool
 * @access Private
 */
router.post('/:id/capital', authenticate, addCapitalProvider);

/**
 * @route DELETE /api/risk-pools/:id/capital/:providerId
 * @desc Remove capital provider from risk pool
 * @access Private
 */
router.delete('/:id/capital/:providerId', authenticate, removeCapitalProvider);

export default router; 