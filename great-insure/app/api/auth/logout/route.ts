import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

/**
 * API route for logging out users
 * Handles clearing tokens and session data
 */
export async function POST() {
  try {
    // Get cookie store
    const cookieStore = await cookies();
    
    // Get access token for backend call
    const accessToken = cookieStore.get('accessToken')?.value;
    
    // Call backend if token exists to revoke it
    if (accessToken) {
      try {
        await fetch(`${process.env.BACKEND_API_URL}/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        console.error('Error revoking token on backend:', error);
        // Continue with client-side logout regardless of backend error
      }
    }
    
    // Clear cookies
    cookieStore.delete('accessToken');
    cookieStore.delete('refreshToken');
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Logged out successfully',
    });
  } catch (error) {
    console.error('Logout error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'An error occurred during logout' 
      },
      { status: 500 }
    );
  }
} 