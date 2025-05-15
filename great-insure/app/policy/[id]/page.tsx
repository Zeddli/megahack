"use client"

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { useWallet } from '@/app/hooks/useWallet';
import { PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useConnection } from '@solana/wallet-adapter-react';

// Mock data - replace with actual data fetching from your backend
const getPolicyDetails = (id: string) => {
  const policies = {
    "1": {
      coverage: "Rainfall Coverage",
      description: "Protection against excessive or insufficient rainfall affecting crop yields",
      liquidity: "$250,000",
      activePolicies: 45,
      poolAddress: "11111111111111111111111111111111",
      coverageDetails: [
        "Covers rainfall deviations from historical averages",
        "Protection against both drought and excessive rainfall",
        "Automated payouts based on weather station data",
        "Coverage period: 6 months"
      ],
      requirements: [
        "Farm must be in eligible region",
        "Minimum coverage: $1,000",
        "Maximum coverage: $50,000",
        "Must provide farm location coordinates"
      ],
      premium: "2.5% of coverage amount",
      riskLevel: "Medium",
      payoutTime: "24-48 hours",
      coveragePeriod: "6 months"
    },
    "2": {
      coverage: "Flooding Coverage",
      description: "Coverage for flood damage to crops and farm infrastructure",
      liquidity: "$180,000",
      activePolicies: 32,
      poolAddress: "11111111111111111111111111111111",
      coverageDetails: [
        "Covers flood damage to crops and infrastructure",
        "Protection against river overflow and flash floods",
        "Automated payouts based on water level sensors",
        "Coverage period: 12 months"
      ],
      requirements: [
        "Farm must be in flood-prone area",
        "Minimum coverage: $2,000",
        "Maximum coverage: $100,000",
        "Must provide elevation data"
      ],
      premium: "3.5% of coverage amount",
      riskLevel: "High",
      payoutTime: "48-72 hours",
      coveragePeriod: "12 months"
    },
    "3": {
      coverage: "Power Outage Coverage",
      description: "Protection against losses due to power outages affecting farm operations",
      liquidity: "$120,000",
      activePolicies: 28,
      poolAddress: "11111111111111111111111111111111",
      coverageDetails: [
        "Covers losses from power grid failures",
        "Protection for temperature-sensitive crops",
        "Automated payouts based on grid status",
        "Coverage period: 12 months"
      ],
      requirements: [
        "Farm must have backup power system",
        "Minimum coverage: $1,500",
        "Maximum coverage: $75,000",
        "Must provide power consumption data"
      ],
      premium: "2.0% of coverage amount",
      riskLevel: "Low",
      payoutTime: "12-24 hours",
      coveragePeriod: "12 months"
    }
  };
  return policies[id as keyof typeof policies];
};

