import express from 'express';
import { getCommunities, getCommunityById, createCommunity, updateCommunity, deleteCommunity } from '../controllers/communityController';
import { validateCreateCommunity, validateUpdateCommunity } from '../middleware/validationMiddleware';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Community:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the community
 *         name:
 *           type: string
 *           description: Name of the community (e.g., Accra East)
 *         description:
 *           type: string
 *           description: Detailed description of the community
 *     CreateCommunity:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the community
 *         description:
 *           type: string
 *           description: Detailed description of the community
 */

/**
 * @swagger
 * /communities:
 *   get:
 *     summary: Get all communities
 *     tags: [Communities]
 *     responses:
 *       200:
 *         description: List of all communities
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
 *                     $ref: '#/components/schemas/Community'
 *       500:
 *         description: Server error
 */
router.get('/', getCommunities);

/**
 * @swagger
 * /communities/{id}:
 *   get:
 *     summary: Get community by ID
 *     tags: [Communities]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the community
 *     responses:
 *       200:
 *         description: Community details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Community'
 *       404:
 *         description: Community not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getCommunityById);

/**
 * @swagger
 * /communities:
 *   post:
 *     summary: Create a new community
 *     tags: [Communities]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCommunity'
 *     responses:
 *       201:
 *         description: Community created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Community'
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */
router.post('/', authenticate, validateCreateCommunity, createCommunity);

/**
 * @swagger
 * /communities/{id}:
 *   put:
 *     summary: Update a community
 *     tags: [Communities]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the community
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Community updated successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Community not found
 *       500:
 *         description: Server error
 */
router.put('/:id', authenticate, validateUpdateCommunity, updateCommunity);

/**
 * @swagger
 * /communities/{id}:
 *   delete:
 *     summary: Delete a community
 *     tags: [Communities]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the community
 *     responses:
 *       200:
 *         description: Community deleted successfully
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Community not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', authenticate, deleteCommunity);

export default router;