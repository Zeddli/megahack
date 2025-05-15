"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';

interface UserData {
  id: number;
  email: string;
  fullName?: string;
  phoneNumber?: string;
  walletAddress: string | null;
  isProfileComplete?: boolean;
}

interface UserDataContextType {
  userData: UserData | null;
  loading: boolean;
  error: string | null;
  refreshUserData: () => Promise<void>;
  updateUserData: (data: Partial<UserData>) => Promise<boolean>;
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

export function UserDataProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated, walletAddress } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch user data when authenticated
  const fetchUserData = async () => {
    if (!isAuthenticated || !walletAddress) {
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/user/profile', {
        cache: 'no-store',
        signal: AbortSignal.timeout(10000) // 10 second timeout
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to fetch user data');
      }
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to retrieve user data');
      }
      
      setUserData(data.data);
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError(err instanceof Error ? err.message : 'Could not load user profile');
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  // Refresh user data - expose this to consumers
  const refreshUserData = async () => {
    await fetchUserData();
  };

  // Update user data
  const updateUserData = async (data: Partial<UserData>): Promise<boolean> => {
    if (!isAuthenticated || !walletAddress) {
      setError('Authentication required to update profile');
      return false;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to update user data');
      }
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to update user data');
      }
      
      setUserData(result.data);
      return true;
    } catch (err) {
      console.error('Error updating user data:', err);
      setError(err instanceof Error ? err.message : 'Could not update user profile');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Fetch user data on mount or when authentication changes
  useEffect(() => {
    if (isAuthenticated) {
      fetchUserData();
    } else {
      setUserData(null);
    }
  }, [isAuthenticated, walletAddress]);

  return (
    <UserDataContext.Provider
      value={{
        userData,
        loading,
        error,
        refreshUserData,
        updateUserData,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
} 