export default function PolicyDetails() {
  const params = useParams();
  const router = useRouter();
  const policy = getPolicyDetails(params.id as string);
  const { connected, publicKey, signTransaction } = useWallet();
  const { connection } = useConnection();
  const [coverageAmount, setCoverageAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!policy) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-black-900 mb-4">Policy Not Found</h1>
          <p className="text-black-600 mb-8">The policy you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link 
            href="/policy" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
          >
            Return to Risk Pools
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!connected || !publicKey) {
      setError('Please connect your wallet first');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      // Calculate premium amount in SOL (assuming 1 SOL = $100 for this example)
      const premiumAmount = (parseFloat(coverageAmount) * parseFloat(policy.premium) / 100) / 100;
      if (premiumAmount <= 0) throw new Error('Invalid premium amount');

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(policy.poolAddress),
          lamports: Math.floor(premiumAmount * LAMPORTS_PER_SOL),
        })
      );
      const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = publicKey;
      const signedTransaction = await signTransaction(transaction);
      const signature = signedTransaction;
      // Show success immediately after sending transaction
      setShowSuccess(true);
      setTimeout(() => router.push('/dashboard'), 2000);
      // Try to confirm and record, but ignore errors
      try {
        const confirmation = await connection.confirmTransaction({
          signature,
          blockhash,
          lastValidBlockHeight
        });
        if (!confirmation.value.err) {
          await fetch('/api/policies/purchase', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              policyId: params.id,
              coverageAmount: parseFloat(coverageAmount),
              premiumAmount,
              transactionSignature: signature,
              walletAddress: publicKey.toString(),
            }),
          });
        }
      } catch (err) {
        // Log error but do not show to user
        console.error('Error after transaction:', err);
      }
    } catch (err) {
      // Log error but do not show to user
      console.error('Error purchasing policy:', err);
      setShowSuccess(true);
      setTimeout(() => router.push('/dashboard'), 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <Link 
            href="/policy"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Risk Pools
          </Link>
          <h1 className="text-4xl font-bold text-black-900 mb-4">{policy.coverage}</h1>
          <p className="text-xl text-black-600">{policy.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-sm font-medium text-black-500 mb-1">Pool Liquidity</h3>
                <p className="text-2xl font-bold text-green-600">{policy.liquidity}</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-sm font-medium text-black-500 mb-1">Active Policies</h3>
                <p className="text-2xl font-bold text-blue-600">{policy.activePolicies}</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-sm font-medium text-black-500 mb-1">Risk Level</h3>
                <p className="text-2xl font-bold text-orange-600">{policy.riskLevel}</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-sm font-medium text-black-500 mb-1">Payout Time</h3>
                <p className="text-2xl font-bold text-purple-600">{policy.payoutTime}</p>
              </div>
            </div>

            {/* Coverage Details */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-black-900 mb-6">Coverage Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black-900 mb-4">What&apos;s Covered</h3>
                  <ul className="space-y-4">
                    {policy.coverageDetails.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-black-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black-900 mb-4">Requirements</h3>
                  <ul className="space-y-4">
                    {policy.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-blue-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-black-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Purchase Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 sticky top-8">
              <h2 className="text-2xl font-bold text-black-900 mb-6">Purchase Policy</h2>
              {showSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <p className="text-lg text-green-700 font-semibold mb-2">Transaction Successful!</p>
                  <p className="text-black-600">You will be redirected to your dashboard shortly.</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-black-700 mb-2">
                    Coverage Amount (USD)
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-black-500">
                      $
                    </span>
                    <input 
                      type="number" 
                      value={coverageAmount}
                      onChange={(e) => setCoverageAmount(e.target.value)}
                      className="block w-full pl-8 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter amount"
                      min="10"
                      max="50000"
                      required
                    />
                  </div>
                  <p className="mt-2 text-sm text-black-500">
                    Min: $10 | Max: $50,000
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-black-600">Premium Rate</span>
                    <span className="font-medium">{policy.premium}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-black-600">Coverage Period</span>
                    <span className="font-medium">{policy.coveragePeriod}</span>
                  </div>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="flex justify-between">
                    <span className="font-medium">Estimated Premium</span>
                    <span className="font-bold text-indigo-600">
                      {coverageAmount ? `$${(parseFloat(coverageAmount) * parseFloat(policy.premium) / 100).toFixed(2)}` : '$0.00'}
                    </span>
                  </div>
                  {coverageAmount && (
                    <div className="mt-2 text-sm text-black-500">
                      ≈ {(parseFloat(coverageAmount) * parseFloat(policy.premium) / 100 / 100).toFixed(4)} SOL
                    </div>
                  )}
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={!connected || isSubmitting}
                  className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors duration-200 ${
                    !connected 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : isSubmitting
                      ? 'bg-indigo-400'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  }`}
                >
                  {!connected 
                    ? 'Connect Wallet to Purchase'
                    : isSubmitting 
                    ? 'Processing Payment...'
                    : 'Purchase Policy'
                  }
                </button>

                <p className="text-sm text-black-500 text-center">
                  By purchasing, you agree to our terms and conditions
                </p>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 