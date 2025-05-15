"use client"

import { useEffect, useState } from 'react';
import { useWallet } from '@/app/hooks/useWallet';

interface Policy {
  id: string;
  riskPoolId: string;
  riskPoolName: string;
  coverageAmount: string;
  premium: string;
  startDate: string;
  endDate: string;
  status: 'ACTIVE' | 'EXPIRED' | 'CLAIMED';
  contractAddress: string;
}

interface Transaction {
  id: string;
  type: 'PURCHASE' | 'CLAIM';
  amount: string;
  status: 'COMPLETED' | 'PENDING' | 'FAILED';
  timestamp: string;
  txHash: string;
  policyId?: string;
}

export default function DashboardPage() {
  const { connected, publicKey } = useWallet();
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!connected || !publicKey) {
      setPolicies([]);
      setTransactions([]);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch policies
        const policiesResponse = await fetch('/api/policies');
        const policiesData = await policiesResponse.json();
        if (policiesData.success) {
          setPolicies(policiesData.data);
        }

        // Fetch transactions
        const transactionsResponse = await fetch('/api/transactions');
        const transactionsData = await transactionsResponse.json();
        if (transactionsData.success) {
          setTransactions(transactionsData.data);
        }
      } catch (err) {
        setError('Failed to fetch data');
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [connected, publicKey]);

  if (!connected) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-black-600">Please connect your wallet to view your dashboard.</p>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-black-600">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  // Mock data to show if user has no policies or transactions
  const mockPolicy = {
    id: 'mock-policy',
    riskPoolId: 'mock-pool',
    riskPoolName: 'Mock Rainfall Coverage',
    coverageAmount: '100 SOL',
    premium: '0.035 SOL',
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'ACTIVE',
    contractAddress: '0xvjkkl0ngrRt6up05dsWQyJBtduI900y65rFvDwe'
  };
  const mockTransaction = {
    id: 'mock-tx',
    type: 'PURCHASE',
    amount: '0.035 SOL',
    status: 'COMPLETED',
    timestamp: new Date().toISOString(),
    txHash: '0xdFTY7UIkHGYUIO98765RFVf45gJOoGbyfde5',
    policyId: 'mock-policy'
  };
  const displayPolicies = policies.length === 0 ? [mockPolicy] : policies;
  const displayTransactions = transactions.length === 0 ? [mockTransaction] : transactions;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        
        {/* Policies Section */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Your Policies</h2>
            <div className="space-y-4">
              {displayPolicies.map((policy) => (
                <div key={policy.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{policy.riskPoolName}{policy.id === 'mock-policy' && <span className="ml-2 text-xs text-black"></span>}</h3>
                      <p className="text-sm text-black">Contract: <span className="font-mono select-all text-blue-700">{policy.contractAddress}</span></p>
                      <p className="text-sm text-black">Coverage: {policy.coverageAmount}</p>
                      <p className="text-sm text-black">Premium: {policy.premium}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-sm ${
                      policy.status === 'ACTIVE' ? 'bg-green-100 text-green-800' :
                      policy.status === 'EXPIRED' ? 'bg-gray-100 text-black-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {policy.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <div className="space-y-4">
              {displayTransactions.map((tx) => (
                <div key={tx.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{tx.type}{tx.id === 'mock-tx' && <span className="ml-2 text-xs text-black"></span>}</h3>
                      <p className="text-sm text-black">Amount: {tx.amount}</p>
                      <p className="text-sm text-black">Transaction: <span className="font-mono select-all text-purple-700">{tx.txHash}</span></p>
                      <p className="text-sm text-black">
                        {new Date(tx.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded text-sm ${
                      tx.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
                      tx.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}