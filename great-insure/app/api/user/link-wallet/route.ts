import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from '@/app/lib/jwt';

// Reference to the mock users database from profile route
// In a real app, this would be a database
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
 * POST /api/user/link-wallet
 * Links a wallet address to the authenticated user
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
    
    // 2. Verify the JWT token to get the current wallet
    const payload = jwtVerify(authToken);
    if (!payload || typeof payload === 'string' || !payload.walletAddress) {
      return NextResponse.json({
        success: false, 
        message: 'Invalid authentication token',
      }, { status: 401 });
    }
    
    const { walletAddress: currentWallet } = payload;
    
    // 3. Get the new wallet address from the request body
    const { walletAddress: newWalletAddress } = await request.json();
    
    if (!newWalletAddress) {
      return NextResponse.json({
        success: false,
        message: 'Wallet address is required',
      }, { status: 400 });
    }
    
    // 4. Get the user data
    let userData = mockUsers.get(currentWallet);
    
    // If the user doesn't exist, create a new one
    if (!userData) {
      userData = {
        id: Date.now(),
        email: '',
        fullName: '',
        phoneNumber: '',
        walletAddress: currentWallet,
        isProfileComplete: false,
      };
    }
    
    // 5. Update the wallet address
    userData = {
      ...userData,
      walletAddress: newWalletAddress,
    };
    
    // 6. If this was a real app, we'd need to verify the new wallet's ownership
    // Here we're just updating the record directly
    
    // 7. Remove the old wallet record and add the new one
    mockUsers.delete(currentWallet);
    mockUsers.set(newWalletAddress, userData);
    
    // 8. Return the updated user data
    return NextResponse.json({
      success: true,
      data: userData,
      message: 'Wallet linked successfully',
    });
  } catch (error) {
    console.error('Error linking wallet:', error);
    
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : 'Failed to link wallet',
    }, { status: 500 });
  }
} 