"use client"

import { useState } from 'react';

export default function Transactions() {
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Rainfall Policy Purchase', amount: '$5', status: 'Completed' },
    { id: 2, description: 'Flooding Policy Payout', amount: '$20', status: 'Completed' },
  ]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-gray-700 text-4xl font-bold mb-6">Transactions</h1>
      
      <section>
        <ul className="space-y-4">
          {transactions.map((t) => (
            <li key={t.id} className="text-gray-700 p-4 border rounded-md shadow-sm bg-white">
              <p><strong>Description:</strong> {t.description}</p>
              <p><strong>Amount:</strong> {t.amount}</p>
              <p><strong>Status:</strong> {t.status}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}