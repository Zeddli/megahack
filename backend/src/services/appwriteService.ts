import { Client, Databases, Query } from 'node-appwrite';

// Initialize Appwrite client
const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject(process.env.APPWRITE_PROJECT_ID || '')
  .setKey(process.env.APPWRITE_API_KEY || '');

// Create database instance
const databases = new Databases(client);

// Export required modules and a configured instance
export const appwrite = {
  client,
  Databases, // Export the Databases class
  databases, // Export the initialized databases instance
  Query,
};

// Export as CommonJS module for compatibility
module.exports = {
  client,
  Databases,
  databases, // Include the initialized databases instance
  Query,
}; 