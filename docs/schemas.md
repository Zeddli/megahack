-- Community definitions (e.g., Accra neighborhoods)
CREATE TABLE communities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Event types (rainfall shortage, power outage, flooding)
CREATE TABLE event_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT
);

-- Risk pools for specific events in specific communities
CREATE TABLE risk_pools (
    id SERIAL PRIMARY KEY,
    community_id INT NOT NULL REFERENCES communities(id) ON DELETE CASCADE,
    event_type_id INT NOT NULL REFERENCES event_types(id) ON DELETE CASCADE,
    total_capital NUMERIC(20,8) NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Capital providers staking into risk pools
CREATE TABLE capital_providers (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    risk_pool_id INT NOT NULL REFERENCES risk_pools(id) ON DELETE CASCADE,
    stake_amount NUMERIC(20,8) NOT NULL,
    stake_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Policies issued to users
CREATE TABLE policies (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    risk_pool_id INT NOT NULL REFERENCES risk_pools(id) ON DELETE CASCADE,
    coverage_amount NUMERIC(20,8) NOT NULL,
    premium_amount NUMERIC(20,8) NOT NULL,
    coverage_start TIMESTAMP WITH TIME ZONE NOT NULL,
    coverage_end TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('ACTIVE', 'EXPIRED', 'PAID_OUT', 'CANCELLED')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Oracle sources for off-chain data feeds
CREATE TABLE oracle_sources (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    source_type VARCHAR(50),
    endpoint TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Oracle data records
CREATE TABLE oracle_data (
    id SERIAL PRIMARY KEY,
    oracle_source_id INT NOT NULL REFERENCES oracle_sources(id) ON DELETE CASCADE,
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    data JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Policy trigger checks
CREATE TABLE policy_triggers (
    id SERIAL PRIMARY KEY,
    policy_id INT NOT NULL REFERENCES policies(id) ON DELETE CASCADE,
    oracle_data_id INT NOT NULL REFERENCES oracle_data(id) ON DELETE CASCADE,
    triggered BOOLEAN NOT NULL DEFAULT FALSE,
    trigger_checked_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    payout_id INT REFERENCES payouts(id)
);

-- Premium payments by policyholders
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    policy_id INT NOT NULL REFERENCES policies(id) ON DELETE CASCADE,
    amount NUMERIC(20,8) NOT NULL,
    payment_tx_hash VARCHAR(66) UNIQUE,
    paid_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Payouts to policyholders when triggers occur
CREATE TABLE payouts (
    id SERIAL PRIMARY KEY,
    policy_id INT REFERENCES policies(id) ON DELETE SET NULL,
    risk_pool_id INT REFERENCES risk_pools(id) ON DELETE SET NULL,
    payout_amount NUMERIC(20,8) NOT NULL,
    payout_tx_hash VARCHAR(66),
    paid_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);