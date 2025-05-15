import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import Redis from 'redis';
import config from './config/config';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swaggerConfig';
import ScheduledJobsService from './services/scheduledJobsService';
import { errorHandler } from './utils/errors';
import AuditLogService, { AuditAction, AuditEntity } from './services/auditLogService';
// Import policy status tracking service to start cron job
import './services/policyStatusService';

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
// import authRoutes from './routes/authRoutes';

// Initialize Express app
const app: Express = express();
const port = config.port;

// Initialize scheduled jobs service
const scheduledJobsService = new ScheduledJobsService();

// Initialize audit log service
const auditLogService = new AuditLogService();

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
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://farm-protection.com', 'https://app.farm-protection.com'] // Production domains
    : '*', // Allow all origins in development
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Pass cache client to req object
app.use((req: any, res: Response, next) => {
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
// app.use('/api/auth', authRoutes);

// Setup Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API JSON spec endpoint
app.get('/api-docs.json', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Import route files
// Note: Routes are dynamically loaded to handle potential missing files during development
try {
  const communityRoutes = require('./routes/communityRoutes').default;
  app.use('/api/communities', communityRoutes);
  console.log('Registered: Community routes');
} catch (error) {
  console.warn('Community routes not available yet');
}

try {
  const eventTypeRoutes = require('./routes/eventTypeRoutes').default;
  app.use('/api/event-types', eventTypeRoutes);
  console.log('Registered: Event type routes');
} catch (error) {
  console.warn('Event type routes not available yet');
}

try {
  const riskPoolRoutes = require('./routes/riskPoolRoutes').default;
  app.use('/api/risk-pools', riskPoolRoutes);
  console.log('Registered: Risk pool routes');
} catch (error) {
  console.warn('Risk pool routes not available yet');
}

try {
  const userRoutes = require('./routes/userRoutes').default;
  app.use('/api/users', userRoutes);
  console.log('Registered: User routes');
} catch (error) {
  console.warn('User routes not available yet');
}

try {
  const policyRoutes = require('./routes/policyRoutes').default;
  app.use('/api/policies', policyRoutes);
  console.log('Registered: Policy routes');
} catch (error) {
  console.warn('Policy routes not available yet');
}

try {
  const oracleRoutes = require('./routes/oracleRoutes').default;
  app.use('/api/oracles', oracleRoutes);
  console.log('Registered: Oracle routes');
} catch (error) {
  console.warn('Oracle routes not available yet');
}

try {
  const paymentRoutes = require('./routes/paymentRoutes').default;
  app.use('/api/payments', paymentRoutes);
  console.log('Registered: Payment routes');
} catch (error) {
  console.warn('Payment routes not available yet');
}

// Register wallet authentication routes
try {
  const walletAuthRoutes = require('./routes/walletAuthRoutes').default;
  app.use('/api/wallet-auth', walletAuthRoutes);
  console.log('Registered: Wallet Authentication routes');
} catch (error) {
  console.warn('Wallet Authentication routes not available yet');
}

try {
  const notificationRoutes = require('./routes/notificationRoutes').default;
  app.use('/api/notifications', notificationRoutes);
  console.log('Registered: Notification routes');
} catch (error) {
  console.warn('Notification routes not available yet');
}

try {
  const auditRoutes = require('./routes/auditRoutes').default;
  app.use('/api/audit', auditRoutes);
  console.log('Registered: Audit routes');
} catch (error) {
  console.warn('Audit routes not available yet');
}

// Default welcome route
app.get('/api', (req: Request, res: Response) => {
  res.json({ 
    success: true, 
    message: 'Farm Protection API is running',
    version: '1.0.0' 
  });
});

// Health check route
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ 
    success: true, 
    message: 'Farm Protection API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Global error handling middleware
app.use(errorHandler);

// Start server
const startServer = async () => {
  try {
    // Initialize Redis if configured
    if (config.redis.enabled) {
      await initRedisClient();
      console.log('Redis connected');
    }
    
    // Start scheduled jobs
    scheduledJobsService.startAllJobs();
    
    // Log system startup
    await auditLogService.logSystemAction(AuditAction.SYSTEM_STARTUP, {
      version: process.env.npm_package_version || 'unknown',
      environment: config.env,
      startTime: new Date().toISOString()
    });
    
    // Start Express server
    app.listen(port, () => {
      console.log(`⚡️ Server running on port ${port} in ${config.env} mode`);
      console.log(`Health check available at: http://localhost:${port}/health`);
      console.log(`API Documentation available at: http://localhost:${port}/api-docs`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Handle graceful shutdown
const shutdown = async () => {
  console.log('Shutting down server...');
  
  // Stop scheduled jobs
  scheduledJobsService.stopAllJobs();
  
  // Log system shutdown
  try {
    await auditLogService.logSystemAction(AuditAction.SYSTEM_SHUTDOWN, {
      shutdownTime: new Date().toISOString(),
      reason: 'graceful shutdown'
    });
  } catch (error) {
    console.error('Error logging system shutdown:', error);
  }
  
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