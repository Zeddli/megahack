import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { mockDataStore } from '@/app/lib/mockData';

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

    // In a real implementation, we would get the wallet address from the token
    // For now, we'll just use a mock wallet address
    const walletAddress = '8dRGxRZYGZ71qt4zQAXVJNfQvTercVGPNHbyt3umaovm';

    const transactions = mockDataStore.getTransactions(walletAddress);

    return NextResponse.json({
      success: true,
      data: transactions
    });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'Failed to fetch transactions'
      },
      { status: 500 }
    );
  }
} 