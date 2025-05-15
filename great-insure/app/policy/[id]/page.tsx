"use client"

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import PageLayout from '../../components/PageLayout';
import Link from 'next/link';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import ClientWalletWrapper from '../../components/ClientWalletWrapper';

type PolicyDetail = {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  coverageOptions: {
    amount: number;
    premium: number;
  }[];
  riskType: string;
  duration: string;
  triggerDescription: string;
  icon: string;
  faq: {
    question: string;
    answer: string;
  }[];
};

export default function PolicyDetail() {
  const router = useRouter();
  const params = useParams();
  const policyId = parseInt(params.id as string);
  
  const [selectedCoverage, setSelectedCoverage] = useState<number>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showWalletModal, setShowWalletModal] = useState<boolean>(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  
  // This would typically come from an API call using the policyId
  const [policy, setPolicy] = useState<PolicyDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  // Get wallet from context
  const { publicKey, connected } = useWallet();
  
  // Effect to handle wallet connection status
  useEffect(() => {
    if (connected && publicKey && paymentStatus === 'processing') {
      // Simulate payment processing
      setTimeout(() => {
        setPaymentStatus('success');
        
        // Redirect to dashboard after successful payment
        setTimeout(() => {
          router.push('/dashboard');
        }, 1500);
      }, 2000);
    }
  }, [connected, publicKey, paymentStatus, router]);
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      if (policyId === 1) {
        setPolicy({
          id: 1,
          name: "Drought Protection",
          description: "Protection against insufficient rainfall affecting crop yields",
          longDescription: "Our Drought Protection policy provides financial security when rainfall levels drop below critical thresholds. Designed specifically for smallholder farmers, this parametric insurance automatically triggers a payout when rainfall measurements fall below 35mm over any 30-day period during the growing season. The policy leverages satellite data and ground weather stations to ensure accurate and timely measurements, allowing for swift payouts without the need for traditional claims assessment.",
          coverageOptions: [
            { amount: 100, premium: 5.50 },
            { amount: 200, premium: 10.25 },
            { amount: 500, premium: 24.75 }
          ],
          riskType: "Weather",
          duration: "6 months",
          triggerDescription: "Less than 35mm of rainfall over any 30-day period",
          icon: "☀️",
          faq: [
            {
              question: "How is rainfall measured for this policy?",
              answer: "Rainfall is measured using a combination of satellite data and local weather stations to ensure accuracy. We partner with meteorological services to obtain verified data."
            },
            {
              question: "When will I receive payment if the trigger condition is met?",
              answer: "Payouts are typically processed within 72 hours after the trigger condition has been verified. The funds will be transferred directly to your registered mobile money or bank account."
            },
            {
              question: "Can I purchase this policy at any time?",
              answer: "The policy is available for purchase before planting seasons. We recommend purchasing at least 14 days before your expected planting date."
            }
          ]
        });
      } else if (policyId === 2) {
        setPolicy({
          id: 2,
          name: "Flood Protection",
          description: "Coverage for crop damage due to excess rainfall and flooding",
          longDescription: "The Flood Protection policy is designed to protect farmers against excessive rainfall that leads to flooding and crop damage. This parametric insurance triggers a payout when rainfall exceeds 150mm in any 72-hour period, providing immediate financial relief without requiring proof of crop damage. The policy utilizes real-time weather data and satellite imagery to verify rainfall levels, ensuring that payouts are objective and timely.",
          coverageOptions: [
            { amount: 150, premium: 8.75 },
            { amount: 300, premium: 16.50 },
            { amount: 750, premium: 38.25 }
          ],
          riskType: "Weather",
          duration: "6 months",
          triggerDescription: "More than 150mm of rainfall in any 72-hour period",
          icon: "🌧️",
          faq: [
            {
              question: "Does this policy cover all types of flooding?",
              answer: "This policy covers flooding due to excessive rainfall above the specified threshold. It does not cover flooding due to dam breaches, irrigation failures, or other non-rainfall related causes."
            },
            {
              question: "How do you verify that flooding has occurred in my area?",
              answer: "We use a combination of weather station data, satellite imagery, and third-party meteorological sources to verify rainfall levels. No in-person assessment is required."
            },
            {
              question: "Can I purchase multiple policies for the same land?",
              answer: "Yes, you can hold multiple policies that cover different risks for the same land area, such as both Drought and Flood Protection."
            }
          ]
        });
      } else if (policyId === 3) {
        setPolicy({
          id: 3,
          name: "Heat Wave Protection",
          description: "Protection against extreme heat damaging crops",
          longDescription: "Heat Wave Protection offers financial security when temperatures rise to levels that can damage crops. This parametric insurance provides automatic payouts when temperatures exceed 40°C for more than 5 consecutive days, without requiring proof of crop damage. The policy uses data from weather stations and satellite temperature measurements to verify trigger conditions, making the claims process seamless and efficient.",
          coverageOptions: [
            { amount: 125, premium: 7.25 },
            { amount: 250, premium: 13.75 },
            { amount: 600, premium: 31.50 }
          ],
          riskType: "Weather",
          duration: "3 months",
          triggerDescription: "Temperatures exceeding 40°C for more than 5 consecutive days",
          icon: "🔥",
          faq: [
            {
              question: "How are temperatures measured for this policy?",
              answer: "Temperatures are measured using a network of weather stations and supplemented with satellite temperature data. We use the average daily high temperature to determine if the trigger has been met."
            },
            {
              question: "Is this policy available year-round?",
              answer: "This policy is primarily available during the growing season when heat waves pose the greatest risk to crops, typically from May to September depending on your region."
            },
            {
              question: "Will I be notified if temperatures are approaching the trigger level?",
              answer: "Yes, we provide SMS alerts when temperatures in your area reach 38°C, giving you advance warning that the policy may trigger soon."
            }
          ]
        });
      } else {
        // Policy not found, redirect to policies page
        router.push('/policy');
      }
      
      setLoading(false);
    }, 500);
  }, [policyId, router]);
  
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  
  if (loading) {
    return (
      <PageLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-black text-xl">Loading policy details...</div>
        </div>
      </PageLayout>
    );
  }
  
  if (!policy) {
    return (
      <PageLayout>
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-gray-700">Policy not found</h2>
          <p className="mt-2">The policy you are looking for does not exist.</p>
          <Link 
            href="/policy" 
            className="mt-4 inline-block text-black hover:text-black-hover"
          >
            Browse available policies
          </Link>
        </div>
      </PageLayout>
    );
  }
  
  return (
    <PageLayout>
      <div className="mb-6">
        <Link 
          href="/policy" 
          className="text-black hover:text-black-hover inline-flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Policies
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex items-start">
            <div className="text-5xl mr-5">{policy.icon}</div>
            <div>
              <h1 className="text-3xl font-bold">{policy.name}</h1>
              <p className="text-secondary mt-2">{policy.description}</p>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-foreground">{policy.longDescription}</p>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col bg-muted p-4 rounded-lg">
              <span className="text-sm text-secondary font-medium mb-1">Risk Type</span>
              <span className="font-medium">{policy.riskType}</span>
            </div>
            <div className="flex flex-col bg-muted p-4 rounded-lg">
              <span className="text-sm text-secondary font-medium mb-1">Duration</span>
              <span className="font-medium">{policy.duration}</span>
            </div>
            <div className="flex flex-col bg-muted p-4 rounded-lg">
              <span className="text-sm text-secondary font-medium mb-1">Payout Trigger</span>
              <span className="font-medium">{policy.triggerDescription}</span>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Coverage Options</h2>
            <div className="flex flex-wrap gap-4">
              {policy.coverageOptions.map((option, index) => (
                <label 
                  key={index} 
                  className={`
                    border rounded-lg p-5 cursor-pointer
                    ${selectedCoverage === index 
                      ? 'border-primary bg-blue-50' 
                      : 'border-muted hover:border-secondary'
                    }
                  `}
                >
                  <input 
                    type="radio"
                    name="coverage"
                    className="sr-only"
                    onChange={() => setSelectedCoverage(index)}
                    checked={selectedCoverage === index}
                  />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black">${option.amount}</div>
                    <div className="text-secondary">Coverage</div>
                    <div className="mt-2">
                      Premium: <span className="font-medium">${option.premium.toFixed(2)}</span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
          
          <div className="mt-10">
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {policy.faq.map((item, index) => (
                <div 
                  key={index} 
                  className="border border-muted rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-medium">{item.question}</span>
                    <svg 
                      className={`w-5 h-5 transition-transform ${expandedFaq === index ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="px-6 py-4 border-t border-muted bg-muted">
                      <p className="text-secondary">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 flex justify-center">
            {paymentStatus === 'idle' ? (
              <button 
                className="bg-primary text-black px-8 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors"
                onClick={() => {
                  if (!connected) {
                    setShowWalletModal(true);
                  } else {
                    setPaymentStatus('processing');
                  }
                }}
              >
                Purchase This Policy
              </button>
            ) : paymentStatus === 'processing' ? (
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary mb-2"></div>
                <p>Processing your payment...</p>
                {!connected && (
                  <div className="mt-4">
                    <ClientWalletWrapper>
                      <WalletMultiButton className="bg-primary hover:bg-primary-hover text-black py-2 px-4 rounded-lg transition-colors" />
                    </ClientWalletWrapper>
                  </div>
                )}
              </div>
            ) : paymentStatus === 'success' ? (
              <div className="flex flex-col items-center text-green-600">
                <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="font-medium">Payment successful! Redirecting to dashboard...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center text-red-600">
                <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <p className="font-medium">Payment failed. Please try again.</p>
                <button 
                  className="mt-4 bg-primary text-black px-6 py-2 rounded-lg font-medium hover:bg-primary-hover transition-colors"
                  onClick={() => setPaymentStatus('idle')}
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
          
          {showWalletModal && paymentStatus === 'idle' && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <h3 className="text-xl font-bold mb-4">Connect Your Wallet</h3>
                <p className="mb-6 text-secondary">Please connect your wallet to proceed with the payment.</p>
                
                <div className="mb-6">
                  <ClientWalletWrapper>
                    <WalletMultiButton className="bg-primary hover:bg-primary-hover text-black py-2 px-4 rounded-lg transition-colors w-full" />
                  </ClientWalletWrapper>
                </div>
                
                <div className="flex justify-between">
                  <button 
                    className="text-secondary hover:text-black transition-colors"
                    onClick={() => setShowWalletModal(false)}
                  >
                    Cancel
                  </button>
                  
                  <button 
                    className="bg-primary text-black px-4 py-2 rounded-lg font-medium hover:bg-primary-hover transition-colors"
                    onClick={() => {
                      if (connected) {
                        setShowWalletModal(false);
                        setPaymentStatus('processing');
                      }
                    }}
                    disabled={!connected}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
} 