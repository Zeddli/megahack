"use client"

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useWallet } from '@/app/hooks/useWallet';

interface UserData {
  wallet: string;
  accountStatus: string;
  policies: number;
  totalCoverage: string;
}

export default function ProfilePage() {
  const { connected, address, connect, signMessage } = useWallet();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const fetchUserData: () => Promise<void> = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/user/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      if (!response.ok) {
        if (response.status === 401) {
          await handleWalletLogin();
          return;
        }
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      if (data.success) {
        setUserData(data.data);
      } else {
        throw new Error(data.message || 'Failed to fetch user data');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleWalletLogin: () => Promise<void> = useCallback(async () => {
    if (!address || !signMessage) return;
    try {
      setIsAuthenticating(true);
      setError(null);
      const message = `Sign this message to authenticate with Great Insure. Wallet: ${address}`;
      const signature = await signMessage(new TextEncoder().encode(message));
      const loginResponse = await fetch('/api/auth/wallet-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          walletAddress: address,
          message,
          signature: Buffer.from(signature).toString('hex'),
        }),
      });
      if (!loginResponse.ok) {
        throw new Error('Failed to authenticate with wallet');
      }
      await fetchUserData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to authenticate with wallet');
    } finally {
      setIsAuthenticating(false);
    }
  }, [address, signMessage, fetchUserData]);

  useEffect(() => {
    if (connected && address) {
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [connected, address, fetchUserData]);

  if (loading || isAuthenticating) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!connected) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black-900 mb-4">Connect Your Wallet</h2>
          <p className="text-black-600 mb-6">Please connect your wallet to view your profile</p>
          <button
            onClick={() => connect()}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-red-600 text-center">
          <p className="text-xl font-semibold mb-2">Error</p>
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-black-600 text-center">
          <p className="text-xl font-semibold">No Profile Data</p>
          <p>Your wallet is connected but no profile data was found</p>
          <button
            onClick={handleWalletLogin}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Sign Message to Authenticate
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Sticky Navigation Bar */}
      

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-black-900 mb-6">Account Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4">
                <span className="block text-black-500 text-sm mb-1">Wallet Address</span>
                <span className="font-mono text-base text-indigo-700 bg-indigo-50 px-2 py-1 rounded">{userData.wallet}</span>
              </div>
              <div className="mb-4">
                <span className="block text-black-500 text-sm mb-1">Account Status</span>
                <span className="font-semibold text-lg text-green-700">{userData.accountStatus}</span>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <span className="block text-black-500 text-sm mb-1">Active Policies</span>
                <span className="font-semibold text-lg text-black-900">{userData.policies}</span>
              </div>
              <div className="mb-4">
                <span className="block text-black-500 text-sm mb-1">Total Coverage</span>
                <span className="font-semibold text-lg text-green-700">{userData.totalCoverage}</span>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Sticky Footer */}
      <footer className="sticky bottom-0 z-20 bg-white border-t border-gray-200 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-black-500 text-sm">© 2024 Great Insure. All rights reserved.</span>
          <span className="text-black-400 text-xs">Powered by Solana</span>
        </div>
      </footer>
    </div>
  );
} 