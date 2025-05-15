import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from '@/app/lib/jwt';
import { checkPolicyClaimEligibility, fetchUserPolicies } from '@/app/lib/blockchain';

/**
 * POST /api/blockchain/check-claim-eligibility
 * Checks if a policy is eligible for claim based on oracle data
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
    
    // 3. Get policy address from request body
    const { policyAddress } = await request.json();
    
    if (!policyAddress) {
      return NextResponse.json({
        success: false,
        message: 'Policy address is required',
      }, { status: 400 });
    }
    
    // 4. Verify policy ownership (this would normally be done on-chain)
    const userPolicies = await fetchUserPolicies(walletAddress);
    const ownedPolicy = userPolicies.find(policy => policy.address === policyAddress);
    
    if (!ownedPolicy) {
      return NextResponse.json({
        success: false,
        message: 'Policy not found or not owned by the authenticated user',
      }, { status: 404 });
    }
    
    // 5. Check policy claim eligibility
    const eligibility = await checkPolicyClaimEligibility(policyAddress);
    
    // 6. Return eligibility result
    return NextResponse.json({
      success: true,
      data: eligibility
    });
  } catch (error) {
    console.error('Error checking policy claim eligibility:', error);
    
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : 'Failed to check policy claim eligibility'
    }, { status: 500 });
  }
} 