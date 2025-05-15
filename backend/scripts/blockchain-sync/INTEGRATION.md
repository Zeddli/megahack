# Blockchain Data Integration Guide

This guide explains how the blockchain data from Solana is integrated with the Appwrite database and made available through the backend API.

## Architecture

```
Solana Blockchain ──> The Graph (Subgraph) ──> Go Sync Service ──> Appwrite Database ──> Backend API ──> Frontend
```

## Components

1. **Solana Smart Contract**: The on-chain insurance contract that handles policies, claims, and transactions.

2. **The Graph Subgraph**: Indexes events from the Solana contract and provides a GraphQL endpoint.

3. **Go Sync Service**: Periodically queries The Graph and syncs data to Appwrite collections.

4. **Appwrite Database**: Stores the structured blockchain data in collections.

5. **Backend API**: Provides endpoints to access the blockchain data, including the new `/users/wallet-data` endpoint.

## Wallet Data Endpoint

The backend now includes a new endpoint to fetch blockchain data related to the user's wallet:

- **Endpoint**: `GET /users/wallet-data`
- **Authentication**: Required (Bearer token)
- **Response**: JSON with wallet address, policies, transactions, and summary statistics

### Sample Response

```json
{
  "success": true,
  "data": {
    "walletAddress": "7Vz3S6jKDWT4qXrr2xJAVVmJe7Hqq5WFQ9m8zX9q4Zj2",
    "policies": [
      {
        "$id": "unique_policy_id",
        "blockchainId": "policy_id_on_chain",
        "owner": "7Vz3S6jKDWT4qXrr2xJAVVmJe7Hqq5WFQ9m8zX9q4Zj2",
        "riskPoolId": "pool_id",
        "coverageAmount": "1000000000",
        "premiumAmount": "50000000",
        "status": "Active",
        "location": {
          "latitude": 5.6037,
          "longitude": -0.1870
        },
        "triggers": {
          "type": "RainfallShortage",
          "threshold": "100"
        }
      }
    ],
    "transactions": [
      {
        "$id": "unique_tx_id",
        "blockchainId": "tx_id_on_chain",
        "type": "POLICY_PURCHASE",
        "amount": "50000000",
        "timestamp": "2023-05-15T10:30:00Z",
        "status": "COMPLETED",
        "sender": "7Vz3S6jKDWT4qXrr2xJAVVmJe7Hqq5WFQ9m8zX9q4Zj2",
        "receiver": "risk_pool_address"
      }
    ],
    "summary": {
      "totalActivePolicies": 1,
      "totalPolicyValue": 1000000000,
      "totalTransactions": 1
    }
  }
}
```

## Setting Up the Integration

1. **Environment Configuration**:
   - Ensure all Appwrite configuration variables are set in the .env file
   - Set The Graph endpoint for your Solana subgraph

2. **Running the Sync Service**:
   ```bash
   cd scripts/blockchain-sync
   ./setup.sh
   go run main.go
   ```

3. **Adding Wallet Address to User Accounts**:
   - Users can link their Solana wallet via the `/users/link-wallet` endpoint
   - This associates blockchain activity with their user account

## Troubleshooting

If you're receiving a "Failed to fetch wallet data: 404 Not Found" error:

1. Ensure the user has a wallet address linked to their account
2. Verify that the blockchain sync service is running and has synced data
3. Check that the Appwrite collection IDs are correctly set in the environment variables
4. Verify that the user's wallet address matches the format used in the blockchain (case-sensitive)

## Development Notes

- The wallet data endpoint filters policies and transactions by the user's wallet address
- Summary statistics are calculated based on the policies and transactions found
- All blockchain data is read-only; write operations must happen on-chain

For more details on the blockchain sync service, see the [README.md](./README.md) file. 