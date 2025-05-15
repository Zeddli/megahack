# Authentication Troubleshooting Guide

## Login Redirect Loop Issue

If you're experiencing an issue where login appears successful but immediately redirects back to the login page instead of the dashboard, follow these steps:

### 1. Verify Frontend Configuration

Create or update your `.env.local` file in the `great-insure` (frontend) directory:

```
# Backend API URL - points to our local backend server
BACKEND_API_URL=http://localhost:5000/api

# Environment
NEXT_PUBLIC_ENV=development

# Enable API debugging
NEXT_PUBLIC_DEBUG_API=true
```

### 2. Update API Route URL Format

Make sure all your frontend API routes use the correct URL format:

Change from:
```javascript
const apiUrl = process.env.BACKEND_API_URL || 'https://api.ahotor.io/v1';
```

To:
```javascript
const apiUrl = process.env.BACKEND_API_URL || 'http://localhost:5000/api';
```

### 3. Check Browser Cookies

After logging in, verify that cookies are being set properly:

1. Open your browser's developer tools (F12)
2. Go to the "Application" tab (Chrome) or "Storage" tab (Firefox)
3. Check if `accessToken` and `refreshToken` cookies exist
4. If they don't, there might be an issue with cookie settings in your login route

### 4. Verify Token Format

The Appwrite migration changes how tokens are generated and stored. Check that:

1. The backend API endpoint is returning proper tokens
2. The frontend is correctly setting cookies with the tokens

### 5. CORS Configuration

Ensure the backend CORS configuration allows cookies:

```javascript
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://ahotor.io', 'https://app.ahotor.io'] 
    : ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control', 'Pragma']
}));
```

### 6. Check Authentication Headers

Verify that your frontend API routes are sending the correct headers:

```javascript
const response = await fetch(`${apiUrl}/users/profile`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  },
});
```

### 7. Browser Console Errors

Check the browser console for any errors that might indicate what's going wrong:

1. Network request failures
2. CORS errors
3. JWT token validation errors

### 8. Test with Postman or Curl

Try authenticating directly with the backend API using Postman or curl to isolate if the issue is with the frontend or backend:

```bash
# Login to get a token
curl -X POST http://localhost:5000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"your-email@example.com","password":"your-password"}'

# Use the token to fetch profile
curl -X GET http://localhost:5000/api/users/profile \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

If this works but the frontend doesn't, the issue is likely in the frontend API routes or cookie handling. 

# Troubleshooting Common Backend Issues

## API Error: Failed to fetch wallet data

**Error Message:**
```
[BACKEND] Error fetching wallet data: TypeError: Cannot read properties of undefined (reading 'Databases')
```

**Solution:** 
This error occurs when the Appwrite service is not properly initialized. To fix:

1. Edit `src/services/appwriteService.ts` to properly initialize the Databases instance:
   ```typescript
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
   ```

2. Update `src/controllers/userController.ts` to use the initialized database instance:
   ```typescript
   // In the getWalletData function
   const { databases } = appwrite;
   ```

## API Error: Failed to fetch policies 

**Error Message:**
```
Error: Server error (500) when fetching policies. This may be a temporary backend issue.
```

**Solution:**
The error can occur due to several issues:

1. Missing API endpoint - The frontend calls `/policies/user` but the backend doesn't have this route.
   - Add the route in `src/routes/policyRoutes.ts`:
   ```typescript
   router.get('/user', authenticate, (req, res) => {
     // Return policy data
   });
   ```

2. Database connection issues or type errors in the controller.
   - For a quick fix, implement a mock data endpoint that returns sample policies.
   - This allows the frontend to work while you debug the database connection.

3. Type inconsistencies between AuthRequest (string IDs) and Prisma schema (number IDs).
   - Parse string IDs to numbers before using them in Prisma queries.
   - Handle potential parsing errors with try/catch blocks.

## Environment Configuration

Ensure all required environment variables are set:

- For Appwrite integration:
  ```
  APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
  APPWRITE_PROJECT_ID=your_project_id
  APPWRITE_API_KEY=your_api_key
  APPWRITE_DATABASE_ID=your_database_id
  APPWRITE_COLLECTION_POLICIES_ID=your_policies_collection_id
  APPWRITE_COLLECTION_TRANSACTIONS_ID=your_transactions_collection_id
  ```

- For database connection:
  ```
  DATABASE_URL=postgres://username:password@localhost:5432/database
  ```

## Testing API Endpoints

You can test the API endpoints using curl or Postman:

```bash
# Test the wallet data endpoint
curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" http://localhost:3001/users/wallet-data

# Test the policy endpoint
curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" http://localhost:3001/policies/user
``` 