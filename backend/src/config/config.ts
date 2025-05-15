import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

/**
 * Environment configuration for the application
 */
const config = {
  /**
   * Node environment (development, production, etc.)
   */
  env: process.env.NODE_ENV || 'development',
  
  /**
   * Server port
   */
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3001,
  
  /**
   * Appwrite configuration
   */
  appwrite: {
    endpoint: process.env.APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1',
    projectId: process.env.APPWRITE_PROJECT_ID || '',
    apiKey: process.env.APPWRITE_API_KEY || '',
    databaseId: process.env.APPWRITE_DATABASE_ID || '',
  },
  
  /**
   * JWT configuration
   */
  jwt: {
    secret: process.env.JWT_SECRET || 'dev_jwt_secret',
    expiration: process.env.JWT_EXPIRATION || '24h',
  },
  
  /**
   * Redis configuration for caching
   */
  redis: {
    url: process.env.REDIS_URL || '',
    enabled: !!process.env.REDIS_URL,
  },
  
  /**
   * API rate limiting settings
   */
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  },
  
  /**
   * Logging configuration
   */
  logging: {
    level: process.env.LOG_LEVEL || 'info',
  },
};

/**
 * Validate critical configuration variables and throw error if any are missing
 */
const validateConfig = () => {
  const requiredEnvVars = [
    'JWT_SECRET', 
    'APPWRITE_PROJECT_ID', 
    'APPWRITE_API_KEY', 
    'APPWRITE_DATABASE_ID'
  ];
  
  const missingVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );
  
  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }
};

// In non-production environments, validation errors are only logged, not thrown
if (config.env === 'production') {
  try {
    validateConfig();
  } catch (error) {
    throw error;
  }
} else {
  try {
    validateConfig();
  } catch (error) {
    console.warn(`Warning: ${(error as Error).message}`);
    console.warn('Continuing with default values for development');
  }
}

export default config; 