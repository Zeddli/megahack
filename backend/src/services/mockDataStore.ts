// Simple in-memory data store
interface User {
  id: string;
  walletAddress: string;
  accountStatus: string;
  activePolicies: number;
  totalCoverage: number;
}

interface Policy {
  id: string;
  userId: string;
  status: 'ACTIVE' | 'INACTIVE';
  coverageAmount: number;
  riskPoolId: string;
}

class MockDataStore {
  private users: Map<string, User> = new Map();
  private policies: Map<string, Policy> = new Map();

  constructor() {
    // Initialize with some mock data
    this.users.set('8dRGxRZYGZ71qt4zQAXVJNfQvTercVGPNHbyt3umaovm', {
      id: '1',
      walletAddress: '8dRGxRZYGZ71qt4zQAXVJNfQvTercVGPNHbyt3umaovm',
      accountStatus: 'Active',
      activePolicies: 3,
      totalCoverage: 4500
    });
  }

  async getUserByWalletAddress(walletAddress: string): Promise<User | null> {
    return this.users.get(walletAddress) || null;
  }

  async getActivePoliciesByUserId(userId: string): Promise<Policy[]> {
    return Array.from(this.policies.values())
      .filter(policy => policy.userId === userId && policy.status === 'ACTIVE');
  }

  async createUser(user: Omit<User, 'id'>): Promise<User> {
    const id = Date.now().toString();
    const newUser = { ...user, id };
    this.users.set(user.walletAddress, newUser);
    return newUser;
  }

  async updateUser(walletAddress: string, data: Partial<User>): Promise<User | null> {
    const user = this.users.get(walletAddress);
    if (!user) return null;

    const updatedUser = { ...user, ...data };
    this.users.set(walletAddress, updatedUser);
    return updatedUser;
  }
}

export const mockDataStore = new MockDataStore(); 