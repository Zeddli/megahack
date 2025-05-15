/**
 * Premium calculation service for insurance policies
 * This can be expanded to include risk modeling, external data, etc.
 */

interface PremiumCalculationInput {
  riskPoolId: number;
  coverageAmount: number;
  coverageDuration?: number; // in days
}

interface PremiumCalculationResult {
  premiumAmount: number;
  currencyCode: string;
  coverageAmount: number;
  coverageDuration: number;
}

/**
 * Calculate the premium for a policy based on risk pool, amount, and duration
 * @param input - PremiumCalculationInput
 * @returns PremiumCalculationResult
 */
export function calculatePremium(input: PremiumCalculationInput): PremiumCalculationResult {
  // Placeholder: flat 5% of coverage amount, can be replaced with real risk modeling
  const { coverageAmount, coverageDuration } = input;
  const duration = coverageDuration || 180; // Default 180 days
  const premiumRate = 0.05; // 5% for now
  const premiumAmount = Number(coverageAmount) * premiumRate;
  return {
    premiumAmount,
    currencyCode: 'GHS', // Ghanaian Cedi as example
    coverageAmount: Number(coverageAmount),
    coverageDuration: duration,
  };
} 