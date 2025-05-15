import express from 'express';
import { authenticate, isAdmin, AuthRequest } from '../middleware/authMiddleware';
import {
  createPolicy,
  getPolicies,
  getPolicyById,
  cancelPolicy,
  calculatePremiumController
} from '../controllers/policyController';
// import validateCreatePolicy from '../middleware/validationMiddleware'; // Uncomment if you add validation
import { Response } from 'express';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Policy:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the policy
 *         userId:
 *           type: integer
 *           description: The ID of the policy owner
 *         riskPoolId:
 *           type: integer
 *           description: The ID of the associated risk pool
 *         coverageAmount:
 *           type: number
 *           format: decimal
 *           description: The coverage amount in local currency
 *         premiumAmount:
 *           type: number
 *           format: decimal
 *           description: The premium amount in local currency
 *         coverageStart:
 *           type: string
 *           format: date-time
 *           description: The start date of coverage
 *         coverageEnd:
 *           type: string
 *           format: date-time
 *           description: The end date of coverage
 *         status:
 *           type: string
 *           enum: [active, inactive, expired, claimed]
 *           description: The current status of the policy
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the policy was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the policy was last updated
 *     CreatePolicy:
 *       type: object
 *       required:
 *         - riskPoolId
 *         - coverageAmount
 *       properties:
 *         riskPoolId:
 *           type: integer
 *           description: The risk pool to purchase a policy from
 *         coverageAmount:
 *           type: number
 *           format: decimal
 *           description: Desired coverage amount
 *         coverageDuration:
 *           type: integer
 *           description: Duration of coverage in days
 *           default: 180
 */

/**
 * @swagger
 * /policies/user:
 *   get:
 *     summary: Get policies for the current authenticated user
 *     tags: [Policies]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of user's policies
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Policy'
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */
// Add mock data route for development
router.get('/user', authenticate, (req: AuthRequest, res: Response) => {
  // Return mock data
  const mockPolicies = [
    {
      id: 1,
      policyNumber: "POL-000001",
      coverageType: "Flood Insurance",
      coverageAmount: 5000,
      premiumAmount: 250,
      coverageStart: new Date(Date.now()).toISOString(),
      coverageEnd: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString(),
      status: "active",
      riskPool: {
        id: 1,
        name: "Accra - Flood Protection",
        community: "Accra",
        eventType: "Flood"
      },
      claims: []
    },
    {
      id: 2,
      policyNumber: "POL-000002",
      coverageType: "Drought Insurance",
      coverageAmount: 3000,
      premiumAmount: 150,
      coverageStart: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      coverageEnd: new Date(Date.now() + 150 * 24 * 60 * 60 * 1000).toISOString(),
      status: "active",
      riskPool: {
        id: 2,
        name: "Tamale - Drought Protection",
        community: "Tamale",
        eventType: "Drought"
      },
      claims: []
    }
  ];
  
  return res.status(200).json({
    success: true,
    data: mockPolicies
  });
});

/**
 * @swagger
 * /policies:
 *   get:
 *     summary: Get all policies (admin) or user's policies, with advanced filtering
 *     tags: [Policies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [active, inactive, expired, claimed]
 *         description: Filter by policy status
 *       - in: query
 *         name: riskPoolId
 *         schema:
 *           type: integer
 *         description: Filter by risk pool ID
 *       - in: query
 *         name: coverageStartFrom
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Filter policies with coverageStart >= this date
 *       - in: query
 *         name: coverageStartTo
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Filter policies with coverageStart <= this date
 *       - in: query
 *         name: coverageEndFrom
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Filter policies with coverageEnd >= this date
 *       - in: query
 *         name: coverageEndTo
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Filter policies with coverageEnd <= this date
 *       - in: query
 *         name: userId
 *         schema:
 *           type: integer
 *         description: (Admin only) Filter by user ID
 *     responses:
 *       200:
 *         description: List of policies
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Policy'
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */
router.get('/', authenticate, getPolicies);

/**
 * @swagger
 * /policies/{id}:
 *   get:
 *     summary: Get policy by ID
 *     tags: [Policies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the policy
 *     responses:
 *       200:
 *         description: Policy details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Policy'
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Not authorized
 *       404:
 *         description: Policy not found
 *       500:
 *         description: Server error
 */
router.get('/:id', authenticate, getPolicyById);

/**
 * @swagger
 * /policies:
 *   post:
 *     summary: Create a new policy
 *     tags: [Policies]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePolicy'
 *     responses:
 *       201:
 *         description: Policy created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Policy'
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */
router.post('/', authenticate, createPolicy);

/**
 * @swagger
 * /policies/{id}/cancel:
 *   put:
 *     summary: Cancel a policy
 *     tags: [Policies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the policy
 *     responses:
 *       200:
 *         description: Policy canceled successfully
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Not authorized
 *       404:
 *         description: Policy not found
 *       500:
 *         description: Server error
 */
router.put('/:id/cancel', authenticate, cancelPolicy);

/**
 * @swagger
 * /policies/{id}/claim:
 *   post:
 *     summary: Initiate claim for a policy
 *     tags: [Policies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the policy
 *     responses:
 *       200:
 *         description: Claim initiated successfully
 *       400:
 *         description: Invalid claim request
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Not authorized
 *       404:
 *         description: Policy not found
 *       500:
 *         description: Server error
 */
// router.post('/:id/claim', authenticate, initiateClaimRequest);

/**
 * @route POST /policies/premium-calculator
 * @desc Calculate premium for a potential policy
 */
router.post('/premium-calculator', authenticate, calculatePremiumController);

export default router; 