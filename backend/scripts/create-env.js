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

# JWT Configuration
JWT_SECRET=${jwtSecret}
JWT_EXPIRATION=24h

# Appwrite Configuration
APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
APPWRITE_PROJECT_ID=your_project_id
APPWRITE_API_KEY=your_api_key
APPWRITE_DATABASE_ID=your_database_id

# Appwrite Collection IDs
APPWRITE_COLLECTION_USERS_ID=your_users_collection_id
APPWRITE_COLLECTION_COMMUNITIES_ID=your_communities_collection_id
APPWRITE_COLLECTION_EVENT_TYPES_ID=your_event_types_collection_id
APPWRITE_COLLECTION_RISK_POOLS_ID=your_risk_pools_collection_id
APPWRITE_COLLECTION_CAPITAL_PROVIDERS_ID=your_capital_providers_collection_id
APPWRITE_COLLECTION_POLICIES_ID=your_policies_collection_id
APPWRITE_COLLECTION_ORACLE_SOURCES_ID=your_oracle_sources_collection_id
APPWRITE_COLLECTION_ORACLE_DATA_ID=your_oracle_data_collection_id
APPWRITE_COLLECTION_POLICY_TRIGGERS_ID=your_policy_triggers_collection_id
APPWRITE_COLLECTION_PAYMENTS_ID=your_payments_collection_id
APPWRITE_COLLECTION_PAYOUTS_ID=your_payouts_collection_id
APPWRITE_COLLECTION_REFRESH_TOKENS_ID=your_refresh_tokens_collection_id
APPWRITE_COLLECTION_NOTIFICATIONS_ID=your_notifications_collection_id
APPWRITE_COLLECTION_AUDIT_LOGS_ID=your_audit_logs_collection_id
APPWRITE_COLLECTION_WEATHER_DATA_ID=your_weather_data_collection_id

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
console.log('⚠️  Make sure to update the Appwrite configuration with your actual project details');
console.log('📝 Location:', envPath); 