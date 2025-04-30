# Ahotor Protocol - Backend API

The backend API for the Ahotor Protocol, a decentralized parametric insurance platform built on the Solana blockchain. This API handles policy management, risk pool operations, oracle data integration, and user management.

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for creating API endpoints
- **TypeScript**: Type-safe code
- **PostgreSQL**: Relational database for structured data (using NEON Postgres)
- **Prisma**: Type-safe ORM for database interactions
- **Redis**: (Optional) In-memory data store for caching
- **JWT**: Authentication mechanism

## Project Structure

```
backend/
├── src/                    # Source files
│   ├── config/             # Configuration files
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Data models and types
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   ├── utils/              # Utility functions
│   └── index.ts            # Application entry point
├── prisma/                 # Prisma ORM files
│   └── schema.prisma       # Database schema
├── tests/                  # Test files
├── scripts/                # Helper scripts
└── .env                    # Environment variables (not in repository)
```

## Getting Started

### Prerequisites

- Node.js (v14+)
- NEON PostgreSQL database
- DBeaver or another PostgreSQL client
- (Optional) Redis server

### Installation

1. Clone the repository
2. Navigate to the backend directory
3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file using the provided script:

```bash
node scripts/create-env.js
```

5. Configure your NEON PostgreSQL connection string in the `.env` file
6. Generate Prisma client:

```bash
npm run prisma:generate
```

7. Create the database schema if not already created:

```bash
npm run prisma:migrate
```

8. Start the development server:

```bash
npm run dev
```

The API will be available at `http://localhost:3001` by default.

## Available Scripts

- `npm run build`: Build TypeScript to JavaScript
- `npm run start`: Start the production server
- `npm run dev`: Start development server with hot-reload
- `npm run prisma:generate`: Generate Prisma client
- `npm run prisma:migrate`: Apply database migrations
- `npm run prisma:studio`: Open Prisma Studio to view database
- `npm test`: Run tests
- `npm run lint`: Run linter

## API Endpoints

### Communities
- `GET /api/communities`: Get all communities
- `GET /api/communities/:id`: Get community by ID
- `POST /api/communities`: Create a new community
- `PUT /api/communities/:id`: Update a community
- `DELETE /api/communities/:id`: Delete a community

### Event Types
- `GET /api/event-types`: Get all event types
- `GET /api/event-types/:id`: Get event type by ID
- `POST /api/event-types`: Create a new event type
- `PUT /api/event-types/:id`: Update an event type
- `DELETE /api/event-types/:id`: Delete an event type

### Risk Pools
- `GET /api/risk-pools`: Get all risk pools
- `GET /api/risk-pools/:id`: Get risk pool by ID
- `POST /api/risk-pools`: Create a new risk pool
- `PUT /api/risk-pools/:id`: Update a risk pool
- `DELETE /api/risk-pools/:id`: Delete a risk pool

### Policies
- `GET /api/policies`: Get all policies
- `GET /api/policies/:id`: Get policy by ID
- `POST /api/policies`: Create a new policy
- `PUT /api/policies/:id`: Update a policy

### Users
- `POST /api/users/register`: Register a new user
- `POST /api/users/login`: User login

## Database Schema

The API uses NEON PostgreSQL with the following schema:

- **communities**: Local areas covered by insurance policies
- **event_types**: Types of insurable events (rainfall, power outage, etc.)
- **risk_pools**: Capital pools to cover specific events in communities
- **capital_providers**: Users who provide capital to risk pools
- **policies**: Insurance contracts purchased by users
- **oracle_sources**: Data providers for event verification
- **oracle_data**: Event data records from oracles
- **policy_triggers**: Event trigger checks against policies
- **payments**: Premium payments by policyholders
- **payouts**: Payouts to policyholders when triggers occur

## Environment Variables

All required environment variables are documented in the `.env.example` file.

## License

This project is licensed under the ISC License. 