import { NextRequest, NextResponse } from 'next/server';
import { jwtSign } from '@/app/lib/jwt';
import * as nacl from 'tweetnacl';
import { PublicKey } from '@solana/web3.js';
import { mockDataStore } from '@/app/lib/mockData';

/**
 * API route for wallet-only authentication
 * Allows users to log in using only their connected wallet address
 */
export async function POST(request: NextRequest) {
  try {
    console.log('Wallet login request received in Next.js API route');
    
    const { walletAddress, message, signature } = await request.json();
    
    // Validate inputs
    if (!walletAddress) {
      console.error('Wallet address is required');
      return NextResponse.json(
        { success: false, message: 'Wallet address is required' },
        { status: 400 }
      );
    }
    
    // Clear any existing mock data for this wallet
    mockDataStore.clearUserData(walletAddress);
    
    // If this is just a mock data clear request (no signature provided)
    if (!signature || signature === 'mock-signature') {
      return NextResponse.json({
        success: true,
        message: 'Mock data cleared successfully',
        data: {
          walletAddress
        }
      });
    }
    
    // Otherwise, proceed with normal authentication
    if (!message) {
      return NextResponse.json(
        { success: false, message: 'Message is required for authentication' },
        { status: 400 }
      );
    }
    
    try {
      // Verify the signature
      console.log('Verifying Solana signature for wallet:', walletAddress);
      
      let isValidSignature = false;
      try {
        // Convert signature from hex to Uint8Array
        const signatureUint8 = hexToUint8Array(signature);
        
        // Create message Uint8Array
        const messageUint8 = new TextEncoder().encode(message);
        
        // Get PublicKey from wallet address
        const publicKey = new PublicKey(walletAddress);
        const publicKeyBytes = publicKey.toBytes();
        
        // Verify signature using nacl
        isValidSignature = nacl.sign.detached.verify(
          messageUint8,
          signatureUint8,
          publicKeyBytes
        );
        
        console.log('Signature verification result:', isValidSignature);
      } catch (error) {
        console.error('Error verifying message signature:', error);
        return NextResponse.json(
          { success: false, message: 'Invalid signature format' },
          { status: 400 }
        );
      }
      
      if (!isValidSignature) {
        console.error('Signature verification failed');
        return NextResponse.json(
          { success: false, message: 'Invalid signature' },
          { status: 401 }
        );
      }
      
      console.log('Signature verified successfully, generating tokens');
      
      // Generate JWT tokens for authentication
      const accessToken = jwtSign(
        { walletAddress, type: 'access' },
        { expiresIn: '1h' }
      );
      
      const refreshToken = jwtSign(
        { walletAddress, type: 'refresh' },
        { expiresIn: '30d' }
      );
      
      // Set cookies with proper security settings
      const cookies = NextResponse.json({
        success: true,
        message: 'Logged in successfully with wallet',
        data: {
          token: accessToken,
          user: {
            walletAddress
          },
          redirectTo: '/dashboard'
        }
      });
      
      // Store the access token
      cookies.cookies.set('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60, // 1 hour
        path: '/',
      });
      
      // Store the refresh token
      cookies.cookies.set('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      });
      
      // Also store the wallet address in a cookie for easy access
      cookies.cookies.set('walletAddress', walletAddress, {
        httpOnly: false, // Allow JavaScript to read this cookie
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60, // 1 hour
        path: '/',
      });
      
      console.log('Login successful, returning response with cookies and redirect to dashboard');
      return cookies;
    } catch (error) {
      console.error('Error during wallet authentication:', error);
      
      return NextResponse.json(
        { 
          success: false, 
          message: 'Error during wallet authentication. Please try again later.'
        },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error('Wallet login error:', error);
    
    if (error && typeof error === 'object' && 'stack' in error) {
      console.error('Error stack:', (error as { stack?: string }).stack);
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'An error occurred during wallet login' 
      },
      { status: 500 }
    );
  }
}

/**
 * Helper function to convert hex string to Uint8Array
 */
function hexToUint8Array(hex: string): Uint8Array {
  if (hex.startsWith('0x')) {
    hex = hex.substring(2);
  }
  
  if (hex.length % 2 !== 0) {
    throw new Error('Invalid hex string');
  }
  
  const result = new Uint8Array(hex.length / 2);
  
  for (let i = 0; i < hex.length; i += 2) {
    result[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  
  return result;
} 