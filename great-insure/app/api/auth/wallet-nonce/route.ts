import { NextResponse } from 'next/server';
import crypto from 'crypto';

/**
 * Generate a nonce for wallet signature verification
 * The nonce is used as part of the message that will be signed by the wallet
 */
export async function GET() {
  try {
    // Generate a random nonce
    const nonce = crypto.randomBytes(16).toString('hex');
    // Create the message to be signed
    const message = `Farm Protection Authentication - Nonce: ${nonce} - Timestamp: ${Date.now()}`;
    
    // Store the nonce in a cookie for verification later
    // This is needed because we need to verify the same nonce when the signature is submitted
    const response = NextResponse.json({
      success: true,
      data: {
        nonce,
        message
      }
    });
    
    // Set a cookie with the nonce
    response.cookies.set('auth_nonce', nonce, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 300, // 5 minutes
      path: '/',
    });
    
    return response;
  } catch (error) {
    console.error('Error generating nonce:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'Error generating authentication nonce'
      },
      { status: 500 }
    );
  }
} 