"use client";

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';

interface AuthGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * AuthGuard component that protects routes requiring wallet authentication
 * Uses the AuthContext to check authentication status
 */
export default function AuthGuard({ children, fallback }: AuthGuardProps) {
  const { isAuthenticated, loading, login } = useAuth();
  const pathname = usePathname();
  
  // If loading, show loading indicator or fallback
  if (loading) {
    return fallback || (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
        </div>
      </div>
    );
  }
  
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    // Redirect to login
    login(pathname);
    
    // Show loading while redirecting
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
        </div>
      </div>
    );
  }
  
  // If authenticated, render children
  return <>{children}</>;
} 