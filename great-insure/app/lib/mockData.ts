// Mock data store for policies and transactions
interface Policy {
  id: string;
  riskPoolId: string;
  riskPoolName: string;
  coverageAmount: string;
  premium: string;
  startDate: string;
  endDate: string;
  status: 'ACTIVE' | 'EXPIRED' | 'CLAIMED';
  contractAddress: string;
}

interface Transaction {
  id: string;
  type: 'PURCHASE' | 'CLAIM';
  amount: string;
  status: 'COMPLETED' | 'PENDING' | 'FAILED';
  timestamp: string;
  txHash: string;
  policyId?: string;
}

// Generate random hex string for addresses
const generateRandomAddress = () => {
  return '0x' + Array.from({ length: 40 }, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
};

// Mock data store
class MockDataStore {
  private policies: Map<string, Policy[]> = new Map();
  private transactions: Map<string, Transaction[]> = new Map();

  // Add a new policy
  addPolicy(
    walletAddress: string,
    riskPoolId: string,
    riskPoolName: string,
    coverageAmount?: string,
    premiumAmount?: string,
    contractAddress?: string,
    txHash?: string
  ) {
    const policy: Policy = {
      id: Date.now().toString(),
      riskPoolId,
      riskPoolName,
      coverageAmount: coverageAmount || '100 SOL',
      premium: premiumAmount || '10 SOL',
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
      status: 'ACTIVE',
      contractAddress: contractAddress || generateRandomAddress()
    };

    const userPolicies = this.policies.get(walletAddress) || [];
    this.policies.set(walletAddress, [...userPolicies, policy]);

    // Add corresponding transaction
    const transaction: Transaction = {
      id: Date.now().toString(),
      type: 'PURCHASE',
      amount: premiumAmount || '10 SOL',
      status: 'COMPLETED',
      timestamp: new Date().toISOString(),
      txHash: txHash || generateRandomAddress(),
      policyId: policy.id
    };

    const userTransactions = this.transactions.get(walletAddress) || [];
    this.transactions.set(walletAddress, [...userTransactions, transaction]);

    return { policy, transaction };
  }

  // Get user policies
  getPolicies(walletAddress: string): Policy[] {
    return this.policies.get(walletAddress) || [];
  }

  // Get user transactions
  getTransactions(walletAddress: string): Transaction[] {
    return this.transactions.get(walletAddress) || [];
  }

  // Clear user data
  clearUserData(walletAddress: string) {
    this.policies.delete(walletAddress);
    this.transactions.delete(walletAddress);
  }
}

export const mockDataStore = new MockDataStore(); 