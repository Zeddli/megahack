import { Policy, RiskPool, CapitalProvider, Transaction, OracleData, Claim } from "../generated/schema";
import { 
  RegisterUser, 
  InitializeRiskPool,
  AddCapital,
  PurchasePolicy,
  RecordOracleData,
  ClaimPolicy
} from "../generated/InsuranceContract/InsuranceContract";

export function handleRegisterUser(event: RegisterUser): void {
  // No need to create a User entity for this example
  // But we might record a transaction for user registration
  let txId = event.transaction.id.toHexString() + "-" + event.logIndex.toString();
  let transaction = new Transaction(txId);
  
  transaction.type = "USER_REGISTRATION";
  transaction.amount = "0";
  transaction.timestamp = event.block.timestamp;
  transaction.status = "COMPLETED";
  transaction.sender = event.params.authority.toHexString();
  transaction.receiver = event.address.toHexString();
  transaction.txHash = event.transaction.hash.toHexString();
  transaction.block = event.block.number;
  
  transaction.save();
}

export function handleInitializeRiskPool(event: InitializeRiskPool): void {
  let riskPoolId = event.params.riskPool.toHexString();
  let riskPool = new RiskPool(riskPoolId);
  
  riskPool.authority = event.params.authority.toHexString();
  riskPool.name = event.params.poolName;
  riskPool.riskType = event.params.riskType.toString();
  riskPool.totalFunds = "0";
  riskPool.allocatedFunds = "0";
  riskPool.minCapitalRequirement = event.params.minCapitalRequirement.toString();
  riskPool.active = true;
  riskPool.createdAt = event.block.timestamp;
  
  riskPool.save();
  
  // Create transaction
  let txId = event.transaction.id.toHexString() + "-" + event.logIndex.toString();
  let transaction = new Transaction(txId);
  
  transaction.type = "POOL_CREATION";
  transaction.amount = "0";
  transaction.timestamp = event.block.timestamp;
  transaction.status = "COMPLETED";
  transaction.riskPoolId = riskPoolId;
  transaction.sender = event.params.authority.toHexString();
  transaction.receiver = event.address.toHexString();
  transaction.txHash = event.transaction.hash.toHexString();
  transaction.block = event.block.number;
  
  transaction.save();
}

export function handleAddCapital(event: AddCapital): void {
  let capProviderId = event.transaction.from.toHexString() + "-" + event.params.riskPool.toHexString();
  let capitalProvider = CapitalProvider.load(capProviderId);
  
  if (capitalProvider == null) {
    capitalProvider = new CapitalProvider(capProviderId);
    capitalProvider.authority = event.transaction.from.toHexString();
    capitalProvider.riskPool = event.params.riskPool.toHexString();
    capitalProvider.stakeAmount = "0";
    capitalProvider.addedAt = event.block.timestamp;
  }
  
  // Update stake amount
  let newStakeAmount = capitalProvider.stakeAmount;
  // In a real implementation, properly handle big number addition
  let newStakeAmountValue = BigInt(newStakeAmount) + event.params.amount.toBigInt();
  capitalProvider.stakeAmount = newStakeAmountValue.toString();
  capitalProvider.lastUpdate = event.block.timestamp;
  
  capitalProvider.save();
  
  // Update risk pool
  let riskPool = RiskPool.load(event.params.riskPool.toHexString());
  if (riskPool != null) {
    // Update total funds
    let newTotal = BigInt(riskPool.totalFunds) + event.params.amount.toBigInt();
    riskPool.totalFunds = newTotal.toString();
    riskPool.save();
  }
  
  // Create transaction
  let txId = event.transaction.id.toHexString() + "-" + event.logIndex.toString();
  let transaction = new Transaction(txId);
  
  transaction.type = "STAKE_CAPITAL";
  transaction.amount = event.params.amount.toString();
  transaction.timestamp = event.block.timestamp;
  transaction.status = "COMPLETED";
  transaction.riskPoolId = event.params.riskPool.toHexString();
  transaction.sender = event.transaction.from.toHexString();
  transaction.receiver = event.address.toHexString();
  transaction.txHash = event.transaction.hash.toHexString();
  transaction.block = event.block.number;
  
  transaction.save();
}

