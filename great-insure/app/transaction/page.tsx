"use client"

import { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import PageLayout from '../components/PageLayout';
import AuthGuard from '../components/AuthGuard';
import { getTransactionsForWallet, TransactionRecord } from '../lib/blockchain';
import Link from 'next/link';

export default function TransactionPage() {
  const { publicKey } = useWallet();
  const [transactions, setTransactions] = useState<TransactionRecord[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionRecord | null>(null);
  
  // Load transactions when wallet is connected
  useEffect(() => {
    if (publicKey) {
      // Get transactions for the current wallet
      const walletTransactions = getTransactionsForWallet(publicKey.toBase58());
      
      // Sort transactions by timestamp (most recent first)
      const sortedTransactions = [...walletTransactions].sort((a, b) => b.timestamp - a.timestamp);
      
      setTransactions(sortedTransactions);
      
      // If there are transactions, select the most recent one for details view
      if (sortedTransactions.length > 0) {
        setSelectedTransaction(sortedTransactions[0]);
      }
    }
  }, [publicKey]);
  
  // Format date
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };
  
  // Get status badge class
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Get transaction type badge class
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'premium':
        return 'bg-blue-100 text-blue-800';
      case 'claim':
        return 'bg-purple-100 text-purple-800';
      case 'refund':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Format SOL amount
  const formatAmount = (amount: number) => {
    return `${amount.toFixed(3)} SOL`;
  };
  
  // Get shortened address
  const shortenAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };
  
  // View transaction details
  const viewTransactionDetails = (tx: TransactionRecord) => {
    setSelectedTransaction(tx);
  };
  
  const transactionContent = (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Transaction History</h1>
        <p className="text-secondary">View your blockchain transaction history</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-muted">
              <h2 className="text-2xl font-bold">Recent Transactions</h2>
            </div>
            
            <div className="overflow-x-auto">
              {transactions.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No transactions found</p>
                </div>
              ) : (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Signature
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {transactions.map((tx) => (
                      <tr key={tx.signature} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-mono text-sm text-gray-700">
                            {shortenAddress(tx.signature)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-700">
                            {formatDate(tx.timestamp)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${getTypeBadge(tx.type)}`}>
                            {tx.type.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {formatAmount(tx.amount)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge(tx.status)}`}>
                            {tx.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => viewTransactionDetails(tx)}
                            className="text-primary hover:text-primary-hover"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <Link 
                href="/dashboard" 
                className="text-sm text-primary hover:text-primary-hover"
              >
                Return to Dashboard
              </Link>
            </div>
          </div>
        </div>
        
        <div>
          {selectedTransaction ? (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-muted">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Transaction Details</h2>
                  <button 
                    onClick={() => setSelectedTransaction(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-1">Transaction Signature</div>
                  <div className="font-mono text-sm break-all">{selectedTransaction.signature}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Date & Time</div>
                    <div className="text-sm">{formatDate(selectedTransaction.timestamp)}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Status</div>
                    <div className="text-sm">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge(selectedTransaction.status)}`}>
                        {selectedTransaction.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Type</div>
                    <div className="text-sm">
                      <span className={`px-2 py-1 text-xs rounded-full ${getTypeBadge(selectedTransaction.type)}`}>
                        {selectedTransaction.type.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Amount</div>
                    <div className="text-sm font-medium">{formatAmount(selectedTransaction.amount)}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-1">Description</div>
                  <div className="text-sm">{selectedTransaction.description}</div>
                </div>
                
                {selectedTransaction.sender && (
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-1">From</div>
                    <div className="font-mono text-sm break-all">{selectedTransaction.sender}</div>
                  </div>
                )}
                
                {selectedTransaction.recipient && (
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-1">To</div>
                    <div className="font-mono text-sm break-all">{selectedTransaction.recipient}</div>
                  </div>
                )}
                
                {selectedTransaction.policyId && (
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-1">Related Policy</div>
                    <div className="text-sm">{selectedTransaction.policyId}</div>
                  </div>
                )}
                
                <div className="mt-8">
                  <a 
                    href={`https://explorer.solana.com/tx/${selectedTransaction.signature}?cluster=${process.env.NEXT_PUBLIC_SOLANA_NETWORK || 'devnet'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-primary text-black rounded-md hover:bg-primary-hover"
                  >
                    View on Explorer
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-muted">
                <h2 className="text-xl font-bold">Transaction Info</h2>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Select a transaction from the list to view detailed information.
                </p>
                
                <h3 className="font-bold text-sm mb-2">Transaction Types:</h3>
                <ul className="list-disc pl-5 text-sm text-gray-700 mb-4">
                  <li className="mb-1">
                    <span className={`px-2 py-1 text-xs rounded-full ${getTypeBadge('premium')}`}>
                      PREMIUM
                    </span>
                    <span className="ml-2">Policy premium payments</span>
                  </li>
                  <li className="mb-1">
                    <span className={`px-2 py-1 text-xs rounded-full ${getTypeBadge('claim')}`}>
                      CLAIM
                    </span>
                    <span className="ml-2">Claim payouts received</span>
                  </li>
                  <li>
                    <span className={`px-2 py-1 text-xs rounded-full ${getTypeBadge('refund')}`}>
                      REFUND
                    </span>
                    <span className="ml-2">Policy refunds</span>
                  </li>
                </ul>
                
                <h3 className="font-bold text-sm mb-2">Transaction Status:</h3>
                <ul className="list-disc pl-5 text-sm text-gray-700">
                  <li className="mb-1">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge('confirmed')}`}>
                      CONFIRMED
                    </span>
                    <span className="ml-2">Transaction confirmed on blockchain</span>
                  </li>
                  <li className="mb-1">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge('pending')}`}>
                      PENDING
                    </span>
                    <span className="ml-2">Transaction pending confirmation</span>
                  </li>
                  <li>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge('failed')}`}>
                      FAILED
                    </span>
                    <span className="ml-2">Transaction failed</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
  
  return <AuthGuard>{transactionContent}</AuthGuard>;
} 