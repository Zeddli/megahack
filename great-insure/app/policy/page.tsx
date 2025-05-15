"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useWallet } from '../hooks/useWallet';

export default function Policy() {
  const { connected } = useWallet();

  // Mock data for risk pools
  const riskPools = [
    {
      id: 1,
      title: 'Rice Crop Protection',
      coverage: '2,000 SOL',
      liquidity: '50,000 SOL',
      activePolicies: 156,
      poolAddress: '7LPQ...mqPJ',
      description: 'Protection against heavy rainfall and flooding for rice crops in Southeast Asia.',
      riskLevel: 'Medium',
      premium: '5% per season'
    },
    {
      id: 2,
      title: 'Corn Drought Shield',
      coverage: '1,500 SOL',
      liquidity: '35,000 SOL',
      activePolicies: 98,
      poolAddress: '9XYZ...abc',
      description: 'Drought protection for corn farmers in arid regions.',
      riskLevel: 'High',
      premium: '7% per season'
    },
    {
      id: 3,
      title: 'Wheat Storm Guard',
      coverage: '3,000 SOL',
      liquidity: '75,000 SOL',
      activePolicies: 203,
      poolAddress: '4DEF...ghi',
      description: 'Protection against hailstorms and extreme weather for wheat crops.',
      riskLevel: 'Low',
      premium: '4% per season'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-black-900">Risk Pools</h1>
              <p className="mt-1 text-black-600">Browse and join risk pools to protect your crops</p>
            </div>
            {connected && (
              <Link
                href="/policy/new"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create New Pool
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Risk Pool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {riskPools.map((pool, index) => (
            <motion.div
              key={pool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-black-900">{pool.title}</h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    pool.riskLevel === 'Low' ? 'bg-green-100 text-green-800' :
                    pool.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {pool.riskLevel} Risk
                  </span>
                </div>
                <p className="text-black-600 text-sm">{pool.description}</p>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-black-500">Coverage</p>
                    <p className="text-lg font-semibold text-black-900">{pool.coverage}</p>
                  </div>
                  <div>
                    <p className="text-sm text-black-500">Premium</p>
                    <p className="text-lg font-semibold text-black-900">{pool.premium}</p>
                  </div>
                  <div>
                    <p className="text-sm text-black-500">Pool Liquidity</p>
                    <p className="text-lg font-semibold text-black-900">{pool.liquidity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-black-500">Active Policies</p>
                    <p className="text-lg font-semibold text-black-900">{pool.activePolicies}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-black-500 mb-1">Pool Address</p>
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono bg-gray-50 px-2 py-1 rounded">
                      {pool.poolAddress}
                    </code>
                    <button
                      onClick={() => navigator.clipboard.writeText(pool.poolAddress)}
                      className="text-black-400 hover:text-black-600"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <Link
                  href={`/policy/${pool.id}`}
                  className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
                >
                  View Details
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {riskPools.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="mx-auto w-24 h-24 text-black-400">
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-black-900">No Risk Pools Available</h3>
            <p className="mt-2 text-black-600">Check back later for new risk pools or create your own.</p>
          </motion.div>
        )}
      </main>
    </div>
  );
}