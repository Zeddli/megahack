"use client";

import React, { FC, useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import WalletButton from './WalletButton';
import ProfileCompletion from './ProfileCompletion';

interface UserData {
  id: number;
  email: string;
  fullName?: string;
  phoneNumber?: string;
  walletAddress: string | null;
  isProfileComplete?: boolean;
}

interface UserInfoProps {
  hideAuthErrors?: boolean;
}

/**
 * Component that displays user information and wallet connection status
 * Also provides functionality to link a wallet to a user account
 */
const UserInfo: FC<UserInfoProps> = ({ hideAuthErrors = true }) => {
  const { publicKey, connected } = useWallet();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [linkingWallet, setLinkingWallet] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showProfileCompletion, setShowProfileCompletion] = useState(false);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('Fetching user profile data...');
        
        const response = await fetch('/api/user/profile', {
          // Add cache: 'no-store' to prevent caching issues
          cache: 'no-store',
          // Add a timeout to prevent hanging requests
          signal: AbortSignal.timeout(10000) // 10 second timeout
        });
        
        console.log('Profile API response status:', response.status);
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error('Error response:', errorData);
          
          // Provide specific error messages based on HTTP status code
          if (response.status === 401) {
            throw new Error('Authentication required. Please log in again.');
          } else if (response.status === 404) {
            throw new Error('User profile not found. Please complete registration.');
          } else if (response.status === 500) {
            throw new Error('Server error with Appwrite connection. Please try again later.');
          } else {
            throw new Error(errorData.message || 'Failed to fetch user data');
          }
        }
        
        const data = await response.json();
        console.log('Profile data received:', data.success);
        
        if (!data.success) {
          throw new Error(data.message || 'Failed to retrieve user data');
        }
        
        setUserData(data.data);
        
        // Check if profile needs to be completed
        // If fullName is missing, the profile is incomplete
        if (data.data && (!data.data.fullName || data.data.fullName.trim() === '')) {
          setShowProfileCompletion(true);
        } else {
          setShowProfileCompletion(false);
        }
      } catch (err) {
        console.error('Error fetching user data:', err);
        if (err instanceof DOMException && err.name === 'AbortError') {
          setError('Request timed out. Appwrite server may be unreachable.');
        } else {
          setError(err instanceof Error ? err.message : 'Could not load user profile');
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserData();
  }, []);

  // Handle linking wallet to user account
  const handleLinkWallet = async () => {
    if (!connected || !publicKey) {
      setError('Please connect your wallet first');
      return;
    }
    
    try {
      setLinkingWallet(true);
      setError(null);
      
      try {
        const response = await fetch('/api/user/link-wallet', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            walletAddress: publicKey.toBase58(),
          }),
          signal: AbortSignal.timeout(10000) // 10 second timeout
        });
        
        // Process the response if fetch succeeded
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Failed to link wallet');
        }
        
        setUserData(data.data);
        setSuccessMessage(data.message || 'Wallet linked successfully!');
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      } catch (fetchError) {
        // Handle both network errors and API errors
        console.error('Error with fetch operation:', fetchError);
        
        if (fetchError instanceof TypeError && fetchError.message.includes('fetch failed')) {
          throw new Error('Network error: Cannot connect to server. Please try again later.');
        } else if (fetchError instanceof DOMException && fetchError.name === 'AbortError') {
          throw new Error('Request timed out. Server may be unreachable.');
        } else {
          throw fetchError; // Pass other errors to the outer catch
        }
      }
    } catch (err) {
      console.error('Error linking wallet:', err);
      setError(err instanceof Error ? err.message : 'Failed to link wallet');
    } finally {
      setLinkingWallet(false);
    }
  };

  const handleProfileCompletion = () => {
    setShowProfileCompletion(false);
    // Refresh user data
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user/profile', {
          cache: 'no-store',
          signal: AbortSignal.timeout(10000)
        });
        
        if (response.ok) {
          const data = await response.json();
          setUserData(data.data);
        }
      } catch (error) {
        console.error('Error refreshing user data:', error);
      }
    };
    fetchUserData();
  };

  if (loading) {
    return <div className="text-center py-8">Loading user information...</div>;
  }

  // If no user data but we're hiding auth errors (when using inside AuthGuard),
  // show a better fallback instead of the auth error
  if (!userData) {
    if (hideAuthErrors) {
      return (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
          <div className="text-center py-4">
            <p>Loading profile information...</p>
            <p className="text-sm text-gray-500 mt-2">Please make sure your wallet is connected.</p>
          </div>
        </div>
      );
    }
    
    // Only show the error if we're not hiding auth errors
    return (
      <div className="text-center py-8 text-red-600">
        {error || 'User not found. Please log in.'}
      </div>
    );
  }

  // If user profile is incomplete, show the profile completion form
  if (showProfileCompletion) {
    return <ProfileCompletion userData={userData} onComplete={handleProfileCompletion} />;
  }

  const walletLinked = userData.walletAddress !== null;
  const isCurrentWallet = connected && publicKey && userData.walletAddress === publicKey.toBase58();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
          {successMessage}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-500">Full Name</label>
          <div className="mt-1 text-lg">{userData.fullName}</div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-500">Email</label>
          <div className="mt-1 text-lg">{userData.email}</div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-500">Phone Number</label>
          <div className="mt-1 text-lg">{userData.phoneNumber || 'Not provided'}</div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-4 mt-4">
        <h3 className="text-xl font-semibold mb-3">Wallet Information</h3>
        
        {walletLinked ? (
          <div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-500 mr-2">Linked Wallet:</span>
              <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-md">
                {userData.walletAddress}
              </span>
            </div>
            
            {isCurrentWallet ? (
              <div className="mt-2 text-green-600 text-sm">
                ✓ This is your currently connected wallet
              </div>
            ) : (
              <div className="mt-4">
                <p className="text-yellow-600 mb-2">
                  Your currently connected wallet does not match your account wallet.
                </p>
                <WalletButton />
              </div>
            )}
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-3">
              No wallet linked to your account. Link a wallet to enable blockchain features.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <WalletButton />
              
              {connected && publicKey && (
                <button
                  onClick={handleLinkWallet}
                  disabled={linkingWallet}
                  className={`px-4 py-2 rounded-md ${
                    linkingWallet
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  } transition-colors`}
                >
                  {linkingWallet ? 'Linking...' : 'Link This Wallet to Your Account'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo; 