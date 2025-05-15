# Ahotor Protocol API Documentation

## Introduction

The Ahotor Protocol provides a RESTful API for managing parametric insurance policies, risk pools, and related data. This documentation describes how to use the API, including authentication, available endpoints, and example requests and responses.

## Base URL

All API requests should be made to the base URL:

```
http://localhost:3001/api
```

For production environments, replace with the appropriate domain.

## Interactive API Documentation

Interactive API documentation is available via Swagger UI at:

```
http://localhost:3001/api-docs
```

This provides a comprehensive, interactive guide to all available endpoints with the ability to test requests directly from the browser.

## Authentication

The API uses JWT (JSON Web Token) for authentication. To access protected endpoints, you must include the JWT token in the Authorization header of your request:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

### Getting a Token

You can obtain a JWT token by authenticating through the login endpoint:

```
POST /api/users/login
```

with a JSON body containing your credentials:

```json
{
  "email": "your.email@example.com",
  "password": "your_password"
}
```

The response will include a token that you can use for subsequent authenticated requests.

## Authentication Flow

1. Register a user (if not already registered)
2. Login to get a JWT token
3. Include the token in the Authorization header for protected endpoints

## API Endpoints

The API is organized around the following resources:

### Users
- `POST /users/register` - Register a new user
- `POST /users/login` - Login and get a JWT token
- `GET /users/profile` - Get your user profile (authenticated)
- `PUT /users/profile` - Update your user profile (authenticated)
- `GET /users` - Get all users (admin only)

### Communities
- `GET /communities` - Get all communities
- `GET /communities/{id}` - Get community by ID
- `POST /communities` - Create a new community (authenticated)
- `PUT /communities/{id}` - Update a community (authenticated)
- `DELETE /communities/{id}` - Delete a community (authenticated)

### Event Types
- `GET /event-types` - Get all event types
- `GET /event-types/{id}` - Get event type by ID
- `POST /event-types` - Create a new event type (authenticated)
- `PUT /event-types/{id}` - Update an event type (authenticated)
- `DELETE /event-types/{id}` - Delete an event type (authenticated)

### Risk Pools
- `GET /risk-pools` - Get all risk pools
- `GET /risk-pools/{id}` - Get risk pool by ID
- `POST /risk-pools` - Create a new risk pool (authenticated)
- `PUT /risk-pools/{id}` - Update a risk pool (authenticated)
- `DELETE /risk-pools/{id}` - Delete a risk pool (authenticated)
- `POST /risk-pools/{id}/capital` - Add capital provider to risk pool (authenticated)
- `DELETE /risk-pools/{id}/capital/{providerId}` - Remove capital provider (authenticated)

### Policies
- `GET /policies` - Get all policies (authenticated)
- `GET /policies/{id}` - Get policy by ID (authenticated)
- `POST /policies` - Create a new policy (authenticated)
- `PUT /policies/{id}/cancel` - Cancel a policy (authenticated)
- `POST /policies/{id}/claim` - Initiate claim for a policy (authenticated)
- `POST /policies/premium-calculator` - Calculate premium for a potential policy (authenticated)

### Oracle Data
- `GET /oracles/sources` - Get all oracle data sources (authenticated)
- `GET /oracles/sources/{id}` - Get oracle source by ID (authenticated)
- `POST /oracles/sources` - Create a new oracle data source (admin)
- `GET /oracles/data` - Get oracle data records (authenticated)
- `GET /oracles/data/{id}` - Get oracle data record by ID (authenticated)
- `POST /oracles/refresh/{sourceId}` - Trigger oracle data refresh (admin)

### Payments
- `POST /payments/premium` - Process premium payment (authenticated)
- `GET /payments/verify/{paymentId}` - Verify payment status (authenticated)
- `GET /payments/user` - Get all payments for current user (authenticated)
- `GET /payments/payouts` - Get all payouts for current user (authenticated)
- `GET /payments/payouts/{id}` - Get payout details by ID (authenticated)
- `POST /payments/wallet/connect` - Connect Solana wallet (authenticated)

## Response Format

All API responses follow a standard format:

```json
{
  "success": true,
  "data": { ... },
  "message": "Optional message"
}
```

For error responses, the success field will be false, and an error message will be included:

```json
{
  "success": false,
  "message": "Error description"
}
```

## Status Codes

The API uses standard HTTP status codes:

- `200 OK` - The request was successful
- `201 Created` - A new resource was successfully created
- `400 Bad Request` - The request could not be understood or was missing required parameters
- `401 Unauthorized` - Authentication failed or user does not have permissions
- `403 Forbidden` - The user is authenticated but not allowed to access the resource
- `404 Not Found` - The requested resource could not be found
- `500 Internal Server Error` - An error occurred on the server

## Rate Limiting

The API currently does not implement rate limiting, but excessive requests may be restricted in the future to ensure fair usage.

## Versioning

The current version of the API is v1, which is implied in the base URL. Future versions will be explicitly versioned in the URL path.

## Examples

### Register a New User

Request:
```
POST /api/users/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword",
  "fullName": "John Doe",
  "phoneNumber": "+233543210987",
  "walletAddress": "8ZJ6BnS3vKb4KGXvXfbLET9FqTpZ3uQwJYZv6wqXf4V5"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "email": "user@example.com",
      "fullName": "John Doe",
      "phoneNumber": "+233543210987",
      "walletAddress": "8ZJ6BnS3vKb4KGXvXfbLET9FqTpZ3uQwJYZv6wqXf4V5",
      "createdAt": "2023-06-01T10:00:00.000Z",
      "updatedAt": "2023-06-01T10:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "message": "User registered successfully"
}
```

### Login

Request:
```
POST /api/users/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "email": "user@example.com",
      "fullName": "John Doe",
      "phoneNumber": "+233543210987",
      "walletAddress": "8ZJ6BnS3vKb4KGXvXfbLET9FqTpZ3uQwJYZv6wqXf4V5",
      "createdAt": "2023-06-01T10:00:00.000Z",
      "updatedAt": "2023-06-01T10:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "message": "Login successful"
}
```

## Support

For API support, please contact the development team at [dev@ahotorprotocol.com](mailto:dev@ahotorprotocol.com).

## Future Enhancements

- WebSocket support for real-time updates
- Enhanced error reporting
- Pagination for list endpoints
- Advanced filtering and search capabilities 