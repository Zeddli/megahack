import { 
  Connection, 
  Transaction, 
  PublicKey, 
  SystemProgram, 
  LAMPORTS_PER_SOL, 
  SendOptions 
} from '@solana/web3.js';
import { RiskPool } from './blockchain';

/**
 * Creates a simple SOL transfer transaction for policy purchase
 * Bypasses the API for simplicity
 */
export async function createPolicyPurchaseTransaction(
  connection: Connection,
  walletPublicKey: PublicKey,
  riskPoolAddress: string,
  coverageAmount: number,
  durationDays: number,
  riskPools: RiskPool[]
): Promise<Transaction> {
  console.log('Creating direct policy transaction...');
  
  // Find the risk pool
  const riskPool = riskPools.find(pool => pool.address === riskPoolAddress);
  if (!riskPool) {
    throw new Error('Risk pool not found');
  }
  
  // Calculate a reasonable premium amount based on coverage
  const premiumInSol = Math.max(0.001, coverageAmount * riskPool.premium / 1000);
  console.log(`Setting premium to ${premiumInSol} SOL for ${coverageAmount} coverage`);
  
  // Create a simple transaction
  const transaction = new Transaction();
  
  // Create simple SystemProgram transfer instruction
  transaction.add(
    SystemProgram.transfer({
      fromPubkey: walletPublicKey,
      toPubkey: new PublicKey(riskPoolAddress),
      lamports: Math.round(premiumInSol * LAMPORTS_PER_SOL),
    })
  );
  
  // Set recent blockhash directly
  const { blockhash } = await connection.getLatestBlockhash('confirmed');
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = walletPublicKey;
  
  return transaction;
}

/**
 * Recommended transaction send options for Solana
 */
export const DEFAULT_SEND_OPTIONS: SendOptions = {
  skipPreflight: false,
  preflightCommitment: 'processed'
}; 