"use client";
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const walletAddress = '7LPQ...mqPJ';

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-black-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Farm Protection Platform
            </h1>
            <p className="text-xl md:text-2xl text-black-600 mb-12 max-w-3xl mx-auto">
              Decentralized parametric insurance for agricultural communities. Protect your crops with blockchain-powered smart contracts.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
              <Link 
                href="/dashboard" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700"
              >
                Get Started
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
              </Link>
              <Link 
                href="/policy" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black-900 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50"
              >
                Browse Crop Protection
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-gray-200 opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { value: '176', label: 'Farmers Protected', icon: '👨‍🌾' },
              { value: '24', label: 'Disaster Claims Paid', icon: '💰' },
              { value: '$87,500', label: 'Crops Insured Value', icon: '🌾' },
              { value: '3', label: 'Community Risk Pools', icon: '🤝' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-100"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-black-900 mb-1">{stat.value}</div>
                <div className="text-black-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black-900 mb-4">How It Works</h2>
            <p className="text-xl text-black-600 max-w-2xl mx-auto">
              Get protected in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                title: 'Select Crop Coverage',
                description: 'Choose the type of agricultural disaster protection for your specific crops and farm location.',
                icon: '🌾'
              },
              {
                step: '2',
                title: 'Connect Your Wallet',
                description: 'Link a blockchain wallet to receive instant payouts when disaster conditions are detected.',
                icon: '🔗'
              },
              {
                step: '3',
                title: 'Automatic Disaster Payouts',
                description: 'Our weather oracles monitor conditions and automatically trigger payouts when disasters strike your crops.',
                icon: '⚡'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-2xl font-bold text-black-900 mb-2">{step.title}</div>
                <p className="text-black-600">{step.description}</p>
                {index === 1 && (
                  <div className="mt-6">
                    {walletConnected ? (
                      <button className="w-full bg-green-100 text-green-800 px-4 py-2 rounded-lg font-mono text-sm">
                        {walletAddress}
                      </button>
                    ) : (
                      <button
                        className="w-full flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-200 hover:from-indigo-700 hover:to-purple-700"
                        onClick={() => setWalletConnected(true)}
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
                          <rect width="13" height="8" x="9" y="8" rx="2" />
                          <circle cx="15" cy="12" r="1.5" />
                        </svg>
                        Connect Wallet
                      </button>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-black-600 max-w-2xl mx-auto">
              Experience the future of agricultural insurance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Transparent',
                description: 'All farm policies and claims are recorded on-chain for full transparency.',
                icon: '🔍'
              },
              {
                title: 'Affordable',
                description: 'Lower premiums than traditional insurance, designed for smallholder farmers.',
                icon: '💎'
              },
              {
                title: 'Instant Payouts',
                description: 'No lengthy claims process. Get paid instantly when disaster strikes.',
                icon: '⚡'
              },
              {
                title: 'Farmer Driven',
                description: 'Built for farmers, by farmers, with input from real agricultural communities.',
                icon: '👨‍🌾'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-black-900 mb-2">{feature.title}</h3>
                <p className="text-black-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Create Wallet */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Protect Your Crops?</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of farmers who trust our platform for their crop protection needs.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-8 py-4 font-bold text-indigo-600 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white bg-white rounded-xl hover:bg-indigo-50"
            >
              Create Your Wallet
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}