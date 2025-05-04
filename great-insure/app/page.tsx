"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const toggleExpand = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 sticky top-0 z-10">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">Ahotor Protocol</h1>
            <ul className="hidden md:flex space-x-6">
              <li><Link href="/dashboard" className="hover:underline py-2 px-1">Dashboard</Link></li>
              <li><Link href="/policy" className="hover:underline py-2 px-1">Policies</Link></li>
              <li><Link href="/transactions" className="hover:underline py-2 px-1">Transactions</Link></li>
              <li><Link href="/profile" className="hover:underline py-2 px-1">Profile</Link></li>
            </ul>
          </div>

          <button 
            onClick={handleBack}
            className="flex items-center bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition-colors"
            aria-label="Go back to previous page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="ml-2 hidden sm:inline">Back</span>
          </button>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-blue-500 text-white py-2">
        <div className="container mx-auto flex justify-around">
          <Link href="/dashboard" className="hover:underline px-2 py-1 text-sm">Dashboard</Link>
          <Link href="/policy" className="hover:underline px-2 py-1 text-sm">Policies</Link>
          <Link href="/transactions" className="hover:underline px-2 py-1 text-sm">Transactions</Link>
          <Link href="/profile" className="hover:underline px-2 py-1 text-sm">Profile</Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-8 px-4">
        <section className="text-center py-10">
          <h2 className="text-gray-800 text-4xl font-bold mb-4">Welcome to Ahotor Protocol</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Relief at your fingertips. Easy, affordable, and instant parametric insurance for communities.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-8 py-10">
          {/* Insurance Card */}
          <div 
            className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => toggleExpand('insurance')}
          >
            <h3 className="text-gray-800 text-2xl font-bold mb-4">Affordable Micro-Insurance</h3>
            <div className="space-y-4 text-gray-700 mb-6">
              <p className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">1</span>
                Low Premiums, Targeted Coverage: Micro-insurance offers coverage with very low premiums.
              </p>
              {expandedCard === 'insurance' && (
                <>
                  <p className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">2</span>
                    Simplified Processes: Minimizes paperwork and uses simple language.
                  </p>
                  <p className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">3</span>
                    Tailored to Local Risks: Covers risks specific to your community.
                  </p>
                </>
              )}
            </div>
            <div className="relative h-64 rounded-md overflow-hidden border border-gray-200">
              <Image 
                src="/insurance.png" 
                alt="Insurance Image" 
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform"
              />
            </div>
            <button 
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand('insurance');
              }}
            >
              {expandedCard === 'insurance' ? 'Read Less' : 'Read More'}
            </button>
          </div>

          {/* Payouts Card */}
          <div 
            className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => toggleExpand('payouts')}
          >
            <h3 className="text-gray-800 text-2xl font-bold mb-4">Instant Payouts</h3>
            <div className="space-y-4 text-gray-700 mb-6">
              <p className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">1</span>
                Speed & Convenience: Automated payouts without manual processing.
              </p>
              {expandedCard === 'payouts' && (
                <>
                  <p className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">2</span>
                    Financial Relief in Real-Time: Immediate funds when you need them most.
                  </p>
                  <p className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">3</span>
                    Enabled by Technology: Leverages mobile wallets and real-time banking.
                  </p>
                </>
              )}
            </div>
            <div className="relative h-64 rounded-md overflow-hidden border border-gray-200">
              <Image 
                src="/pay.jpg" 
                alt="Payout Image" 
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform"
              />
            </div>
            <button 
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand('payouts');
              }}
            >
              {expandedCard === 'payouts' ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white rounded-xl p-8 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Protected?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Get covered in minutes with our simple, transparent parametric insurance policies.
          </p>
          <Link 
            href="/policy" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 inline-block"
          >
            Browse Available Policies
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Ahotor Protocol</h2>
              <p className="text-gray-400">Parametric insurance for the people</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="hover:text-blue-300">About Us</Link>
              <Link href="/faq" className="hover:text-blue-300">FAQ</Link>
              <Link href="/contact" className="hover:text-blue-300">Contact</Link>
              <Link href="/terms" className="hover:text-blue-300">Terms</Link>
              <Link href="/privacy" className="hover:text-blue-300">Privacy</Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Ahotor Protocol. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}