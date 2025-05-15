import { NextResponse } from 'next/server';
import { fetchRiskPools } from '@/app/lib/blockchain';

/**
 * GET /api/blockchain/risk-pools
 * Retrieves all available risk pools from the blockchain
 */
export async function GET() {
  try {
    const riskPools = await fetchRiskPools();
    
    return NextResponse.json({
      success: true,
      data: riskPools
    });
  } catch (error) {
    console.error('Error fetching risk pools:', error);
    
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : 'Failed to fetch risk pools'
    }, { status: 500 });
  }
} 