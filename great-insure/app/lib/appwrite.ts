import { Client, Account, Databases, Query, Models } from 'appwrite';

// Initialize Appwrite Client with proper error handling
let clientInstance: Client | null = null;

// Set default values for Appwrite connection
const APPWRITE_ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || 'farm-protection';

// Log Appwrite configuration for debugging
console.log('Appwrite Configuration:');
console.log('- Endpoint:', APPWRITE_ENDPOINT);
console.log('- Project ID:', APPWRITE_PROJECT_ID);

try {
  clientInstance = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);
  console.log('Appwrite client initialized successfully');
} catch (error) {
  console.error('Failed to initialize Appwrite client:', error);
}

// Initialize Appwrite services
export const client = clientInstance as Client;
export const account = new Account(client);
export const databases = new Databases(client);

// Database and collection IDs
export const APPWRITE_DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'farm-protection-db';
export const APPWRITE_COLLECTION_USERS_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_USERS_ID || 'farmprotection_users';

console.log('Appwrite Database Config:');
console.log('- Database ID:', APPWRITE_DATABASE_ID);
console.log('- Users Collection ID:', APPWRITE_COLLECTION_USERS_ID);

// Helper function to check if client is initialized
const checkClient = () => {
  if (!clientInstance) {
    throw new Error('Appwrite client not initialized');
  }
};

// User-related functions
export const getUserProfile = async (userId: string): Promise<Models.Document | null> => {
  try {
    checkClient();
    console.log(`Fetching user profile for userId: ${userId}`);
    console.log(`Database ID: ${APPWRITE_DATABASE_ID}, Collection ID: ${APPWRITE_COLLECTION_USERS_ID}`);
    
    const userData = await databases.getDocument(
      APPWRITE_DATABASE_ID,
      APPWRITE_COLLECTION_USERS_ID,
      userId
    );
    
    console.log('User profile fetch successful');
    return userData;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    
    // Log more detailed error information
    if (typeof error === 'object' && error !== null) {
      const appwriteError = error as { code?: number; message?: string; response?: string };
      console.error('Appwrite error details:', {
        code: appwriteError.code,
        message: appwriteError.message,
        response: appwriteError.response
      });
    }
    
    return null;
  }
};

export const getUserByWalletAddress = async (walletAddress: string): Promise<Models.Document | null> => {
  try {
    checkClient();
    console.log(`Looking up user by wallet address: ${walletAddress}`);
    
    const users = await databases.listDocuments(
      APPWRITE_DATABASE_ID,
      APPWRITE_COLLECTION_USERS_ID,
      [Query.equal('walletAddress', walletAddress)]
    );
    
    const found = users.documents.length > 0;
    console.log(`User lookup result: ${found ? 'Found' : 'Not found'}`);
    
    return users.documents.length > 0 ? users.documents[0] : null;
  } catch (error) {
    console.error('Error fetching user by wallet address:', error);
    
    // Log more detailed error information
    if (typeof error === 'object' && error !== null) {
      const appwriteError = error as { code?: number; message?: string; response?: string };
      console.error('Appwrite error details:', {
        code: appwriteError.code,
        message: appwriteError.message,
        response: appwriteError.response
      });
    }
    
    return null;
  }
};

export const linkWalletToUser = async (userId: string, walletAddress: string): Promise<Models.Document | null> => {
  try {
    checkClient();
    console.log(`Linking wallet ${walletAddress} to user ${userId}`);
    
    const updatedUser = await databases.updateDocument(
      APPWRITE_DATABASE_ID,
      APPWRITE_COLLECTION_USERS_ID,
      userId,
      { walletAddress }
    );
    
    console.log('Wallet linked successfully');
    return updatedUser;
  } catch (error) {
    console.error('Error linking wallet to user:', error);
    
    // Log more detailed error information
    if (typeof error === 'object' && error !== null) {
      const appwriteError = error as { code?: number; message?: string; response?: string };
      console.error('Appwrite error details:', {
        code: appwriteError.code,
        message: appwriteError.message,
        response: appwriteError.response
      });
    }
    
    return null;
  }
}; 