import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { PrismaClient } from '@prisma/client';
import Redis from 'redis';
import config from './config/config';
import path from 'path';

// Load routes as they're created
// If these modules don't exist yet, uncomment them when they're created
// import communityRoutes from './routes/communityRoutes';
// import eventTypeRoutes from './routes/eventTypeRoutes';
// import riskPoolRoutes from './routes/riskPoolRoutes';
// import policyRoutes from './routes/policyRoutes';
// import oracleRoutes from './routes/oracleRoutes';
// import paymentRoutes from './routes/paymentRoutes';
// import payoutRoutes from './routes/payoutRoutes';
// import userRoutes from './routes/userRoutes';

// Initialize Express app
const app: Express = express();
const port = config.port;

// Initialize Prisma client
const prisma = new PrismaClient();

// Redis client initialization
let redisClient: any;
const initRedisClient = async () => {
  if (config.redis.enabled) {
    redisClient = Redis.createClient({
      url: config.redis.url
    });
    
    redisClient.on('error', (err: Error) => {
      console.error('Redis Client Error:', err);
    });
    
    await redisClient.connect();
  }
};

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Pass database and cache clients to req object
app.use((req: any, res: Response, next) => {
  req.db = prisma;
  req.cache = redisClient;
  next();
});

// Register routes as they are created
// app.use('/api/communities', communityRoutes);
// app.use('/api/event-types', eventTypeRoutes);
// app.use('/api/risk-pools', riskPoolRoutes);
// app.use('/api/policies', policyRoutes);
// app.use('/api/oracles', oracleRoutes);
// app.use('/api/payments', paymentRoutes);
// app.use('/api/payouts', payoutRoutes);
// app.use('/api/users', userRoutes);

// Import route files
// Note: Uncomment these as they are created
try {
  const communityRoutes = require('./routes/communityRoutes').default;
  app.use('/api/communities', communityRoutes);
  console.log('Registered: Community routes');
} catch (error) {
  console.warn('Community routes not available yet');
}

// Health check route
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', message: 'Ahotor Protocol API is running' });
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: err.message || 'Internal Server Error'
  });
});

// Start server
const startServer = async () => {
  try {
    // Initialize Redis if configured
    if (config.redis.enabled) {
      await initRedisClient();
      console.log('Redis connected');
    }
    
    // Start Express server
    app.listen(port, () => {
      console.log(`⚡️ Server running on port ${port} in ${config.env} mode`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Handle graceful shutdown
const shutdown = async () => {
  console.log('Shutting down server...');
  
  // Close database connection
  await prisma.$disconnect();
  
  // Close Redis connection if available
  if (redisClient) {
    await redisClient.quit();
  }
  
  process.exit(0);
};

// Handle shutdown signals
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

// Start the server
startServer().catch(console.error);

export default app; 