import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from '@/app/lib/jwt';
import { PublicKey } from '@solana/web3.js';
import { purchasePolicy } from '@/app/lib/blockchain';

/**
 * POST /api/blockchain/purchase-policy
 * Creates a transaction to purchase a new policy from a risk pool
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
    
    // 3. Get policy purchase parameters from request body
    const { riskPoolAddress, coverageAmount, durationDays } = await request.json();
    
    // 4. Validate required fields
    if (!riskPoolAddress) {
      return NextResponse.json({
        success: false,
        message: 'Risk pool address is required',
      }, { status: 400 });
    }
    
    if (!coverageAmount || typeof coverageAmount !== 'number' || coverageAmount <= 0) {
      return NextResponse.json({
        success: false,
        message: 'Valid coverage amount is required',
      }, { status: 400 });
    }
    
    if (!durationDays || typeof durationDays !== 'number' || durationDays <= 0) {
      return NextResponse.json({
        success: false,
        message: 'Valid duration in days is required',
      }, { status: 400 });
    }
    
    // 5. Create policy purchase transaction
    const { transaction, policyAddress } = await purchasePolicy(
      new PublicKey(walletAddress),
      riskPoolAddress,
      coverageAmount,
      durationDays
    );
    
    // 6. Convert transaction to serialized format for client processing
    const serializedTransaction = Buffer.from(
      transaction.serialize({
        requireAllSignatures: false,
        verifySignatures: false
      })
    ).toString('base64');
    
    // 7. Return transaction for signing by client
    return NextResponse.json({
      success: true,
      data: {
        serializedTransaction,
        policyAddress
      },
      message: 'Policy purchase transaction created successfully'
    });
  } catch (error) {
    console.error('Error creating policy purchase transaction:', error);
    
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : 'Failed to create policy purchase transaction'
    }, { status: 500 });
  }
} 