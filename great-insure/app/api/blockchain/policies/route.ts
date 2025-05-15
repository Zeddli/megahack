import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from '@/app/lib/jwt';
import { fetchUserPolicies } from '@/app/lib/blockchain';

/**
 * GET /api/blockchain/policies
 * Retrieves all policies owned by the authenticated user
 */
export async function GET(request: NextRequest) {
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
    
    // 3. Fetch user policies from blockchain
    const policies = await fetchUserPolicies(walletAddress);
    
    // 4. Return the policies data
    return NextResponse.json({
      success: true,
      data: policies
    });
  } catch (error) {
    console.error('Error fetching user policies:', error);
    
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : 'Failed to fetch user policies'
    }, { status: 500 });
  }
} 