"use client"

import { useState } from 'react';

export default function Dashboard() {
  const [policy, setPolicy] = useState([{ id: 1, type: 'Rainfall Coverage', status: 'Active' }]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-gray-700 text-4xl font-bold mb-6">Dashboard</h1>
      
      <section>
        <h2 className="text-gray-700 text-2xl font-bold mb-4">Your Policies</h2>
        <ul className="text-gray-700 space-y-4">
          {policy.map((p) => (
            <li key={p.id} className="p-4 border rounded-md shadow-sm bg-white">
              <p><strong>Policy Type:</strong> {p.type}</p>
              <p><strong>Status:</strong> {p.status}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}