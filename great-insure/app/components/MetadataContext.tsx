// MetadataContext - Provides centralized application metadata to avoid hard-coding
"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Interface for application metadata
interface AppMetadata {
  platform: {
    name: string;
    description: string;
    logoUrl: string;
    version: string;
  };
  community: {
    name: string;
    location: string;
    description: string;
    memberCount: number;
  };
  insurance: {
    categories: string[];
    coverageLevels: {
      value: string;
      label: string;
      description: string;
    }[];
    durations: {
      value: string;
      label: string;
      days: number;
    }[];
  };
  stats: {
    policiesIssued: number;
    claimsPaid: number;
    totalInsured: number;
    activeRiskPools: number;
  };
  loading: boolean;
  error: string | null;
}

// Default values
const defaultMetadata: AppMetadata = {
  platform: {
    name: 'Farm Protection Platform',
    description: 'Decentralized parametric insurance for agriculture disasters',
    logoUrl: '/logo.svg',
    version: '1.0.0',
  },
  community: {
    name: 'Global Farmers Alliance',
    location: 'Global Network',
    description: 'A community of farmers working together to protect against agricultural disasters',
    memberCount: 0,
  },
  insurance: {
    categories: ['Drought', 'Flood', 'Pest Infestation', 'Extreme Weather'],
    coverageLevels: [
      { value: 'basic', label: 'Basic', description: 'Essential coverage for minimal crop protection' },
      { value: 'standard', label: 'Standard', description: 'Balanced coverage for typical farming risks' },
      { value: 'premium', label: 'Premium', description: 'Comprehensive coverage for all agricultural disasters' },
    ],
    durations: [
      { value: 'seasonal', label: 'Season', days: 120 },
      { value: 'biannual', label: 'Bi-Annual', days: 180 },
      { value: 'annual', label: 'Annual', days: 365 },
    ],
  },
  stats: {
    policiesIssued: 0,
    claimsPaid: 0,
    totalInsured: 0,
    activeRiskPools: 0,
  },
  loading: true,
  error: null,
};

// Create context
const MetadataContext = createContext<AppMetadata>(defaultMetadata);

// Provider component
export const MetadataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [metadata, setMetadata] = useState<AppMetadata>(defaultMetadata);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        // Try to load metadata from backend
        const response = await fetch('/api/metadata');
        
        if (!response.ok) {
          throw new Error('Failed to fetch platform metadata');
        }
        
        const data = await response.json();
        
        // Update with backend data but maintain defaults for any missing properties
        setMetadata({
          ...defaultMetadata,
          ...data.data,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error('Error fetching metadata:', error);
        
        // Set error state but still provide defaults
        setMetadata({
          ...defaultMetadata,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to fetch platform data',
        });
      }
    };

    fetchMetadata();
  }, []);

  return <MetadataContext.Provider value={metadata}>{children}</MetadataContext.Provider>;
};

// Hook for using the metadata
export const useMetadata = () => useContext(MetadataContext);

export default MetadataContext; 