-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fullName" TEXT,
    "phoneNumber" TEXT,
    "walletAddress" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "communities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "communities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "event_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "risk_pools" (
    "id" SERIAL NOT NULL,
    "community_id" INTEGER NOT NULL,
    "event_type_id" INTEGER NOT NULL,
    "total_capital" DECIMAL(20,8) NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "risk_pools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "capital_providers" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "risk_pool_id" INTEGER NOT NULL,
    "stake_amount" DECIMAL(20,8) NOT NULL,
    "stake_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "capital_providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "policies" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "risk_pool_id" INTEGER NOT NULL,
    "coverage_amount" DECIMAL(20,8) NOT NULL,
    "premium_amount" DECIMAL(20,8) NOT NULL,
    "coverage_start" TIMESTAMP(3) NOT NULL,
    "coverage_end" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "policies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oracle_sources" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "source_type" TEXT,
    "endpoint" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "oracle_sources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oracle_data" (
    "id" SERIAL NOT NULL,
    "oracle_source_id" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "data" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "oracle_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "policy_triggers" (
    "id" SERIAL NOT NULL,
    "policy_id" INTEGER NOT NULL,
    "oracle_data_id" INTEGER NOT NULL,
    "triggered" BOOLEAN NOT NULL DEFAULT false,
    "trigger_checked_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "payout_id" INTEGER,

    CONSTRAINT "policy_triggers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" SERIAL NOT NULL,
    "policy_id" INTEGER NOT NULL,
    "amount" DECIMAL(20,8) NOT NULL,
    "payment_tx_hash" TEXT,
    "paid_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payouts" (
    "id" SERIAL NOT NULL,
    "policy_id" INTEGER,
    "risk_pool_id" INTEGER,
    "payout_amount" DECIMAL(20,8) NOT NULL,
    "payout_tx_hash" TEXT,
    "paid_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payouts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_walletAddress_key" ON "users"("walletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "communities_name_key" ON "communities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "event_types_name_key" ON "event_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "oracle_sources_name_key" ON "oracle_sources"("name");

-- CreateIndex
CREATE UNIQUE INDEX "payments_payment_tx_hash_key" ON "payments"("payment_tx_hash");

-- AddForeignKey
ALTER TABLE "risk_pools" ADD CONSTRAINT "risk_pools_community_id_fkey" FOREIGN KEY ("community_id") REFERENCES "communities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "risk_pools" ADD CONSTRAINT "risk_pools_event_type_id_fkey" FOREIGN KEY ("event_type_id") REFERENCES "event_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_providers" ADD CONSTRAINT "capital_providers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_providers" ADD CONSTRAINT "capital_providers_risk_pool_id_fkey" FOREIGN KEY ("risk_pool_id") REFERENCES "risk_pools"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "policies" ADD CONSTRAINT "policies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "policies" ADD CONSTRAINT "policies_risk_pool_id_fkey" FOREIGN KEY ("risk_pool_id") REFERENCES "risk_pools"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "oracle_data" ADD CONSTRAINT "oracle_data_oracle_source_id_fkey" FOREIGN KEY ("oracle_source_id") REFERENCES "oracle_sources"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "policy_triggers" ADD CONSTRAINT "policy_triggers_policy_id_fkey" FOREIGN KEY ("policy_id") REFERENCES "policies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "policy_triggers" ADD CONSTRAINT "policy_triggers_oracle_data_id_fkey" FOREIGN KEY ("oracle_data_id") REFERENCES "oracle_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "policy_triggers" ADD CONSTRAINT "policy_triggers_payout_id_fkey" FOREIGN KEY ("payout_id") REFERENCES "payouts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_policy_id_fkey" FOREIGN KEY ("policy_id") REFERENCES "policies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payouts" ADD CONSTRAINT "payouts_policy_id_fkey" FOREIGN KEY ("policy_id") REFERENCES "policies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payouts" ADD CONSTRAINT "payouts_risk_pool_id_fkey" FOREIGN KEY ("risk_pool_id") REFERENCES "risk_pools"("id") ON DELETE SET NULL ON UPDATE CASCADE;
