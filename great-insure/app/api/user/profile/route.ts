import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from '@/app/lib/jwt';

// In-memory user database with default mock data for demonstration
const mockUsers = new Map([
  ['8dRGxRZYGZ71qt4zQAXVJNfQvTercVGPNHbyt3umaovm', {
    id: 1,
    email: 'john.doe@example.com',
    fullName: 'John Doe',
    phoneNumber: '+1234567890',
    walletAddress: '8dRGxRZYGZ71qt4zQAXVJNfQvTercVGPNHbyt3umaovm',
    isProfileComplete: true,
  }],
]);

/**
 * GET /api/user/profile
 * Retrieves the user profile information based on wallet authentication
 */
export async function GET(request: NextRequest) {
  try {
    // 1. Get the token from cookies or authorization header
    const authToken = request.cookies.get('accessToken')?.value || 
      request.headers.get('Authorization')?.replace('Bearer ', '') ||
      '';
    
    if (!authToken) {
      // Try to get from cookie store 
      return NextResponse.json({
        success: false,
        message: 'Authentication required',
      }, { status: 401 });
    }
    
    // 2. Verify the JWT token
    const payload = jwtVerify(authToken);
    if (!payload || typeof payload === 'string' || !payload.walletAddress) {
      return NextResponse.json({
        success: false, 
        message: 'Invalid authentication token',
      }, { status: 401 });
    }
    
    const { walletAddress } = payload;
    
    // 3. Get the user data for the wallet address
    // In a real app, this would query a database
    let userData = mockUsers.get(walletAddress);
    
    // If user doesn't exist in our mock database, create a minimal record
    if (!userData) {
      userData = {
        id: Date.now(),
        email: '', // Empty email as we only have wallet auth
        fullName: '',
        phoneNumber: '',
        walletAddress,
        isProfileComplete: false,
      };
      
      // Store in our mock database
      mockUsers.set(walletAddress, userData);
    }
    
    // 4. Return the user data
    return NextResponse.json({
      success: true,
      data: userData,
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : 'Failed to fetch user profile',
    }, { status: 500 });
  }
}

/**
 * POST /api/user/profile
 * Updates the user profile information
 */
export async function POST(request: NextRequest) {
  try {
    // 1. Get the token from cookies or authorization header
    const authToken = request.cookies.get('accessToken')?.value || 
      request.headers.get('Authorization')?.replace('Bearer ', '') ||
      '';
    
    if (!authToken) {
      return NextResponse.json({
        success: false,
        message: 'Authentication required',
      }, { status: 401 });
    }
    
    // 2. Verify the JWT token
    const payload = jwtVerify(authToken);
    if (!payload || typeof payload === 'string' || !payload.walletAddress) {
      return NextResponse.json({
        success: false, 
        message: 'Invalid authentication token',
      }, { status: 401 });
    }
    
    const { walletAddress } = payload;
    
    // 3. Get the user data from the request body
    const updateData = await request.json();
    
    // 4. Get existing user or create a new one
    let userData = mockUsers.get(walletAddress);
    if (!userData) {
      userData = {
        id: Date.now(),
        email: '',
        fullName: '',
        phoneNumber: '',
        walletAddress,
        isProfileComplete: false,
      };
    }
    
    // 5. Update the user data
    const updatedUserData = {
      ...userData,
      ...updateData,
      walletAddress, // Ensure wallet address remains unchanged
      isProfileComplete: !!(updateData.fullName || userData.fullName),
    };
    
    // 6. Store the updated user data
    mockUsers.set(walletAddress, updatedUserData);
    
    // 7. Return the updated user data
    return NextResponse.json({
      success: true,
      data: updatedUserData,
      message: 'Profile updated successfully',
    });
  } catch (error) {
    console.error('Error updating user profile:', error);
    
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : 'Failed to update user profile',
    }, { status: 500 });
  }
} 