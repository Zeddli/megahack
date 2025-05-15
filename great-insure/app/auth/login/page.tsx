"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';
import PageLayout from '../../components/PageLayout';
import WalletButton from '../../components/WalletButton';
import { useCallback } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const { publicKey, connected, signMessage } = useWallet();
  
  // Error state
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Handle wallet login
  const handleWalletLogin = useCallback(async () => {
    if (!connected || !publicKey || !signMessage) {
      setError('Please connect your wallet first');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    try {
      // Call API to attempt wallet-only login
      const walletAddress = publicKey.toBase58();
      console.log('Attempting wallet login with address:', walletAddress);
      
      // 1. Get a nonce from the server
      const nonceResponse = await fetch('/api/auth/wallet-nonce');
      if (!nonceResponse.ok) {
        throw new Error('Failed to get authentication nonce');
      }
      
      const nonceData = await nonceResponse.json();
      const { message } = nonceData.data;
      
      // 2. Sign the message with wallet
      const encodedMessage = new TextEncoder().encode(message);
      const signatureBytes = await signMessage(encodedMessage);
      const signature = Buffer.from(signatureBytes).toString('hex');
      
      // 3. Verify the signature and get token
      const verifyResponse = await fetch('/api/auth/wallet-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          walletAddress,
          message,
          signature
        }),
      });
      
      if (!verifyResponse.ok) {
        const errorData = await verifyResponse.json();
        throw new Error(errorData.message || 'Wallet verification failed');
      }
      
      const authData = await verifyResponse.json();
      
      // 4. Store the auth token in localStorage (for client-side usage)
      if (authData.data?.token) {
        localStorage.setItem('authToken', authData.data.token);
      }
      localStorage.setItem('walletAddress', walletAddress);
      
      // 5. Redirect to dashboard
      const redirectTo = authData.data?.redirectTo || '/dashboard';
      router.push(redirectTo);
    } catch (error) {
      console.error('Wallet login error:', error);
      setError(
        error instanceof Error
          ? error.message
          : 'Wallet login failed'
      );
    } finally {
      setIsLoading(false);
    }
  }, [connected, publicKey, signMessage, router]);
  
  // Update when wallet connects
  useEffect(() => {
    if (connected && publicKey) {
      console.log('Wallet connected during login:', publicKey.toBase58());
      // Auto-login when wallet connects
      handleWalletLogin();
    }
  }, [connected, publicKey, handleWalletLogin]);
  
  return (
    <PageLayout>
      <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Connect Wallet to Login</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <div className="flex flex-col items-center justify-center mb-6">
          <WalletButton />
          
          {connected && publicKey && isLoading && (
            <div className="mt-4 text-blue-600">
              <p>Authenticating...</p>
            </div>
          )}
        </div>
        
        <div className="text-center text-sm text-black-600 mt-4">
          <p>Connect your wallet to access the platform</p>
          <p className="mt-2">No account creation needed</p>
        </div>
      </div>
    </PageLayout>
  );
} 