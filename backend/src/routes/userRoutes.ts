import express from 'express';
import { 
  registerUser, 
  loginUser, 
  getUserProfile, 
  updateUserProfile,
  getAllUsers 
} from '../controllers/userController';
import { validateCreateUser, validateLogin } from '../middleware/validationMiddleware';
import { authenticate, isAdmin } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @route POST /api/users/register
 * @desc Register a new user
 * @access Public
 */
router.post('/register', validateCreateUser, registerUser);

/**
 * @route POST /api/users/login
 * @desc Login a user
 * @access Public
 */
router.post('/login', validateLogin, loginUser);

/**
 * @route GET /api/users/profile
 * @desc Get user profile
 * @access Private
 */
router.get('/profile', authenticate, getUserProfile);

/**
 * @route PUT /api/users/profile
 * @desc Update user profile
 * @access Private
 */
router.put('/profile', authenticate, updateUserProfile);

/**
 * @route GET /api/users
 * @desc Get all users (admin only)
 * @access Private (Admin)
 */
router.get('/', authenticate, isAdmin, getAllUsers);

export default router; 