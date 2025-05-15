"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/navigation';

interface AuthState {
  isAuthenticated: boolean;
  walletAddress: string | null;
  loading: boolean;
  error: string | null;
}

interface AuthContextType extends AuthState {
  login: (redirectTo?: string) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { publicKey, connected } = useWallet();
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    walletAddress: null,
    loading: true,
    error: null,
  });

  // Check for existing authentication on mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = localStorage.getItem('authToken');
        const storedWalletAddress = localStorage.getItem('walletAddress');
        
        if (token && storedWalletAddress) {
          setAuthState({
            isAuthenticated: true,
            walletAddress: storedWalletAddress,
            loading: false,
            error: null,
          });
        } else {
          setAuthState({
            isAuthenticated: false,
            walletAddress: null,
            loading: false,
            error: null,
          });
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setAuthState({
          isAuthenticated: false,
          walletAddress: null,
          loading: false,
          error: 'Failed to check authentication status',
        });
      }
    };
    
    checkAuth();
  }, []);

  // Handle wallet connection changes
  useEffect(() => {
    if (connected && publicKey) {
      const walletAddress = publicKey.toBase58();
      const storedWalletAddress = localStorage.getItem('walletAddress');
      
      // If wallet connected matches stored wallet, consider authenticated
      if (storedWalletAddress === walletAddress) {
        setAuthState(prev => ({
          ...prev,
          walletAddress,
          isAuthenticated: true,
        }));
      }
    }
  }, [connected, publicKey]);

  // Redirect to wallet connect page
  const login = (redirectTo = '/dashboard') => {
    const encodedRedirect = encodeURIComponent(redirectTo);
    router.push(`/auth/wallet-connect?redirect=${encodedRedirect}`);
  };

  // Logout - clear auth data
  const logout = async () => {
    setAuthState({
      isAuthenticated: false,
      walletAddress: null,
      loading: true,
      error: null,
    });
    
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
      
      localStorage.removeItem('authToken');
      localStorage.removeItem('walletAddress');
      
      setAuthState(prev => ({
        ...prev,
        isAuthenticated: false,
        walletAddress: null,
        loading: false,
      }));
      
      router.push('/');
    } catch (error) {
      console.error('Error during logout:', error);
      setAuthState(prev => ({
        ...prev,
        error: 'Failed to logout properly',
        loading: false,
      }));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 