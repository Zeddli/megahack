"use client";

import { FC, useCallback, useMemo, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

/**
 * Enhanced wallet connection button with additional functionality
 * Provides wallet connection, disconnection, and displays wallet information
 */
const WalletButton: FC = () => {
  const { publicKey, disconnect, connecting } = useWallet();
  const [error, setError] = useState<string | null>(null);

  // Format the wallet address for display
  const formattedAddress = useMemo(() => {
    if (!publicKey) return '';
    const address = publicKey.toBase58();
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  }, [publicKey]);

  // Handle manual wallet disconnection
  const handleDisconnect = useCallback(async () => {
    try {
      setError(null);
      await disconnect();
    } catch (err) {
      console.error('Error disconnecting wallet:', err);
      setError('Failed to disconnect wallet');
    }
  }, [disconnect]);

  // Clear error on new renders
  if (error && (connecting || publicKey)) {
    setError(null);
  }

  return (
    <div className="flex items-center flex-col">
      {error && (
        <div className="mb-2 text-xs text-red-600">
          {error}
        </div>
      )}
      
      {publicKey ? (
        <div className="flex items-center space-x-2">
          <span className="font-medium text-sm px-2 py-1 bg-green-100 text-green-800 rounded-md">
            {formattedAddress}
          </span>
          <button
            onClick={handleDisconnect}
            className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <WalletMultiButton className="bg-primary hover:bg-primary-hover text-black py-2 px-4 rounded-lg transition-colors" />
      )}
    </div>
  );
};

export default WalletButton; 