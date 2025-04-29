import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

/**
 * Middleware to handle validation errors
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 * @returns Error response if validation fails, otherwise continues
 */
export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
      message: 'Validation error',
    });
  }
  next();
};

/**
 * Validation rules for creating a community
 */
export const validateCreateCommunity = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Community name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Community name must be between 2 and 100 characters'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),
  handleValidationErrors,
];

/**
 * Validation rules for updating a community
 */
export const validateUpdateCommunity = [
  body('name')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Community name cannot be empty')
    .isLength({ min: 2, max: 100 })
    .withMessage('Community name must be between 2 and 100 characters'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),
  handleValidationErrors,
];

/**
 * Validation rules for creating an event type
 */
export const validateCreateEventType = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Event type name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Event type name must be between 2 and 100 characters'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),
  handleValidationErrors,
];

/**
 * Validation rules for updating an event type
 */
export const validateUpdateEventType = [
  body('name')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Event type name cannot be empty')
    .isLength({ min: 2, max: 100 })
    .withMessage('Event type name must be between 2 and 100 characters'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),
  handleValidationErrors,
];

/**
 * Validation rules for creating a risk pool
 */
export const validateCreateRiskPool = [
  body('communityId')
    .notEmpty()
    .withMessage('Community ID is required')
    .isInt({ min: 1 })
    .withMessage('Community ID must be a positive integer'),
  body('eventTypeId')
    .notEmpty()
    .withMessage('Event type ID is required')
    .isInt({ min: 1 })
    .withMessage('Event type ID must be a positive integer'),
  body('totalCapital')
    .optional()
    .isNumeric()
    .withMessage('Total capital must be a number'),
  handleValidationErrors,
];

/**
 * Validation rules for updating a risk pool
 */
export const validateUpdateRiskPool = [
  body('totalCapital')
    .optional()
    .isNumeric()
    .withMessage('Total capital must be a number'),
  handleValidationErrors,
];

/**
 * Validation rules for creating a policy
 */
export const validateCreatePolicy = [
  body('userId')
    .notEmpty()
    .withMessage('User ID is required')
    .isInt({ min: 1 })
    .withMessage('User ID must be a positive integer'),
  body('riskPoolId')
    .notEmpty()
    .withMessage('Risk pool ID is required')
    .isInt({ min: 1 })
    .withMessage('Risk pool ID must be a positive integer'),
  body('coverageAmount')
    .notEmpty()
    .withMessage('Coverage amount is required')
    .isNumeric()
    .withMessage('Coverage amount must be a number'),
  body('premiumAmount')
    .notEmpty()
    .withMessage('Premium amount is required')
    .isNumeric()
    .withMessage('Premium amount must be a number'),
  body('coverageStart')
    .notEmpty()
    .withMessage('Coverage start date is required')
    .isISO8601()
    .withMessage('Coverage start date must be a valid date'),
  body('coverageEnd')
    .notEmpty()
    .withMessage('Coverage end date is required')
    .isISO8601()
    .withMessage('Coverage end date must be a valid date')
    .custom((value, { req }) => {
      if (new Date(value) <= new Date(req.body.coverageStart)) {
        throw new Error('Coverage end date must be after coverage start date');
      }
      return true;
    }),
  handleValidationErrors,
];

/**
 * Validation rules for creating a user
 */
export const validateCreateUser = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email must be valid'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  body('fullName')
    .optional()
    .isString()
    .withMessage('Full name must be a string'),
  body('phoneNumber')
    .optional()
    .isString()
    .withMessage('Phone number must be a string'),
  body('walletAddress')
    .optional()
    .isString()
    .withMessage('Wallet address must be a string'),
  handleValidationErrors,
];

/**
 * Validation rules for user login
 */
export const validateLogin = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email must be valid'),
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
  handleValidationErrors,
]; 