# Great Insure API Documentation

This document outlines the API endpoints available for integration with the Great Insure platform.

## Authentication

All API requests require authentication using a wallet signature.

### Base URL

```
https://api.greatinsure.com/v1
```

### Headers

All requests must include:

```
Authorization: Bearer <token>
Content-Type: application/json
```

## Wallet Authentication

### Connect Wallet

```
POST /auth/connect
```

Authenticates a user with their blockchain wallet.

#### Request Body

```json
{
  "walletAddress": "7LPQPi...mqPJ",
  "signature": "base64_encoded_signature",
  "message": "Sign this message to connect to Great Insure: [nonce]"
}
```

#### Response

```json
{
  "success": true,
  "token": "jwt_token_here",
  "expiresIn": 86400,
  "user": {
    "walletAddress": "7LPQPi...mqPJ",
    "balance": 10.5
  }
}
```

### Disconnect Wallet

```
POST /auth/disconnect
```

Terminates the current session.

#### Response

```json
{
  "success": true,
  "message": "Wallet disconnected successfully"
}
```

## Risk Pools

### Get All Risk Pools

```
GET /risk-pools
```

Retrieves all available risk pools.

#### Response

```json
{
  "success": true,
  "data": [
    {
      "address": "9XyxaG5pY8HnV11fCTfr5CZeDoc8bQ8xHjWSoZpbFmZg",
      "name": "Drought Protection",
      "community": "Farmers Association",
      "eventType": "Drought",
      "totalLiquidity": 50000,
      "activePolicies": 124,
      "totalCoverage": 350000,
      "premium": 0.05
    },
    {
      "address": "7G3czqbwJBvE7ZtXGGCqoHnz4SXzYjJSFHXXJeab61MT",
      "name": "Flood Protection",
      "community": "Agricultural Cooperative",
      "eventType": "Flood",
      "totalLiquidity": 75000,
      "activePolicies": 86,
      "totalCoverage": 280000,
      "premium": 0.04
    }
  ]
}
```

### Get Risk Pool Details

```
GET /risk-pools/:address
```

Retrieves details for a specific risk pool.

#### Response

```json
{
  "success": true,
  "data": {
    "address": "9XyxaG5pY8HnV11fCTfr5CZeDoc8bQ8xHjWSoZpbFmZg",
    "name": "Drought Protection",
    "community": "Farmers Association",
    "eventType": "Drought",
    "totalLiquidity": 50000,
    "activePolicies": 124,
    "totalCoverage": 350000,
    "premium": 0.05,
    "description": "Protection against crop loss due to drought conditions",
    "regionsCovered": ["East Africa", "South Asia", "Southern Europe"],
    "createdAt": "2023-04-15T12:00:00Z"
  }
}
```

## Policies

### Get User Policies

```
GET /policies
```

Retrieves all policies owned by the authenticated user.

#### Response

```json
{
  "success": true,
  "data": [
    {
      "address": "3G7rFrayrmEH8NMpTYD9JjMSKpRBxxXfwwmKvmLVHC4e",
      "riskPoolAddress": "9XyxaG5pY8HnV11fCTfr5CZeDoc8bQ8xHjWSoZpbFmZg",
      "owner": "7LPQPi...mqPJ",
      "premium": 150,
      "coverageAmount": 3000,
      "coverageStart": 1682150400,
      "coverageEnd": 1695600000,
      "status": "active"
    }
  ]
}
```

### Get Policy Details

```
GET /policies/:address
```

Retrieves details for a specific policy.

#### Response

```json
{
  "success": true,
  "data": {
    "address": "3G7rFrayrmEH8NMpTYD9JjMSKpRBxxXfwwmKvmLVHC4e",
    "riskPoolAddress": "9XyxaG5pY8HnV11fCTfr5CZeDoc8bQ8xHjWSoZpbFmZg",
    "riskPoolName": "Drought Protection",
    "owner": "7LPQPi...mqPJ",
    "premium": 150,
    "coverageAmount": 3000,
    "coverageStart": 1682150400,
    "coverageEnd": 1695600000,
    "status": "active",
    "region": "East Africa",
    "createdAt": "2023-05-01T08:45:30Z",
    "transactions": [
      {
        "signature": "5KyP2TcnYm9Ks7a4QR4HNzwrP5ShuuA8KVvQQJ8r4FB8n6cW",
        "type": "premium",
        "amount": 150,
        "timestamp": 1682150400,
        "status": "confirmed"
      }
    ]
  }
}
```

### Purchase Policy

```
POST /policies
```

Creates a new insurance policy.

#### Request Body

```json
{
  "riskPoolAddress": "9XyxaG5pY8HnV11fCTfr5CZeDoc8bQ8xHjWSoZpbFmZg",
  "coverageAmount": 3000,
  "durationDays": 180
}
```

#### Response

```json
{
  "success": true,
  "data": {
    "policyAddress": "3G7rFrayrmEH8NMpTYD9JjMSKpRBxxXfwwmKvmLVHC4e",
    "transaction": {
      "signature": "5KyP2TcnYm9Ks7a4QR4HNzwrP5ShuuA8KVvQQJ8r4FB8n6cW",
      "status": "confirmed"
    },
    "premium": 150,
    "coverageAmount": 3000,
    "coverageStart": 1682150400,
    "coverageEnd": 1695600000
  }
}
```