export function handlePurchasePolicy(event: PurchasePolicy): void {
  let policyId = event.params.policy.toHexString();
  let policy = new Policy(policyId);
  
  policy.owner = event.params.owner.toHexString();
  policy.riskPoolId = event.params.riskPool.toHexString();
  policy.coverageAmount = event.params.coverageAmount.toString();
  policy.premium = event.params.premium.toString();
  policy.startTime = event.params.startTime;
  policy.duration = event.params.duration;
  policy.endTime = event.params.endTime;
  policy.status = "Active";
  policy.locationLat = event.params.locationLat;
  policy.locationLon = event.params.locationLon;
  policy.triggerType = event.params.triggerType.toString();
  policy.triggerThreshold = event.params.triggerThreshold.toString();
  policy.createdAt = event.block.timestamp;
  
  policy.save();
  
  // Update risk pool
  let riskPool = RiskPool.load(event.params.riskPool.toHexString());
  if (riskPool != null) {
    // Update allocated funds
    let newAllocated = BigInt(riskPool.allocatedFunds) + event.params.coverageAmount.toBigInt();
    riskPool.allocatedFunds = newAllocated.toString();
    
    // Update total funds with premium
    let newTotal = BigInt(riskPool.totalFunds) + event.params.premium.toBigInt();
    riskPool.totalFunds = newTotal.toString();
    
    riskPool.save();
  }
  
  // Create transaction
  let txId = event.transaction.id.toHexString() + "-" + event.logIndex.toString();
  let transaction = new Transaction(txId);
  
  transaction.type = "POLICY_PURCHASE";
  transaction.amount = event.params.premium.toString();
  transaction.timestamp = event.block.timestamp;
  transaction.status = "COMPLETED";
  transaction.policyId = policyId;
  transaction.riskPoolId = event.params.riskPool.toHexString();
  transaction.sender = event.transaction.from.toHexString();
  transaction.receiver = event.address.toHexString();
  transaction.txHash = event.transaction.hash.toHexString();
  transaction.block = event.block.number;
  
  transaction.save();
}

export function handleRecordOracleData(event: RecordOracleData): void {
  let oracleDataId = event.transaction.id.toHexString() + "-" + event.logIndex.toString();
  let oracleData = new OracleData(oracleDataId);
  
  oracleData.oracle = event.params.oracle.toHexString();
  oracleData.oracleType = event.params.oracleType.toString();
  oracleData.dataValue = event.params.dataValue.toString();
  oracleData.reportedAt = event.params.timestamp;
  oracleData.locationLat = event.params.locationLat;
  oracleData.locationLon = event.params.locationLon;
  oracleData.recordedAt = event.block.timestamp;
  
  oracleData.save();
}

export function handleClaimPolicy(event: ClaimPolicy): void {
  // Update policy status
  let policyId = event.params.policy.toHexString();
  let policy = Policy.load(policyId);
  
  if (policy != null) {
    policy.status = "Claimed";
    policy.claimTime = event.block.timestamp;
    policy.save();
  }
  
  // Create claim record
  let claimId = event.transaction.id.toHexString() + "-" + event.logIndex.toString();
  let claim = new Claim(claimId);
  
  claim.policy = policyId;
  claim.oracleData = event.params.oracleData.toHexString();
  claim.amount = event.params.amount.toString();
  claim.claimant = event.params.claimant.toHexString();
  claim.timestamp = event.block.timestamp;
  claim.txHash = event.transaction.hash.toHexString();
  
  claim.save();
  
  // Update risk pool
  let riskPoolId = event.params.riskPool.toHexString();
  let riskPool = RiskPool.load(riskPoolId);
  
  if (riskPool != null) {
    // Update total funds
    let newTotal = BigInt(riskPool.totalFunds) - event.params.amount.toBigInt();
    riskPool.totalFunds = newTotal.toString();
    
    // Update allocated funds
    let newAllocated = BigInt(riskPool.allocatedFunds) - event.params.amount.toBigInt();
    riskPool.allocatedFunds = newAllocated.toString();
    
    riskPool.save();
  }
  
  // Create transaction
  let txId = event.transaction.id.toHexString() + "-" + event.logIndex.toString();
  let transaction = new Transaction(txId);
  
  transaction.type = "POLICY_CLAIM";
  transaction.amount = event.params.amount.toString();
  transaction.timestamp = event.block.timestamp;
  transaction.status = "COMPLETED";
  transaction.policyId = policyId;
  transaction.riskPoolId = riskPoolId;
  transaction.sender = event.address.toHexString();
  transaction.receiver = event.params.claimant.toHexString();
  transaction.txHash = event.transaction.hash.toHexString();
  transaction.block = event.block.number;
  
  transaction.save();
} 