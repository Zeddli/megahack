import express from 'express';
import { authenticate, isAdmin } from '../middleware/authMiddleware';
import { oracleController } from '../controllers/oracleController';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     OracleSource:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the oracle source
 *         name:
 *           type: string
 *           description: Name of the data source
 *         sourceType:
 *           type: string
 *           description: Type of data (weather, power outage, etc.)
 *         endpoint:
 *           type: string
 *           description: API endpoint or data source location
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the source was added
 *     OracleData:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID
 *         oracleSourceId:
 *           type: integer
 *           description: ID of the data source
 *         timestamp:
 *           type: string
 *           format: date-time
 *           description: When the data was recorded
 *         data:
 *           type: object
 *           description: The actual data values (varies by source type)
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: When the data was ingested
 */

/**
 * @swagger
 * /oracles/sources:
 *   get:
 *     summary: Get all oracle data sources
 *     tags: [Oracles]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of oracle sources
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
 *                     $ref: '#/components/schemas/OracleSource'
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */
// router.get('/sources', authenticate, getOracleSources);

/**
 * @swagger
 * /oracles/sources/{id}:
 *   get:
 *     summary: Get oracle source by ID
 *     tags: [Oracles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Oracle source ID
 *     responses:
 *       200:
 *         description: Oracle source details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/OracleSource'
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Oracle source not found
 *       500:
 *         description: Server error
 */
// router.get('/sources/:id', authenticate, getOracleSourceById);

/**
 * @swagger
 * /oracles/sources:
 *   post:
 *     summary: Create a new oracle data source
 *     tags: [Oracles]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - sourceType
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the data source
 *               sourceType:
 *                 type: string
 *                 description: Type of data being provided
 *               endpoint:
 *                 type: string
 *                 description: API endpoint or data location
 *     responses:
 *       201:
 *         description: Oracle source created successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Not authorized
 *       500:
 *         description: Server error
 */
// router.post('/sources', authenticate, isAdmin, validateCreateOracleSource, createOracleSource);

/**
 * @swagger
 * /oracles/data:
 *   get:
 *     summary: Get oracle data records
 *     tags: [Oracles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: sourceId
 *         schema:
 *           type: integer
 *         description: Filter by oracle source ID
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter by start date (YYYY-MM-DD)
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter by end date (YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: List of oracle data records
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
 *                     $ref: '#/components/schemas/OracleData'
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */
// router.get('/data', authenticate, getOracleData);

/**
 * @swagger
 * /oracles/data/{id}:
 *   get:
 *     summary: Get oracle data record by ID
 *     tags: [Oracles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Oracle data record ID
 *     responses:
 *       200:
 *         description: Oracle data record details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/OracleData'
 *       401:
 *         description: Not authenticated
 *       404:
 *         description: Oracle data record not found
 *       500:
 *         description: Server error
 */
// router.get('/data/:id', authenticate, getOracleDataById);

/**
 * @swagger
 * /oracles/refresh/{sourceId}:
 *   post:
 *     summary: Manually trigger oracle data refresh for a source
 *     tags: [Oracles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sourceId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Oracle source ID to refresh
 *     responses:
 *       200:
 *         description: Data refresh initiated
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Not authorized
 *       404:
 *         description: Oracle source not found
 *       500:
 *         description: Server error
 */
// router.post('/refresh/:sourceId', authenticate, isAdmin, refreshOracleData);

/**
 * @swagger
 * /api/oracle/weather:
 *   get:
 *     summary: Get current weather data for a specific location
 *     tags: [Oracle]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: lat
 *         required: true
 *         schema:
 *           type: number
 *         description: Latitude of the location
 *       - in: query
 *         name: lon
 *         required: true
 *         schema:
 *           type: number
 *         description: Longitude of the location
 *     responses:
 *       200:
 *         description: Weather data successfully retrieved
 *       400:
 *         description: Invalid parameters
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/weather', authenticate, oracleController.getCurrentWeather);

/**
 * @swagger
 * /api/oracle/forecast:
 *   get:
 *     summary: Get weather forecast for a specific location
 *     tags: [Oracle]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: lat
 *         required: true
 *         schema:
 *           type: number
 *         description: Latitude of the location
 *       - in: query
 *         name: lon
 *         required: true
 *         schema:
 *           type: number
 *         description: Longitude of the location
 *     responses:
 *       200:
 *         description: Forecast data successfully retrieved
 *       400:
 *         description: Invalid parameters
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/forecast', authenticate, oracleController.getWeatherForecast);

/**
 * @swagger
 * /api/oracle/check-triggers/{policyId}:
 *   get:
 *     summary: Check if a policy's weather trigger conditions are met
 *     tags: [Oracle]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: policyId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the policy to check
 *     responses:
 *       200:
 *         description: Trigger conditions checked successfully
 *       400:
 *         description: Invalid policy ID
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/check-triggers/:policyId', authenticate, oracleController.checkWeatherTriggers);

export default router; 