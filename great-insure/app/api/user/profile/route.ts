import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from '@/app/lib/jwt';
import { cookies } from 'next/headers';

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
export async function GET() {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;
    
    if (!accessToken) {
      return NextResponse.json(
        { success: false, message: 'Authentication required' },
        { status: 401 }
      );
    }
    
    const apiUrl = process.env.BACKEND_API_URL || 'http://localhost:3001/api';
    
    try {
      // Fetch user profile from backend
      const response = await fetch(`${apiUrl}/users/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          return NextResponse.json(
            { success: false, message: 'Authentication required' },
            { status: 401 }
          );
        }
        throw new Error(`Backend responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      return NextResponse.json(data);
      
    } catch (error) {
      console.error('Backend connection error:', error);
      
      // Return mock data if backend is not available
      return NextResponse.json({
        success: true,
        data: {
          wallet: '8dRGxRZYGZ71qt4zQAXVJNfQvTercVGPNHbyt3umaovm',
          accountStatus: 'Active',
          policies: 3,
          totalCoverage: '4,500 SOL'
        }
      });
    }
    
  } catch (error) {
    console.error('Profile fetch error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'An error occurred while fetching profile data'
      },
      { status: 500 }
    );
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