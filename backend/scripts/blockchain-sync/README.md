# Solana Blockchain Data Sync for Appwrite

This service syncs data from the Solana blockchain to your Appwrite database using The Graph as an indexing layer.

## Architecture

```
Solana Blockchain ──> The Graph (Subgraph / Firehose)
                          ↓ GraphQL Query
                    This Go Service
                          ↓ Appwrite SDK/API
                   Appwrite Database (stores latest on-chain data)
```

## Features

- Syncs insurance policy data from Solana smart contracts to Appwrite
- Syncs on-chain transactions to Appwrite
- Periodic sync with configurable interval
- Handles duplicates and updates
- Docker containerized for easy deployment

## Prerequisites

- Appwrite instance with collections set up for policies and transactions
- The Graph subgraph indexing your Solana smart contract
- Docker (for containerized deployment)

## Setup

1. Clone the repository
2. Copy the example environment file:
   ```
   cp blockchain-sync.env.example .env
   ```
3. Edit the `.env` file and add your configuration values:
   - Appwrite credentials and collection IDs
   - The Graph endpoint for your subgraph
   - Sync interval configuration

## Running Locally

```bash
# Using Go directly
go run main.go

# Or build and run the binary
go build -o blockchain-sync
./blockchain-sync
```

## Docker Deployment

```bash
# Build the Docker image
docker build -t ahotor-blockchain-sync .

# Run the container
docker run -d --name blockchain-sync ahotor-blockchain-sync
```

## Subgraph Requirements

Your subgraph should index the following entities:

### Policies

```graphql
type Policy @entity {
  id: ID!
  owner: String!
  riskPoolId: String!
  coverageAmount: String!
  premium: String!
  startTime: BigInt!
  endTime: BigInt!
  status: String!
  locationLat: Float!
  locationLon: Float!
  triggerType: String!
  triggerThreshold: String!
  createdAt: BigInt!
  claimTime: BigInt
}
```

### Transactions

```graphql
type Transaction @entity {
  id: ID!
  type: String!
  amount: String!
  timestamp: BigInt!
  status: String!
  policyId: String
  riskPoolId: String
  sender: String!
  receiver: String!
  txHash: String!
}
```

## Development

### Adding New Entities

To add a new entity type to sync:

1. Add the GraphQL query in the appropriate function
2. Create a corresponding struct to unmarshal the data
3. Add a conversion function to transform the data for Appwrite
4. Add a sync function similar to `syncPolicies` or `syncTransactions`
5. Update the main loop to include your new sync function

## License

MIT 