import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import { Client, Databases, ID } from 'node-appwrite';

// Load environment variables
dotenv.config();

// Initialize Prisma client (PostgreSQL)
const prisma = new PrismaClient();

// Initialize Appwrite client
const appwriteClient = new Client();
appwriteClient
  .setEndpoint(process.env.APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject(process.env.APPWRITE_PROJECT_ID || '')
  .setKey(process.env.APPWRITE_API_KEY || '');

const databases = new Databases(appwriteClient);
const databaseId = process.env.APPWRITE_DATABASE_ID || '';

// Define collection IDs
const collections = {
  users: process.env.APPWRITE_COLLECTION_USERS_ID || '',
  communities: process.env.APPWRITE_COLLECTION_COMMUNITIES_ID || '',
  eventTypes: process.env.APPWRITE_COLLECTION_EVENT_TYPES_ID || '',
  riskPools: process.env.APPWRITE_COLLECTION_RISK_POOLS_ID || '',
  capitalProviders: process.env.APPWRITE_COLLECTION_CAPITAL_PROVIDERS_ID || '',
  policies: process.env.APPWRITE_COLLECTION_POLICIES_ID || '',
  oracleSources: process.env.APPWRITE_COLLECTION_ORACLE_SOURCES_ID || '',
  oracleData: process.env.APPWRITE_COLLECTION_ORACLE_DATA_ID || '',
  policyTriggers: process.env.APPWRITE_COLLECTION_POLICY_TRIGGERS_ID || '',
  payments: process.env.APPWRITE_COLLECTION_PAYMENTS_ID || '',
  payouts: process.env.APPWRITE_COLLECTION_PAYOUTS_ID || '',
  refreshTokens: process.env.APPWRITE_COLLECTION_REFRESH_TOKENS_ID || '',
  notifications: process.env.APPWRITE_COLLECTION_NOTIFICATIONS_ID || '',
  auditLogs: process.env.APPWRITE_COLLECTION_AUDIT_LOGS_ID || '',
  weatherData: process.env.APPWRITE_COLLECTION_WEATHER_DATA_ID || ''
};

// Map to keep track of old IDs to new IDs
const idMap: Record<string, Record<string, string>> = {
  users: {},
  communities: {},
  eventTypes: {},
  riskPools: {},
  capitalProviders: {},
  policies: {},
  oracleSources: {},
  oracleData: {},
  policyTriggers: {},
  payments: {},
  payouts: {},
  refreshTokens: {},
  notifications: {},
  auditLogs: {},
  weatherData: {}
};

/**
 * Migrate users
 */
async function migrateUsers() {
  console.log('Migrating users...');
  const users = await prisma.user.findMany();
  
  for (const user of users) {
    try {
      const documentId = ID.unique();
      idMap.users[user.id.toString()] = documentId;
      
      await databases.createDocument(
        databaseId,
        collections.users,
        documentId,
        {
          email: user.email,
          password: user.password, // Already hashed in PostgreSQL
          fullName: user.fullName,
          phoneNumber: user.phoneNumber,
          walletAddress: user.walletAddress,
          createdAt: user.createdAt.toISOString(),
          updatedAt: user.updatedAt.toISOString()
        }
      );
      
      console.log(`Migrated user: ${user.email}`);
    } catch (error) {
      console.error(`Error migrating user ${user.email}:`, error);
    }
  }
  console.log(`Migrated ${users.length} users.`);
}

/**
 * Migrate communities
 */
async function migrateCommunities() {
  console.log('Migrating communities...');
  const communities = await prisma.community.findMany();
  
  for (const community of communities) {
    try {
      const documentId = ID.unique();
      idMap.communities[community.id.toString()] = documentId;
      
      await databases.createDocument(
        databaseId,
        collections.communities,
        documentId,
        {
          name: community.name,
          description: community.description,
          createdAt: community.createdAt.toISOString()
        }
      );
      
      console.log(`Migrated community: ${community.name}`);
    } catch (error) {
      console.error(`Error migrating community ${community.name}:`, error);
    }
  }
  console.log(`Migrated ${communities.length} communities.`);
}

/**
 * Migrate event types
 */
async function migrateEventTypes() {
  console.log('Migrating event types...');
  const eventTypes = await prisma.eventType.findMany();
  
  for (const eventType of eventTypes) {
    try {
      const documentId = ID.unique();
      idMap.eventTypes[eventType.id.toString()] = documentId;
      
      await databases.createDocument(
        databaseId,
        collections.eventTypes,
        documentId,
        {
          name: eventType.name,
          description: eventType.description
        }
      );
      
      console.log(`Migrated event type: ${eventType.name}`);
    } catch (error) {
      console.error(`Error migrating event type ${eventType.name}:`, error);
    }
  }
  console.log(`Migrated ${eventTypes.length} event types.`);
}

/**
 * Migrate risk pools
 */
async function migrateRiskPools() {
  console.log('Migrating risk pools...');
  const riskPools = await prisma.riskPool.findMany();
  
  for (const riskPool of riskPools) {
    try {
      const documentId = ID.unique();
      idMap.riskPools[riskPool.id.toString()] = documentId;
      
      await databases.createDocument(
        databaseId,
        collections.riskPools,
        documentId,
        {
          communityId: idMap.communities[riskPool.communityId.toString()],
          eventTypeId: idMap.eventTypes[riskPool.eventTypeId.toString()],
          totalCapital: riskPool.totalCapital.toString(),
          createdAt: riskPool.createdAt.toISOString()
        }
      );
      
      console.log(`Migrated risk pool ID: ${riskPool.id}`);
    } catch (error) {
      console.error(`Error migrating risk pool ID ${riskPool.id}:`, error);
    }
  }
  console.log(`Migrated ${riskPools.length} risk pools.`);
}

/**
 * Main migration function
 */
async function migrateData() {
  try {
    // First migrate base data
    await migrateUsers();
    await migrateCommunities();
    await migrateEventTypes();
    await migrateRiskPools();
    
    // Then migrate dependent data (referencing the base data)
    // These functions would need to be implemented following the same pattern
    // await migratePolicies();
    // await migrateCapitalProviders();
    // await migrateOracleSources();
    // await migrateOracleData();
    // await migratePolicyTriggers();
    // await migratePayments();
    // await migratePayouts();
    // await migrateRefreshTokens();
    // await migrateNotifications();
    // await migrateAuditLogs();
    // await migrateWeatherData();
    
    console.log('Migration completed successfully.');
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the migration
migrateData()
  .then(() => console.log('Migration script finished.'))
  .catch(error => console.error('Migration script failed:', error)); 