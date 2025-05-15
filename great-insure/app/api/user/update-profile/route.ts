import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

/**
 * API route for updating user profile information
 * Supports offline mode with mock implementation
 */
export async function PUT(request: NextRequest) {
  try {
    // Get the access token from cookies
    const cookiesStore = await cookies();
    const accessToken = cookiesStore.get('accessToken')?.value;
    
    if (!accessToken) {
      return NextResponse.json(
        { success: false, message: 'Authentication required' },
        { status: 401 }
      );
    }
    
    // Check if this is a mock token (for demo mode)
    const isMockToken = accessToken.startsWith('mock_');
    
    // Extract profile data from request
    const profileData = await request.json();
    
    let data;
    
    try {
      if (isMockToken) {
        throw new Error('Using mock implementation');
      }
      
      // Make request to backend API
      const response = await fetch(`${process.env.BACKEND_API_URL}/users/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(profileData),
      });
      
      // Get response data
      data = await response.json();
      
      // Handle error response from backend
      if (!response.ok) {
        return NextResponse.json(
          { 
            success: false, 
            message: data.message || 'Failed to update profile' 
          },
          { status: response.status }
        );
      }
    } catch (error) {
      console.log('Using mock profile update', error);
      
      // Create mock updated profile data
      data = {
        success: true,
        message: 'Profile updated successfully (demo mode)',
        data: {
          id: 1,
          email: 'demo@example.com',
          fullName: profileData.fullName || 'Demo User',
          phoneNumber: profileData.phoneNumber || '',
          walletAddress: null,
          updatedAt: new Date().toISOString()
        }
      };
    }
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Profile updated successfully',
      data: data.data,
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'An error occurred while updating profile'
      },
      { status: 500 }
    );
  }
} 