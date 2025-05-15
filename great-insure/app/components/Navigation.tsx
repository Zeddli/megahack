"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import WalletButton from './WalletButton';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-black-900">Great Insure</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                href="/dashboard"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/dashboard')
                    ? 'border-indigo-500 text-black-900'
                    : 'border-transparent text-black-500 hover:border-gray-300 hover:text-black-700'
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/policy"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/policy')
                    ? 'border-indigo-500 text-black-900'
                    : 'border-transparent text-black-500 hover:border-gray-300 hover:text-black-700'
                }`}
              >
                Crop Protection
              </Link>
              <Link
                href="/transaction"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/transaction')
                    ? 'border-indigo-500 text-black-900'
                    : 'border-transparent text-black-500 hover:border-gray-300 hover:text-black-700'
                }`}
              >
                Transactions
              </Link>
              <Link
                href="/profile"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/profile')
                    ? 'border-indigo-500 text-black-900'
                    : 'border-transparent text-black-500 hover:border-gray-300 hover:text-black-700'
                }`}
              >
                Profile
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <WalletButton />
            <button
              className="md:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-black-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/dashboard"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive('/dashboard')
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-black-500 hover:bg-gray-50 hover:border-gray-300 hover:text-black-700'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/policy"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive('/policy')
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-black-500 hover:bg-gray-50 hover:border-gray-300 hover:text-black-700'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Crop Protection
            </Link>
            <Link
              href="/weather"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive('/weather')
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-black-500 hover:bg-gray-50 hover:border-gray-300 hover:text-black-700'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Weather
            </Link>
            <Link
              href="/transaction"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive('/transaction')
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-black-500 hover:bg-gray-50 hover:border-gray-300 hover:text-black-700'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Transactions
            </Link>
            <Link
              href="/profile"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive('/profile')
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-black-500 hover:bg-gray-50 hover:border-gray-300 hover:text-black-700'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 