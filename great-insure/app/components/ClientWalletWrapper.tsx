"use client";

import dynamic from 'next/dynamic';
import { ReactNode, useState, useEffect } from 'react';

// Dynamically import the WalletContextProvider with no SSR to fix hydration errors
const WalletContextProviderNoSSR = dynamic(
  () => import('./WalletContextProvider'),
  { 
    ssr: false,
    loading: () => <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary"></div>
    </div>
  }
);

interface ClientWalletWrapperProps {
  children: ReactNode;
}

// Define wallet provider interface
interface WalletProvider {
  connect: () => Promise<unknown>;
  disconnect: () => Promise<void>;
  // Add other properties as needed
}

// Define interfaces for wallet objects without modifying Window
interface PhantomWallet {
  solana?: WalletProvider;
}

// Interface for window with phantom property
interface WindowWithPhantom extends Window {
  phantom?: PhantomWallet;
}

export default function ClientWalletWrapper({ children }: ClientWalletWrapperProps) {
  const [mounted, setMounted] = useState(false);
  const [hasWallet, setHasWallet] = useState<boolean | null>(null);
  const [walletName, setWalletName] = useState<string | null>(null);

  // Ensure component is mounted to prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if wallet exists in the browser
  useEffect(() => {
    const checkWalletExists = () => {
      if (typeof window === 'undefined') return;
      
      // List of potential wallet objects to check
      const walletNames = ['phantom', 'solflare', 'solana'];
      let walletFound = false;
      let detectedWalletName = null;
      
      // Check for each wallet
      for (const name of walletNames) {
        if ((window as WindowWithPhantom)[name as keyof WindowWithPhantom]) {
          walletFound = true;
          detectedWalletName = name;
          console.log(`Found wallet: ${name}`);
          break;
        }
      }
      // Also check window.solana
      if (!walletFound && (window as WindowWithPhantom).solana) {
        walletFound = true;
        detectedWalletName = 'solana';
        console.log('Found window.solana wallet');
      }
      
      setHasWallet(walletFound);
      setWalletName(detectedWalletName);
      
      if (!walletFound) {
        console.log('No Solana wallet provider found.');
      }
    };
    
    if (mounted) {
      try {
        checkWalletExists();
      } catch (error) {
        console.error("Error checking wallet:", error);
        setHasWallet(false);
      }
    }
  }, [mounted]);

  // Only render once mounted to prevent hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <WalletContextProviderNoSSR>
      {hasWallet === false && (
        <div className="bg-yellow-100 text-yellow-800 p-2 text-xs rounded mb-2 max-w-xs mx-auto text-center">
          Wallet not detected. Click &quot;Connect Wallet&quot; to install.
        </div>
      )}
      {walletName && (
        <div className="bg-green-100 text-green-800 p-2 text-xs rounded mb-2 max-w-xs mx-auto text-center">
          {walletName} wallet detected
        </div>
      )}
      {children}
    </WalletContextProviderNoSSR>
  );
} 