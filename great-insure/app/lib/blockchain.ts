import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL, Keypair, clusterApiUrl } from '@solana/web3.js';

// Define constants for the application
const NETWORK = process.env.NEXT_PUBLIC_SOLANA_NETWORK || 'devnet';
export const RISK_POOL_PROGRAM_ID = new PublicKey(process.env.NEXT_PUBLIC_RISK_POOL_PROGRAM_ID || '8dRGxRZYGZ71qt4zQAXVJNfQvTercVGPNHbyt3umaovm');

// Connection to Solana blockchain
export const getConnection = (): Connection => {
  try {
    // Choose endpoint based on network
    let endpoint = '';
    
    if (NETWORK === 'mainnet-beta') {
      endpoint = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com';
    } else if (NETWORK === 'devnet') {
      endpoint = 'https://api.devnet.solana.com';
    } else if (NETWORK === 'testnet') {
      endpoint = 'https://api.testnet.solana.com';
    } else {
      endpoint = clusterApiUrl('devnet'); // Default to devnet
    }
    
    console.log(`Creating Solana connection to ${endpoint} (${NETWORK})`);
    
    // Create connection with explicit commitment
    return new Connection(endpoint, {
      commitment: 'confirmed',
      confirmTransactionInitialTimeout: 60000, // 60 seconds
      disableRetryOnRateLimit: false
    });
  } catch (error) {
    console.error('Error creating Solana connection:', error);
    // Fallback to devnet if something goes wrong
    return new Connection('https://api.devnet.solana.com', 'confirmed');
  }
};

// Interface for a risk pool
export interface RiskPool {
  address: string;
  name: string;
  community: string;
  eventType: string;
  totalLiquidity: number;
  activePolicies: number;
  totalCoverage: number;
  premium: number;
}

// Mock storage for user policies - in a real app this would be in a database
let mockUserPolicies: PolicyPurchase[] = [];

// Interface for a policy purchase
export interface PolicyPurchase {
  address: string;
  riskPoolAddress: string;
  owner: string;
  premium: number;
  coverageAmount: number;
  coverageStart: number;
  coverageEnd: number;
  status: 'active' | 'expired' | 'claimed';
}

// Interface for a transaction record
export interface TransactionRecord {
  signature: string;
  timestamp: number;
  amount: number;
  type: 'premium' | 'claim' | 'refund';
  status: 'confirmed' | 'pending' | 'failed';
  policyId?: string;
  recipient?: string;
  sender?: string;
  description: string;
}

// Mock transaction storage - in a real app this would be in a database
let mockTransactions: TransactionRecord[] = [];

/**
 * Clear user policies for testing
 */
export function clearUserPolicies(): void {
  mockUserPolicies = [];
}

/**
 * Add a policy to the mock storage
 */
export function addUserPolicy(policy: PolicyPurchase): void {
  mockUserPolicies.push(policy);
}

/**
 * Generate a random transaction signature
 */
