# Ahotor Protocol: Revised Tech Stack with Solidity

## Frontend (Unchanged)

### Core Framework
- **Next.js**: React framework with server-side rendering capabilities
- **TypeScript**: For type-safe code and better developer experience

### UI Components & Design
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Headless UI**: Accessible UI components that integrate with Tailwind
- **React Hook Form**: Form validation and handling
- **Framer Motion**: Animation library for smooth UI transitions

### State Management & Data Flow
- **Redux Toolkit**: State management with built-in best practices
- **React Query**: Data fetching, caching, and state management for API calls

### Blockchain Integration
- **@solana/web3.js**: Core Solana JavaScript API
- **@solana/wallet-adapter**: Complete wallet connection infrastructure
- **ethers.js**: For interacting with Solidity contracts on Solana (via Neon EVM)

### Data Visualization
- **D3.js**: Custom data visualizations for weather patterns and trigger conditions
- **react-chartjs-2**: Quick implementation of standard charts for risk analytics

### Developer Tools
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Jest**: Unit testing framework
- **Cypress**: End-to-end testing

## Backend (Unchanged)

### API & Server
- **Node.js**: JavaScript runtime for server-side code
- **Express.js**: Web framework for creating API endpoints
- **TypeScript**: Type safety for backend code

### Oracle Services
- **Switchboard V2 SDK**: Oracle integration for real-world data
- **Custom Oracle Adapters**: For local Ghanaian weather and power outage data feeds

### Authentication & Security
- **JSON Web Tokens (JWT)**: For user authentication
- **Helmet.js**: Security middleware for Express
- **Rate Limiting**: For API protection

### Data Processing & Storage
- **PostgreSQL**: Relational database for structured data
- **Redis**: In-memory data store for caching and high-speed operations
- **Prisma**: ORM for database interaction

### External Integrations
- **Weather API Client**: For rainfall and temperature data
- **Power Grid Status API**: For monitoring outages in specific areas
- **Mobile Money API**: Integration with local payment systems

## Blockchain (Solidity on Solana via Neon EVM)

### Smart Contract Development
- **Solidity**: Smart contract language
- **Hardhat**: Development environment for compiling, deploying, testing, and debugging Solidity
- **OpenZeppelin Contracts**: Library of secure, reusable smart contract components

### Solana EVM Compatibility
- **Neon EVM**: Ethereum Virtual Machine on Solana that enables Solidity contracts
- **Neon CLI**: Command-line tools for Neon EVM deployment
- **Neon Web3 Provider**: Web3 provider for Neon EVM

### Testing Framework
- **Hardhat Test Suite**: For unit and integration testing
- **Chai**: Assertion library for tests
- **Ethers.js**: For contract interaction during tests
- **Solidity Coverage**: Code coverage for Solidity contracts

### On-chain Contracts
- **PolicyManager.sol**: Handles policy creation, premium collection, and payout logic
- **OracleVerifier.sol**: Validates and processes oracle data
- **TreasuryManager.sol**: Manages liquidity pools and capital allocation
- **AhotorToken.sol**: ERC20 token implementation (if needed)

### Oracle Integration
- **Chainlink Adapters**: For integrating with external data sources
- **Custom Oracle Contracts**: For specialized data needs

### Security Tools
- **Slither**: Static analyzer for Solidity
- **Mythril**: Security analysis tool for EVM bytecode
- **Solhint**: Linter for Solidity code

### Deployment
- **Hardhat Deploy**: Deployment management and scripting
- **Neon EVM Deployer**: For deploying to Neon EVM on Solana
- **Multi-sig Wallet**: For secure contract control

### Gas Optimization
- **Gas Profiler**: For monitoring and optimizing gas usage
- **EIP-1559 Transaction Support**: For predictable gas fees

## Development Workflow

### Local Development
1. Develop Solidity contracts in Hardhat environment
2. Test contracts with Hardhat test suite
3. Deploy contracts to local Neon EVM node
4. Integrate frontend with deployed contracts via ethers.js
5. Deploy to Neon EVM on Solana Devnet for integration testing

### CI/CD
- **GitHub Actions**: Automated testing and deployment pipeline
- **Hardhat Scripts**: For contract verification and deployment

### Documentation
- **Solidity Docgen**: Generate documentation from Solidity NatSpec comments
- **Storybook**: For UI component documentation

This revised tech stack accommodates your choice to use Solidity as the smart contract language while still targeting the Solana blockchain via Neon EVM. This approach gives you the benefit of Solidity's mature ecosystem and tooling while leveraging Solana's performance and cost advantages. The Neon EVM provides the bridge that makes this possible by implementing the Ethereum Virtual Machine on Solana.