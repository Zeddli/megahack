"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const mockTransactions = [
  
  {
    id: 2,
    type: 'Premium',
    amount: '0.035 SOL',
    status: 'Completed',
    date: '2024-03-10',
    description: 'Monthly premium payment',
    policy: 'Corn Drought Shield',
    txHash: '0xdFTY7UIkHGYUIO98765RFVf45gJOoGbyfde5'
  }
];

export default function TransactionPage() {
  const [transactions] = useState(mockTransactions);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Sticky Navigation Bar */}
      

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-black-900 mb-6">Transaction History</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Policy</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Tx Hash</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((tx) => (
                  <tr key={tx.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black-900">{tx.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-indigo-700">{tx.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black-900">{tx.policy}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black-900">{tx.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        tx.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        tx.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-black-800'
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black-700">{tx.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-black-500">{tx.txHash}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>
      </main>

      {/* Sticky Footer */}
      <footer className="sticky bottom-0 z-20 bg-white border-t border-gray-200 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-black-500 text-sm">© 2024 Great Insure. All rights reserved.</span>
          <span className="text-black-400 text-xs">Powered by Solana</span>
        </div>
      </footer>
    </div>
  );
}