export function generateTransactionSignature(): string {
  // Format similar to a real Solana transaction signature (base58 encoded string)
  const characters = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let result = '';
  // Solana signatures are typically around 88 characters
  for (let i = 0; i < 88; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

/**
 * Record a new transaction
 */
export function recordTransaction(
  amount: number,
  type: 'premium' | 'claim' | 'refund',
  policyId?: string,
  recipient?: string,
  sender?: string,
  description?: string
): TransactionRecord {
  const transaction: TransactionRecord = {
    signature: generateTransactionSignature(),
    timestamp: Date.now(),
    amount,
    type,
    status: 'confirmed',
    policyId,
    recipient,
    sender,
    description: description || `${type.charAt(0).toUpperCase() + type.slice(1)} payment`
  };
  
  mockTransactions.push(transaction);
  return transaction;
}

/**
 * Get all transactions for a wallet
 */
export function getTransactionsForWallet(walletAddress: string): TransactionRecord[] {
  return mockTransactions.filter(
    tx => tx.sender === walletAddress || tx.recipient === walletAddress
  );
}

/**
 * Clear all transactions for testing
 */
export function clearTransactions(): void {
  mockTransactions = [];
}

/**
 * Get transaction by signature
 */
export function getTransactionBySignature(signature: string): TransactionRecord | null {
  return mockTransactions.find(tx => tx.signature === signature) || null;
}

/**
 * Fetch all available risk pools from the blockchain
 */
export async function fetchRiskPools(): Promise<RiskPool[]> {
  try {
    // In a real implementation, this would query The Graph or directly from the blockchain
    // For now, returning mock data
    return [
      {
        address: '9XyxaG5pY8HnV11fCTfr5CZeDoc8bQ8xHjWSoZpbFmZg',
        name: 'Drought Protection',
        community: 'Farmers Association',
        eventType: 'Drought',
        totalLiquidity: 50000,
        activePolicies: 124,
        totalCoverage: 350000,
        premium: 0.05, // 5% premium rate
      },
      {
        address: '7G3czqbwJBvE7ZtXGGCqoHnz4SXzYjJSFHXXJeab61MT',
        name: 'Flood Protection',
        community: 'Agricultural Cooperative',
        eventType: 'Flood',
        totalLiquidity: 75000,
        activePolicies: 86,
        totalCoverage: 280000,
        premium: 0.04, // 4% premium rate
      },
      {
        address: '4qTETF8synQFJjagLSPKmYKnSDmXURZdtYMM9jNLWY8S',
        name: 'Pest Protection',
        community: 'Crop Growers',
        eventType: 'Pest Infestation',
        totalLiquidity: 30000,
        activePolicies: 52,
        totalCoverage: 120000,
        premium: 0.06, // 6% premium rate
      }
    ];
  } catch (error) {
    console.error('Error fetching risk pools:', error);
    throw error;
  }
}

/**
 * Fetch policies owned by a specific wallet
 * @param walletAddress The owner's wallet address
 */
export async function fetchUserPolicies(walletAddress: string): Promise<PolicyPurchase[]> {
  try {
    // Check if we have any policies in our mock storage
    if (mockUserPolicies.length > 0) {
      // Return only policies owned by this wallet
      return mockUserPolicies.filter(policy => policy.owner === walletAddress);
    }
    
    // If no mock policies exist, create some defaults for demo purposes
    const currentTime = Math.floor(Date.now() / 1000);
    const oneMonthAgo = currentTime - (30 * 24 * 60 * 60);
    const oneMonthAhead = currentTime + (30 * 24 * 60 * 60);
    const twoMonthsAhead = currentTime + (60 * 24 * 60 * 60);
    
    const defaultPolicies = [
      {
        address: '3G7rFrayrmEH8NMpTYD9JjMSKpRBxxXfwwmKvmLVHC4e',
        riskPoolAddress: '9XyxaG5pY8HnV11fCTfr5CZeDoc8bQ8xHjWSoZpbFmZg',
        owner: walletAddress,
        premium: 150,
        coverageAmount: 3000,
        coverageStart: oneMonthAgo,
        coverageEnd: oneMonthAhead,
        status: 'active' as const
      },
      {
        address: '2cRnCkZxoQMZnwKwdVXgCWNYSN6yMCZU88kLKY9WQGP6',
        riskPoolAddress: '7G3czqbwJBvE7ZtXGGCqoHnz4SXzYjJSFHXXJeab61MT',
        owner: walletAddress,
        premium: 200,
        coverageAmount: 5000,
        coverageStart: currentTime,
        coverageEnd: twoMonthsAhead,
        status: 'active' as const
      }
    ];
    
    return defaultPolicies;
  } catch (error) {
    console.error('Error fetching user policies:', error);
    throw error;
  }
}

/**
 * Purchase a new policy from a risk pool
 * @param walletPublicKey The buyer's wallet public key
 * @param riskPoolAddress The risk pool address
 * @param coverageAmount The amount of coverage to purchase
 * @param durationDays The duration of coverage in days
 */
export async function purchasePolicy(
  walletPublicKey: PublicKey,
  riskPoolAddress: string,
  coverageAmount: number,
  durationDays: number
): Promise<{ transaction: Transaction; policyAddress: string }> {
  try {
    // In a real implementation, this would create a transaction that calls the smart contract
    
    // 1. Get risk pool data (in real implementation, fetch from blockchain)
    const riskPool = (await fetchRiskPools()).find(pool => pool.address === riskPoolAddress);
    if (!riskPool) {
      throw new Error('Risk pool not found');
    }
    
    // 2. Calculate premium amount
    const premiumAmount = coverageAmount * riskPool.premium;
    console.log(`Premium amount: ${premiumAmount} for coverage: ${coverageAmount}`);
    
    // 3. Create a transaction (in real implementation, this would call the program)
    const transaction = new Transaction();
    
    // Add some realistic SOL amount for the demo based on premium
    const lamports = Math.max(0.005, premiumAmount / 1000) * LAMPORTS_PER_SOL;
    console.log(`Setting transaction amount to ${lamports / LAMPORTS_PER_SOL} SOL`);
    
    // This is a mock - in reality, this would be creating a program call to the risk pool contract
    // to purchase a policy, not just a simple transfer
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: walletPublicKey,
        toPubkey: new PublicKey(riskPoolAddress),
        lamports: Math.round(lamports),  // Ensure it's an integer
      })
    );
    
    // Get connection to set recent blockhash
    const connection = getConnection();
    const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash('finalized');
    transaction.recentBlockhash = blockhash;
    transaction.lastValidBlockHeight = lastValidBlockHeight;
    transaction.feePayer = walletPublicKey;
    
    // 4. In reality, this would be calculated on-chain based on program logic
    // For mock, we'll generate a random policy address
    const policyAddress = new PublicKey(Keypair.generate().publicKey).toString();
    
    // We would use durationDays to set the coverage period in a real implementation
    console.log(`Creating policy with ${durationDays} days coverage`);
    
    return {
      transaction,
      policyAddress
    };
  } catch (error) {
    console.error('Error creating policy purchase transaction:', error);
    throw error;
  }
}

/**
 * Check if a policy is eligible for a claim
 * @param policyAddress The policy address
 */
export async function checkPolicyClaimEligibility(policyAddress: string): Promise<{
  eligible: boolean;
  reason: string;
}> {
  try {
    // In a real implementation, this would query oracle data and the smart contract
    // For mock purposes, randomly determine eligibility based on policy address hash
    const addressBuffer = Buffer.from(policyAddress);
    const addressSum = Array.from(addressBuffer).reduce((sum, byte) => sum + byte, 0);
    const eligible = addressSum % 3 === 0; // Use policy address to deterministically decide eligibility
    
    return {
      eligible,
      reason: eligible 
        ? 'Drought conditions detected in your area' 
        : 'No qualifying events detected in your area',
    };
  } catch (error) {
    console.error('Error checking policy claim eligibility:', error);
    throw error;
  }
} 