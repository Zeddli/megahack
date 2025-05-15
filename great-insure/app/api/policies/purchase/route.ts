import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { mockDataStore } from '@/app/lib/mockData';

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;
    
    if (!accessToken) {
      return NextResponse.json(
        { success: false, message: 'Authentication required' },
        { status: 401 }
      );
    }

    const { riskPoolId, riskPoolName, coverageAmount, premiumAmount, contractAddress, txHash } = await request.json();

    if (!riskPoolId || !riskPoolName) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In a real implementation, we would verify the wallet signature here
    // For now, we'll just use a mock wallet address
    const walletAddress = '8dRGxRZYGZ71qt4zQAXVJNfQvTercVGPNHbyt3umaovm';

    // Add the policy and transaction to our mock data store
    const { policy, transaction } = mockDataStore.addPolicy(
      walletAddress,
      riskPoolId,
      riskPoolName,
      coverageAmount,
      premiumAmount,
      contractAddress,
      txHash
    );

    return NextResponse.json({
      success: true,
      data: {
        policy,
        transaction
      }
    });
  } catch (error) {
    console.error('Policy purchase error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'Failed to purchase policy'
      },
      { status: 500 }
    );
  }
} 