"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import WalletButton from './WalletButton';

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;
  
  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <>
      {/* Header */}
      <header className="bg-primary text-black py-4 sticky top-0 z-10 shadow-md">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold hover:opacity-90 transition-opacity">
              Great Insure
            </Link>
            <ul className="hidden md:flex space-x-6">
              <li>
                <Link 
                  href="/dashboard" 
                  className={`py-2 px-1 ${isActive('/dashboard') 
                    ? 'font-bold border-b-2 border-white' 
                    : 'hover:border-b-2 border-opacity-70 border-white'}`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  href="/policy" 
                  className={`py-2 px-1 ${isActive('/policy') 
                    ? 'font-bold border-b-2 border-white' 
                    : 'hover:border-b-2 border-opacity-70 border-white'}`}
                >
                  Crop Protection
                </Link>
              </li>
              <li>
                <Link 
                  href="/weather" 
                  className={`py-2 px-1 ${isActive('/weather') 
                    ? 'font-bold border-b-2 border-white' 
                    : 'hover:border-b-2 border-opacity-70 border-white'}`}
                >
                  Weather
                </Link>
              </li>
              <li>
                <Link 
                  href="/transaction" 
                  className={`py-2 px-1 ${isActive('/transaction') 
                    ? 'font-bold border-b-2 border-white' 
                    : 'hover:border-b-2 border-opacity-70 border-white'}`}
                >
                  Transactions
                </Link>
              </li>
              <li>
                <Link 
                  href="/profile" 
                  className={`py-2 px-1 ${isActive('/profile') 
                    ? 'font-bold border-b-2 border-white' 
                    : 'hover:border-b-2 border-opacity-70 border-white'}`}
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-3">
            <WalletButton />
            
            <button 
              onClick={handleBack}
              className="flex items-center bg-primary-hover hover:opacity-90 text-black py-2 px-4 rounded-md transition-all"
              aria-label="Go back to previous page"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="ml-2 hidden sm:inline">Back</span>
            </button>
            
            <button 
              className="md:hidden bg-primary-hover p-2 rounded-md hover:opacity-90 transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-hover text-black py-2 border-t border-opacity-20 border-white">
          <div className="container mx-auto flex flex-col">
            <Link 
              href="/dashboard" 
              className={`px-4 py-3 ${isActive('/dashboard') ? 'bg-opacity-20 bg-white' : 'hover:bg-opacity-10 hover:bg-white'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              href="/policy" 
              className={`px-4 py-3 ${isActive('/policy') ? 'bg-opacity-20 bg-white' : 'hover:bg-opacity-10 hover:bg-white'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Crop Protection
            </Link>
            <Link 
              href="/weather" 
              className={`px-4 py-3 ${isActive('/weather') ? 'bg-opacity-20 bg-white' : 'hover:bg-opacity-10 hover:bg-white'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Weather
            </Link>
            <Link 
              href="/transaction" 
              className={`px-4 py-3 ${isActive('/transaction') ? 'bg-opacity-20 bg-white' : 'hover:bg-opacity-10 hover:bg-white'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Transactions
            </Link>
            <Link 
              href="/profile" 
              className={`px-4 py-3 ${isActive('/profile') ? 'bg-opacity-20 bg-white' : 'hover:bg-opacity-10 hover:bg-white'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </>
  );
} 