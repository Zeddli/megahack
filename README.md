# Great Insure

## Decentralized Agricultural Insurance Platform

Great Insure is a blockchain-based platform offering transparent risk pools and instant claim payouts for agricultural insurance. Built on Solana, it provides farmers with affordable protection against weather-related risks and natural disasters.

## Overview

Great Insure addresses the challenges farmers face due to unpredictable weather events by leveraging blockchain technology to create a transparent, efficient, and accessible insurance solution. The platform enables:

- **Transparent Risk Pools**: Community-driven pools where members share risk collectively
- **Instant Claims Processing**: Automated validation and immediate payouts
- **Weather Data Integration**: Real-time monitoring to trigger claim eligibility
- **Affordable Coverage**: Lower premiums through direct peer-to-peer risk sharing

## Key Features

### For Farmers
- Purchase customizable insurance policies based on specific crop and regional needs
- Access instant claim payouts upon verified weather events
- View policy status and weather alerts through an intuitive dashboard
- Participate in community-driven risk pools with transparent governance

### For Liquidity Providers
- Provide liquidity to risk pools and earn returns
- Participate in governance decisions for risk management
- Monitor pool performance and risk metrics

## Technical Architecture

Great Insure is built using:

- **Frontend**: Next.js, React, TailwindCSS
- **Blockchain**: Solana for smart contracts and transactions
- **Weather Data**: Integrated weather oracles for real-time monitoring
- **Authentication**: Blockchain wallet integration

## Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Solana CLI (for blockchain interaction)

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/great-insure.git
cd great-insure
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application

### Backend Setup

1. Navigate to the backend folder
```bash
cd backend
```

2. Install backend dependencies
```bash
npm install
```

3. Start the backend server
```bash
npm run start
```

## Project Structure

```
great-insure/
├── app/                    # Next.js application
│   ├── api/                # API routes for data handling
│   ├── components/         # Reusable UI components
│   ├── contexts/           # React context providers
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and services
│   └── [feature]/          # Feature-based routing
├── backend/                # Backend service for blockchain interaction
├── insurance-contract/     # Solana smart contracts
│   └── programs/           # Contract programs
├── public/                 # Static assets
└── README.md               # Project documentation
```

## Smart Contract Architecture

The Solana programs in the `insurance-contract` directory define the core logic of the platform:

- **Risk Pool Contract**: Manages the creation and operation of risk pools
- **Policy Contract**: Handles policy issuance, coverage terms, and claims
- **Oracle Integration**: Connects with weather data sources for automatic claim validation

## Testing

Run the test suite with:

```bash
npm test
```

For smart contract tests:

```bash
cd insurance-contract
anchor test
```

## Deployment

The frontend is deployable to Vercel or any other Next.js-compatible hosting service. Smart contracts can be deployed to the Solana devnet or mainnet using the Anchor framework.

## Contribution Guidelines

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Please ensure your code follows the established patterns and passes all tests.

## License

[MIT License](LICENSE)
