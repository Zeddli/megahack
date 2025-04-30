/**
 * Script to generate a local .env file for development
 * 
 * This generates a simple .env file with development defaults.
 * For production, these values should be properly configured.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Generate a random JWT secret
const jwtSecret = crypto.randomBytes(32).toString('hex');

// Create .env content
const envContent = `# Server Configuration
NODE_ENV=development
PORT=3001

# Database Configuration - NEON PostgreSQL Connection
# Replace with your actual NEON PostgreSQL connection string
DATABASE_URL=postgresql://username:password@endpoint:5432/database_name?sslmode=require

# JWT Configuration
JWT_SECRET=${jwtSecret}
JWT_EXPIRATION=24h

# Redis Configuration (for caching)
# Uncomment the line below to enable Redis caching
# REDIS_URL=redis://localhost:6379

# Logging Configuration
LOG_LEVEL=debug
`;

// Path to .env file
const envPath = path.join(__dirname, '..', '.env');

// Check if .env file already exists
if (fs.existsSync(envPath)) {
  console.log('❌ .env file already exists. To regenerate, delete the existing file first.');
  process.exit(1);
}

// Write .env file
fs.writeFileSync(envPath, envContent);

console.log('✅ Created .env file with development defaults');
console.log('⚠️  Make sure to update DATABASE_URL with your actual NEON PostgreSQL connection string');
console.log('📝 Location:', envPath); 