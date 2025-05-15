# Frontend Integration Guide

This guide explains how to integrate the frontend (great-insure) with the backend Appwrite database.

## Prerequisites

- Backend server is running with Appwrite configured
- Frontend (Next.js) application is set up

## Integration Steps

### 1. Configure Frontend Environment

Create a `.env.local` file in the frontend root directory (`great-insure/.env.local`) with the following content:

```
# Backend API URL - points to our local backend server
BACKEND_API_URL=http://localhost:5000/api

# Environment
NEXT_PUBLIC_ENV=development

# Enable API debugging
NEXT_PUBLIC_DEBUG_API=true
```

### 2. Enable CORS in Backend

The backend already has CORS enabled, but verify that it's properly configured in `src/index.ts`:

```typescript
// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

### 3. Authentication Flow

The frontend and backend use JWT-based authentication:

1. Frontend makes login requests to `/api/auth/login` or `/api/auth/wallet-login`
2. Backend verifies credentials and returns JWT tokens
3. Frontend stores tokens in cookies
4. Subsequent requests include the token for authentication

### 4. API Request Pattern

The frontend Next.js API routes act as proxies to the backend:

1. Frontend components call Next.js API routes (e.g., `/api/user/profile`)
2. Next.js API routes forward requests to the backend API with the auth token
3. Backend processes the request and returns data
4. Next.js API routes return the response to the frontend components

Example API route pattern:

```typescript
// app/api/user/profile/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookiesStore = await cookies();
    const accessToken = cookiesStore.get('accessToken')?.value;
    
    if (!accessToken) {
      return NextResponse.json(
        { success: false, message: 'Authentication required' },
        { status: 401 }
      );
    }
    
    const apiUrl = process.env.BACKEND_API_URL || 'http://localhost:5000/api';
    
    const response = await fetch(`${apiUrl}/users/profile`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
    });
    
    if (!response.ok) {
      // Handle error...
    }
    
    const data = await response.json();
    
    return NextResponse.json({
      success: true,
      data: data.data || null,
    });
    
  } catch (error) {
    // Handle error...
  }
}
```

### 5. Starting Both Services

To run both services together:

1. Start the backend:
   ```
   cd backend
   npm run dev
   ```

2. Start the frontend in a separate terminal:
   ```
   cd great-insure
   npm run dev
   ```

3. Access the frontend at `http://localhost:3000`

### 6. Testing the Integration

1. Try to log in from the frontend
2. Check that requests are properly forwarded to the backend
3. Verify that data is being fetched from Appwrite via the backend

## Troubleshooting

- **CORS errors**: Ensure the backend CORS settings allow requests from the frontend domain (`http://localhost:3000`)
- **Authentication issues**: Check that JWT tokens are being correctly exchanged and stored
- **404 errors**: Verify that API routes match between frontend and backend
- **Backend connection issues**: Make sure the backend server is running and accessible 