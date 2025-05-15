# Ahotor Protocol Backend

This is the backend for the Ahotor Protocol, a decentralized parametric insurance platform.

## Wallet Integration

The backend now includes a `/users/wallet-data` endpoint that provides blockchain data related to the user's wallet address. This endpoint fetches data from Appwrite collections that are continuously synchronized with the blockchain by our Go-based blockchain sync service.

### How to Use

1. Make a GET request to `/users/wallet-data` with a valid Bearer token
2. The endpoint returns:
   - Linked wallet address
   - Policies owned by the wallet
   - Transactions involving the wallet
   - Summary statistics

### Error Fixing

If you're seeing a "Failed to fetch wallet data: 404 Not Found" error, please check the following:

1. Ensure the user has linked a wallet address to their account
2. Verify that the blockchain sync service is running and properly configured
3. Check that the correct collection IDs are set in the environment variables

## Blockchain Sync Service

The service in `scripts/blockchain-sync` connects to The Graph to fetch data from the Solana blockchain and syncs it to Appwrite collections.

### Running the Service

```bash
cd scripts/blockchain-sync
# Copy the .env.example file to .env and update with your configuration
cp .env.example .env
# Edit the .env file with your configuration values
# Then run the service
go run main.go
# Or build and run the binary
go build -o blockchain-sync
./blockchain-sync
```

## API Documentation

See the Swagger documentation at `/api-docs` when the server is running. 