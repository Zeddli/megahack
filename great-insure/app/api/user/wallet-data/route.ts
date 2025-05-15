import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

/**
 * API route for fetching wallet-related data for a user
 * Integrates on-chain data with database records
 */
export async function GET() {
  try {
    // Check if user is authenticated by reading token from cookie
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;
    
    if (!token) {
      return NextResponse.json({ 
        success: false, 
        message: 'Authentication required' 
      }, { 
        status: 401 
      });
    }
    
    // Make request to API
    // In a real application, you would fetch this from a real API
    
    // Use the backend API URL from environment variable or default to the API endpoint
    const apiUrl = process.env.BACKEND_API_URL || 'https://api.farm-protection.io/v1';
    
    const response = await fetch(`${apiUrl}/user/wallet-data`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    
    if (!response.ok) {
      throw new Error(`Server error (${response.status}) when fetching wallet data.`);
    }
    
    const data = await response.json();
    
    return NextResponse.json({
      success: true,
      data: data.data,
    });
  } catch (error) {
    console.error('Error fetching wallet data:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'Failed to fetch wallet data' 
      },
      { status: 500 }
    );
  }
} 