import { useWallet as useSolanaWallet } from '@solana/wallet-adapter-react';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Transaction, Connection } from '@solana/web3.js';

// Create a Solana connection instance (adjust endpoint as needed)
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

export function useWallet() {
  const {
    publicKey,
    connected,
    connecting,
    disconnect,
    select,
    wallet,
    wallets,
    connect,
  } = useSolanaWallet();
  const router = useRouter();

  const handleConnect = useCallback(async () => {
    try {
      await connect();
    } catch (error) {
      console.error('Error connecting wallet:', error);
      throw error;
    }
  }, [connect]);

  const handleDisconnect = useCallback(async () => {
    disconnect();
    // Clear cookies and local storage
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'walletAddress=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    // Clear mock data on disconnect
    if (publicKey) {
      fetch('/api/auth/wallet-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          walletAddress: publicKey.toString(),
          message: 'Clear mock data',
          signature: 'mock-signature'
        }),
      }).catch(console.error);
    }
    // Refresh the page to show cleared state
    router.refresh();
  }, [disconnect, router, publicKey]);

  const handleSignMessage = useCallback(async (message: Uint8Array) => {
    const adapter = wallet?.adapter as { signMessage?: (msg: Uint8Array) => Promise<Uint8Array> };
    if (!adapter?.signMessage) {
      throw new Error('Wallet does not support message signing');
    }
    try {
      return await adapter.signMessage(message);
    } catch (error) {
      console.error('Error signing message:', error);
      throw error;
    }
  }, [wallet]);

  const handleSignTransaction = useCallback(async (transaction: Transaction) => {
    const adapter = wallet?.adapter as { signMessage?: (msg: Uint8Array) => Promise<Uint8Array> };
    if (!adapter?.signMessage) {
      throw new Error('Wallet does not support message signing');
    }
    if (!wallet) {
      throw new Error('Wallet is not connected');
    }
    try {
      return await wallet.adapter.sendTransaction(transaction, connection);
    } catch (error) {
      console.error('Error sending transaction:', error);
      throw error;
    }
  }, [wallet]);

  return {
    publicKey,
    connected,
    connecting,
    disconnect: handleDisconnect,
    connect: handleConnect,
    select,
    wallet,
    wallets,
    address: publicKey?.toBase58(),
    signMessage: handleSignMessage,
    signTransaction: handleSignTransaction,
  };
} 