# Migrating from PostgreSQL to Appwrite

This document outlines the process of migrating the Ahotor Protocol backend from PostgreSQL with Prisma to Appwrite.

## Overview

The migration involves:

1. Setting up collections in Appwrite Console
2. Configuring environment variables
3. Running the migration script to transfer data
4. Testing the new Appwrite integration

## 1. Appwrite Setup

### Create Project in Appwrite

1. Go to [Appwrite Console](https://cloud.appwrite.io/)
2. Create a new project or use an existing one
3. Note your Project ID

### Create Database

1. In your Appwrite project, go to Databases
2. Create a new database (e.g., "ahotor-db")
3. Note your Database ID

### Create Collections

You need to create the following collections in Appwrite:

#### Users Collection
- **Name**: Users
- **Document Security**: Enabled
- **Attributes**:
  - email (string, required, unique)
  - password (string, required)
  - fullName (string)
  - phoneNumber (string)
  - walletAddress (string, unique)
  - createdAt (datetime, required)
  - updatedAt (datetime, required)
- **Indexes**:
  - email (unique, key)
  - walletAddress (unique)

#### Communities Collection
- **Name**: Communities
- **Attributes**:
  - name (string, required, unique)
  - description (string)
  - createdAt (datetime, required)
- **Indexes**:
  - name (unique, key)

#### EventTypes Collection
- **Name**: EventTypes
- **Attributes**:
  - name (string, required, unique)
  - description (string)
- **Indexes**:
  - name (unique, key)

#### RiskPools Collection
- **Name**: RiskPools
- **Attributes**:
  - communityId (string, required)
  - eventTypeId (string, required)
  - totalCapital (string, required)
  - createdAt (datetime, required)
- **Indexes**:
  - communityId + eventTypeId (key)

#### Policies Collection
- **Name**: Policies
- **Attributes**:
  - userId (string, required)
  - riskPoolId (string, required)
  - coverageAmount (string, required)
  - premiumAmount (string, required)
  - coverageStart (datetime, required)
  - coverageEnd (datetime, required)
  - status (string, required)
  - latitude (double)
  - longitude (double)
  - triggerConditions (json)
  - createdAt (datetime, required)
  - updatedAt (datetime, required)
- **Indexes**:
  - userId (key)
  - riskPoolId (key)
  - status (key)

#### CapitalProviders Collection
- **Name**: CapitalProviders
- **Attributes**:
  - userId (string, required)
  - riskPoolId (string, required)
  - stakeAmount (string, required)
  - stakeDate (datetime, required)
  - createdAt (datetime, required)
- **Indexes**:
  - userId (key)
  - riskPoolId (key)

#### OracleSources Collection
- **Name**: OracleSources
- **Attributes**:
  - name (string, required, unique)
  - sourceType (string)
  - endpoint (string)
  - createdAt (datetime, required)
- **Indexes**:
  - name (unique, key)

#### OracleData Collection
- **Name**: OracleData
- **Attributes**:
  - oracleSourceId (string, required)
  - timestamp (datetime, required)
  - data (json, required)
  - latitude (double)
  - longitude (double)
  - dataType (string)
  - createdAt (datetime, required)
- **Indexes**:
  - oracleSourceId (key)
  - timestamp (key)
  - dataType (key)
  - latitude + longitude (key)

#### PolicyTriggers Collection
- **Name**: PolicyTriggers
- **Attributes**:
  - policyId (string, required)
  - oracleDataId (string, required)
  - triggered (boolean, required)
  - triggerCheckedAt (datetime, required)
  - payoutId (string)
- **Indexes**:
  - policyId (key)
  - oracleDataId (key)
  - triggered (key)

#### Payments Collection
- **Name**: Payments
- **Attributes**:
  - policyId (string, required)
  - amount (string, required)
  - paymentTxHash (string, unique)
  - paidAt (datetime, required)
  - createdAt (datetime, required)
- **Indexes**:
  - policyId (key)
  - paymentTxHash (unique)

#### Payouts Collection
- **Name**: Payouts
- **Attributes**:
  - policyId (string)
  - riskPoolId (string)
  - payoutAmount (string, required)
  - payoutTxHash (string)
  - paidAt (datetime)
  - createdAt (datetime, required)
- **Indexes**:
  - policyId (key)
  - riskPoolId (key)
  - payoutTxHash (key)

#### RefreshTokens Collection
- **Name**: RefreshTokens
- **Attributes**:
  - userId (string, required)
  - token (string, required, unique)
  - expiresAt (datetime, required)
  - createdAt (datetime, required)
  - updatedAt (datetime, required)
  - isRevoked (boolean, required)
- **Indexes**:
  - token (unique, key)
  - userId (key)
  - expiresAt (key)

#### Notifications Collection
- **Name**: Notifications
- **Attributes**:
  - userId (string, required)
  - type (string, required)
  - title (string, required)
  - message (string, required)
  - resourceId (string)
  - resourceType (string)
  - metadata (string)
  - isRead (boolean, required)
  - readAt (datetime)
  - createdAt (datetime, required)
- **Indexes**:
  - userId (key)
  - type (key)
  - isRead (key)

#### AuditLogs Collection
- **Name**: AuditLogs
- **Attributes**:
  - userId (string)
  - action (string, required)
  - entity (string, required)
  - entityId (string)
  - oldValues (string)
  - newValues (string)
  - metadata (string)
  - ipAddress (string)
  - userAgent (string)
  - createdAt (datetime, required)
- **Indexes**:
  - userId (key)
  - action (key)
  - entity (key)
  - entityId (key)

#### WeatherData Collection
- **Name**: WeatherData
- **Attributes**:
  - latitude (double, required)
  - longitude (double, required)
  - temperature (double)
  - humidity (double)
  - weatherCondition (string)
  - windSpeed (double)
  - rainfall (double)
  - timestamp (datetime, required)
  - rawData (string, required)
  - createdAt (datetime, required)
- **Indexes**:
  - latitude + longitude (key)
  - timestamp (key)

## 2. Configure Environment Variables

Create or update your `.env` file with the following variables:

```
# Appwrite Configuration
APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
APPWRITE_PROJECT_ID=your_project_id
APPWRITE_API_KEY=your_api_key
APPWRITE_DATABASE_ID=your_database_id

# Appwrite Collection IDs
APPWRITE_COLLECTION_USERS_ID=your_users_collection_id
APPWRITE_COLLECTION_COMMUNITIES_ID=your_communities_collection_id
APPWRITE_COLLECTION_EVENT_TYPES_ID=your_event_types_collection_id
APPWRITE_COLLECTION_RISK_POOLS_ID=your_risk_pools_collection_id
APPWRITE_COLLECTION_CAPITAL_PROVIDERS_ID=your_capital_providers_collection_id
APPWRITE_COLLECTION_POLICIES_ID=your_policies_collection_id
APPWRITE_COLLECTION_ORACLE_SOURCES_ID=your_oracle_sources_collection_id
APPWRITE_COLLECTION_ORACLE_DATA_ID=your_oracle_data_collection_id
APPWRITE_COLLECTION_POLICY_TRIGGERS_ID=your_policy_triggers_collection_id
APPWRITE_COLLECTION_PAYMENTS_ID=your_payments_collection_id
APPWRITE_COLLECTION_PAYOUTS_ID=your_payouts_collection_id
APPWRITE_COLLECTION_REFRESH_TOKENS_ID=your_refresh_tokens_collection_id
APPWRITE_COLLECTION_NOTIFICATIONS_ID=your_notifications_collection_id
APPWRITE_COLLECTION_AUDIT_LOGS_ID=your_audit_logs_collection_id
APPWRITE_COLLECTION_WEATHER_DATA_ID=your_weather_data_collection_id
```

You'll need to get your API key from the Appwrite Console under Project > API Keys. Make sure the API key has the necessary permissions to read/write to your database and collections.

## 3. Run the Migration Script

To migrate your data from PostgreSQL to Appwrite, run:

```
npm run migrate-to-appwrite
```

This script will:
1. Connect to your PostgreSQL database using Prisma
2. Connect to your Appwrite project
3. Migrate all data from PostgreSQL to Appwrite collections
4. Maintain relationships between entities by mapping old IDs to new IDs

## 4. Testing the Migration

After migration, run the application with:

```
npm run dev
```

Test the following endpoints to verify the migration was successful:

- `/api/auth/login` - Test user login with email/password
- `/api/user/profile` - Test fetching user profile
- `/api/user/policies` - Test fetching user policies

## 5. Maintenance

The migration keeps both databases in sync only during the initial data transfer. For ongoing maintenance, you must:

1. Only use the Appwrite database after migration
2. Update your code to use the Appwrite SDK for all database operations
3. Turn off any Prisma-specific scheduled tasks

## 6. Troubleshooting

Common issues:

### Authentication Issues
- Check your Appwrite API key has the correct permissions
- Verify your Project ID and Database ID are correct

### Missing Relationships
- Check the idMap in the migration script
- Ensure all dependent collections were migrated in the correct order

### Data Format Issues
- Appwrite requires specific data formats, especially for datetime fields
- Ensure numeric fields are properly converted to strings when needed

## 7. Next Steps

After completing the migration:

1. Update all remaining controllers and services to use Appwrite repositories
2. Remove Prisma dependencies if no longer needed
3. Update tests to work with Appwrite
4. Consider implementing a caching layer with Redis to improve performance 