### Check Claim Eligibility

```
GET /policies/:address/eligibility
```

Checks if a policy is eligible for a claim.

#### Response

```json
{
  "success": true,
  "data": {
    "eligible": true,
    "reason": "Recent weather events qualify you for a claim. You can submit your claim now.",
    "weatherData": {
      "region": "East Africa",
      "condition": "drought",
      "temperature": 38,
      "humidity": 15,
      "lastUpdated": "2023-06-15T12:30:45Z"
    }
  }
}
```

### Submit Claim

```
POST /policies/:address/claims
```

Submits a claim for an eligible policy.

#### Request Body

```json
{
  "description": "Crop damage due to prolonged drought in the region",
  "attachments": ["ipfs://QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ"]
}
```

#### Response

```json
{
  "success": true,
  "data": {
    "claimId": "c0FFee76388",
    "status": "processing",
    "transaction": {
      "signature": "4X1ZQHbR8HKPXvzN5kYfn3VFD3wqyA3d8qCJ9uQnMFrT",
      "status": "confirmed"
    },
    "estimatedPayout": 2500,
    "estimatedProcessingTime": "10 minutes"
  }
}
```

## Transactions

### Get User Transactions

```
GET /transactions
```

Retrieves all transactions for the authenticated user.

#### Query Parameters

| Parameter | Type   | Description                            |
|-----------|--------|----------------------------------------|
| limit     | number | Maximum number of results (default: 20)|
| offset    | number | Pagination offset (default: 0)         |
| type      | string | Filter by transaction type             |
| status    | string | Filter by transaction status           |

#### Response

```json
{
  "success": true,
  "data": {
    "transactions": [
      {
        "signature": "5KyP2TcnYm9Ks7a4QR4HNzwrP5ShuuA8KVvQQJ8r4FB8n6cW",
        "timestamp": 1682150400,
        "amount": 150,
        "type": "premium",
        "status": "confirmed",
        "policyId": "3G7rFrayrmEH8NMpTYD9JjMSKpRBxxXfwwmKvmLVHC4e",
        "recipient": "9XyxaG5pY8HnV11fCTfr5CZeDoc8bQ8xHjWSoZpbFmZg",
        "sender": "7LPQPi...mqPJ",
        "description": "Premium payment for Drought Protection policy"
      }
    ],
    "pagination": {
      "total": 5,
      "limit": 20,
      "offset": 0
    }
  }
}
```

### Get Transaction Details

```
GET /transactions/:signature
```

Retrieves details for a specific transaction.

#### Response

```json
{
  "success": true,
  "data": {
    "signature": "5KyP2TcnYm9Ks7a4QR4HNzwrP5ShuuA8KVvQQJ8r4FB8n6cW",
    "timestamp": 1682150400,
    "amount": 150,
    "type": "premium",
    "status": "confirmed",
    "policyId": "3G7rFrayrmEH8NMpTYD9JjMSKpRBxxXfwwmKvmLVHC4e",
    "recipient": "9XyxaG5pY8HnV11fCTfr5CZeDoc8bQ8xHjWSoZpbFmZg",
    "sender": "7LPQPi...mqPJ",
    "description": "Premium payment for Drought Protection policy",
    "blockNumber": 189457345,
    "fee": 0.000005,
    "confirmedAt": "2023-05-01T08:45:30Z"
  }
}
```

## Weather Data

### Get Weather By Region

```
GET /weather/:region
```

Retrieves current weather data for a specific region.

#### Response

```json
{
  "success": true,
  "data": {
    "region": "East Africa",
    "condition": "drought",
    "temperature": 38,
    "humidity": 15,
    "riskLevel": "high",
    "lastUpdated": "2023-06-15T12:30:45Z",
    "forecast": [
      {
        "date": "2023-06-16",
        "condition": "drought",
        "temperature": 39,
        "humidity": 12
      },
      {
        "date": "2023-06-17",
        "condition": "drought",
        "temperature": 40,
        "humidity": 10
      }
    ]
  }
}
```

### Get All Regions

```
GET /weather/regions
```

Retrieves all available regions with current conditions.

#### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "east-africa",
      "name": "East Africa",
      "condition": "drought",
      "riskLevel": "high"
    },
    {
      "id": "south-asia",
      "name": "South Asia",
      "condition": "rainy",
      "riskLevel": "medium"
    },
    {
      "id": "southern-europe",
      "name": "Southern Europe",
      "condition": "sunny",
      "riskLevel": "low"
    }
  ]
}
```

## Error Handling

All API endpoints return appropriate HTTP status codes:

- `200 OK`: Request successful
- `400 Bad Request`: Invalid request parameters
- `401 Unauthorized`: Missing or invalid authentication
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

Error responses follow this format:

```json
{
  "success": false,
  "error": {
    "code": "INVALID_PARAMETERS",
    "message": "Coverage amount must be greater than zero",
    "details": {
      "field": "coverageAmount",
      "constraint": "min",
      "value": 0
    }
  }
}
```

## Rate Limiting

API requests are limited to 100 requests per minute per user. Rate limit information is included in the response headers:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1623766367
```

## Webhook Integration

Great Insure offers webhooks for real-time updates on:
- Policy status changes
- Claim status updates
- Weather alerts for monitored regions

To set up webhooks, contact the developer team for integration details.

