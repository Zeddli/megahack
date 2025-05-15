"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';
import PageLayout from '../../components/PageLayout';
import WalletButton from '../../components/WalletButton';

export default function WalletConnectPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { publicKey, connected, signMessage } = useWallet();
  
  // Get the redirect path from the URL query parameter or use dashboard as default
  const redirectPath = searchParams.get('redirect') || '/dashboard';
  
  // State
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  
  // Check if user is already authenticated
  useEffect(() => {
    const checkExistingAuth = () => {
      try {
        const token = localStorage.getItem('authToken');
        const walletAddress = localStorage.getItem('walletAddress');
        
        // If already authenticated, redirect to the intended page
        if (token && walletAddress) {
          console.log('User already authenticated, redirecting to:', redirectPath);
          router.push(redirectPath);
          return true;
        }
        return false;
      } catch (error) {
        console.error('Error checking authentication:', error);
        return false;
      } finally {
        setCheckingAuth(false);
      }
    };
    
    // Run the check
    checkExistingAuth();
  }, [router, redirectPath]);
  
  // Update when wallet connects
  useEffect(() => {
    if (connected && publicKey && !checkingAuth) {
      console.log('Wallet connected:', publicKey.toBase58());
      // Auto-authenticate when wallet connects
      handleWalletAuth();
    }
  }, [connected, publicKey, checkingAuth]);
  
  // Handle wallet authentication
  const handleWalletAuth = async () => {
    if (!connected || !publicKey || !signMessage) {
      setError('Please connect your wallet first');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    try {
      const walletAddress = publicKey.toBase58();
      console.log('Authenticating with wallet:', walletAddress);
      
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
      
      console.log('Sending signature to server:', {
        walletAddress,
        message,
        signatureLength: signature.length
      });
      
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
        console.error('Server verification error:', errorData);
        throw new Error(errorData.message || 'Wallet verification failed');
      }
      
      const authData = await verifyResponse.json();
      console.log('Authentication successful:', authData);
      
      // 4. Store the auth token in localStorage
      if (authData.data?.token) {
        localStorage.setItem('authToken', authData.data.token);
      }
      localStorage.setItem('walletAddress', walletAddress);
      
      // 5. Redirect to the intended destination
      console.log('Redirecting to:', redirectPath);
      router.push(redirectPath);
    } catch (error) {
      console.error('Wallet authentication error:', error);
      setError(
        error instanceof Error
          ? error.message
          : 'Authentication failed'
      );
    } finally {
      setIsLoading(false);
    }
  };
  
  // Show loading state while checking authentication
  if (checkingAuth) {
    return (
      <PageLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Checking authentication status...</p>
          </div>
        </div>
      </PageLayout>
    );
  }
  
  return (
    <PageLayout>
      <div className="max-w-md mx-auto my-10">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Connect Your Wallet</h1>
            <p className="text-gray-600">Access the platform with your crypto wallet</p>
          </div>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}
          
          <div className="flex flex-col items-center justify-center mb-8">
            <WalletButton />
            
            {connected && publicKey && isLoading && (
              <div className="mt-6 text-blue-600 flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Authenticating...</span>
              </div>
            )}
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <div className="text-center text-sm text-gray-600">
              <p className="mb-2">By connecting your wallet, you agree to our</p>
              <div className="flex justify-center space-x-4">
                <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a>
                <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">Why use a wallet?</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Enhanced Security</h3>
                <p className="text-sm text-gray-600">Your private key never leaves your device</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">One-Click Access</h3>
                <p className="text-sm text-gray-600">No passwords to remember or reset</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Access Your Assets</h3>
                <p className="text-sm text-gray-600">Manage your digital assets in one place</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 