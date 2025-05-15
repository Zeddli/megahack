"use client";

import React, { FC, ReactNode, useMemo, useState, useEffect, Component, ErrorInfo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';
import { 
  PhantomWalletAdapter, 
  SolflareWalletAdapter, 
  TorusWalletAdapter,
  UnsafeBurnerWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

// Import the styles for the wallet adapter
import '@solana/wallet-adapter-react-ui/styles.css';

// Error Boundary Component to catch wallet errors
class WalletErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean, errorMessage: string}> {
  constructor(props: {children: ReactNode}) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Wallet error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 text-red-700 rounded-md">
          <h3 className="font-bold mb-2">Wallet Error</h3>
          <p>{this.state.errorMessage || 'An error occurred in the wallet integration'}</p>
          <button 
            className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            onClick={() => this.setState({ hasError: false, errorMessage: '' })}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

interface WalletContextProviderProps {
  children: ReactNode;
}

/**
 * Provides Solana wallet connectivity to the application.
 * Wraps the application with all the necessary providers for wallet functionality.
 */
const WalletContextProvider: FC<WalletContextProviderProps> = ({ children }) => {
  // Track if component is mounted to avoid React hydration issues
  const [mounted, setMounted] = useState(false);
  const [walletError, setWalletError] = useState<string | null>(null);

  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'

  // Get the Solana cluster endpoint URL
  const endpoint = useMemo(() => 'https://api.devnet.solana.com', []);

  // Create a pre-initialized connection to check RPC connectivity
  useEffect(() => {
    const checkConnection = async () => {
      try {
        const connection = new Connection(endpoint, 'confirmed');
        const version = await connection.getVersion();
        console.log('Connected to Solana RPC:', endpoint);
        console.log('Solana version:', version);
      } catch (error) {
        console.error('Error connecting to Solana RPC:', error);
        setWalletError(`Error connecting to Solana network: ${(error as Error).message || 'Unknown error'}`);
      }
    };

    checkConnection();
  }, [endpoint]);

  // Set up supported wallet adapters - initialize outside try/catch to avoid React rules of hooks issues
  const wallets = useMemo(() => {
    try {
      // Create a burner wallet for development testing
      const adapters = [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter(),
        new TorusWalletAdapter(),
        new UnsafeBurnerWalletAdapter() // This is just for testing, unsafe for production
      ];
      
      console.log('Wallet adapters initialized:', adapters.map(a => a.name).join(', '));
      return adapters;
    } catch (error) {
      console.error('Error initializing wallet adapters:', error);
      setWalletError('Failed to initialize wallet adapters');
      return [];
    }
  }, []);
  
  // Only render UI after component has mounted to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // If there's a wallet error, display it
  if (walletError) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded-md">
        <h3 className="font-bold mb-2">Wallet Error</h3>
        <p>{walletError}</p>
        <button 
          className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={() => setWalletError(null)}
        >
          Dismiss
        </button>
      </div>
    );
  }

  // Return the providers only when mounted to avoid hydration errors
  return (
    <WalletErrorBoundary>
      <ConnectionProvider 
        endpoint={endpoint} 
        config={{ commitment: 'confirmed' }}
      >
        <WalletProvider 
          wallets={wallets} 
          autoConnect={false}
          onError={(error) => {
            console.error('Wallet provider error:', error);
            setWalletError(error.message);
          }}
        >
          <WalletModalProvider>
            {/* Only render children after the component is mounted */}
            {mounted ? children : 
              <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
              </div>
            }
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </WalletErrorBoundary>
  );
};

export default WalletContextProvider; 