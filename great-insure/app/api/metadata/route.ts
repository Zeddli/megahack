// API route for fetching application metadata
import { NextResponse } from 'next/server';

// Metadata endpoint to fetch dynamic application data
export async function GET() {
  try {
    // Check for environment variable to determine if we should use real backend
    const useBackend = process.env.USE_REAL_BACKEND === 'true';
    
    if (useBackend) {
      // Connect to the real backend API
      const response = await fetch(`${process.env.BACKEND_API_URL}/metadata`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch metadata from backend');
      }
      
      const data = await response.json();
      
      return NextResponse.json({
        success: true,
        data: data.data,
      });
    } else {
      // Use mock data for development/demo
      return NextResponse.json({
        success: true,
        data: {
          platform: {
            name: 'Farm Protection Platform',
            description: 'Decentralized parametric insurance for agricultural communities',
            logoUrl: '/logo.svg',
            version: '1.0.0',
          },
          community: {
            name: 'Global Farmers Alliance',
            location: 'Global Network',
            description: 'A community of farmers working together to protect against agricultural disasters',
            memberCount: 250,
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
            policiesIssued: 176,
            claimsPaid: 24,
            totalInsured: 87500,
            activeRiskPools: 3,
          },
        },
      });
    }
  } catch (error) {
    console.error('Error fetching metadata:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'Failed to fetch application metadata' 
      },
      { status: 500 }
    );
  }
} 