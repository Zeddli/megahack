import { PrismaClient, Policy, OracleData } from '@prisma/client';
import PaymentService from './paymentService';
import { oracleService } from './oracleService';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();
const paymentService = new PaymentService();

/**
 * Service for detecting and processing policy payout triggers
 */
export default class PayoutTriggerService {
  /**
   * Check if policy conditions are met based on oracle data
   */
  async evaluateTriggerConditions(oracleDataId: number): Promise<void> {
    const oracleData = await prisma.oracleData.findUnique({
      where: { id: oracleDataId },
      include: {
        oracleSource: true
      }
    });

    if (!oracleData) {
      logger.error(`Oracle data with ID ${oracleDataId} not found`);
      return;
    }

    // Find all active policies related to this oracle data's event type
    const activePolicies = await this.findActivePoliciesForOracleData(oracleData);

    // Check each policy against the oracle data
    for (const policy of activePolicies) {
      const isTriggered = await this.checkPolicyTrigger(policy, oracleData);
      
      if (isTriggered) {
        await this.createPolicyTrigger(policy.id, oracleDataId, true);
        
        // Process payout
        const payoutAmount = Number(policy.coverageAmount);
        
        try {
          const payout = await paymentService.processPayout({
            policyId: policy.id,
            payoutAmount,
            riskPoolId: policy.riskPoolId
          });
          
          logger.info(`Payout processed for policy ${policy.id}: ${payout.id}`);
        } catch (error) {
          logger.error(`Error processing payout for policy ${policy.id}:`, error);
        }
      } else {
        // Record that we checked this policy against this oracle data, but no trigger
        await this.createPolicyTrigger(policy.id, oracleDataId, false);
      }
    }
  }

  /**
   * Find all active policies that could be affected by this oracle data
   */
  private async findActivePoliciesForOracleData(oracleData: OracleData & { oracleSource: any }): Promise<Policy[]> {
    // This is a simplified implementation
    // In a real system, you would match oracle data to specific event types/risk pools
    
    // Get event type ID from oracle source (simplified example)
    const eventTypeId = oracleData.oracleSource.eventTypeId || 1; // Fallback to ID 1 for testing
    
    // Find active policies in risk pools for this event type
    return prisma.policy.findMany({
      where: {
        status: 'ACTIVE',
        coverageStart: { lte: new Date() },
        coverageEnd: { gte: new Date() },
        riskPool: {
          eventTypeId
        }
      }
    });
  }

  /**
   * Check if a specific policy's conditions are triggered by oracle data
   */
  private async checkPolicyTrigger(policy: Policy, oracleData: OracleData): Promise<boolean> {
    // This is where you'd implement your specific trigger logic
    // based on the type of oracle data
    
    const data = oracleData.data as any;
    
    // For weather data from OpenWeather API
    if (oracleData.dataType === 'WEATHER') {
      return this.checkWeatherTriggers(policy, data);
    }
    
    // Legacy code for other event types
    if (data.eventType === 'RAINFALL') {
      // If rainfall is below 5mm for more than 5 consecutive days, trigger payout
      return data.rainFallMm < 5 && data.dryDays > 5;
    } 
    
    if (data.eventType === 'POWER_OUTAGE') {
      // If power outage lasts more than 12 hours, trigger payout
      return data.outageDurationHours > 12;
    }
    
    if (data.eventType === 'FLOOD') {
      // If water level is above 1 meter, trigger payout
      return data.waterLevelM > 1;
    }
    
    // Default: no trigger
    return false;
  }
  
  /**
   * Check weather-specific triggers using policy conditions
   */
  private checkWeatherTriggers(policy: Policy, weatherData: any): boolean {
    // Extract policy conditions (simplified example)
    // In a real implementation, you'd have a more structured way to store and retrieve these
    const policyConditions = policy.triggerConditions as any;
    
    if (!policyConditions || !policyConditions.type) {
      logger.warn(`No trigger conditions found for policy ${policy.id}`);
      return false;
    }
    
    // For drought policies, check rainfall
    if (policyConditions.type === 'DROUGHT') {
      const rainfall = weatherData.rain?.['1h'] || 0;
      if (rainfall < policyConditions.thresholdValue) {
        logger.info(`Drought trigger condition met for policy ${policy.id}: Rainfall ${rainfall}mm is below threshold ${policyConditions.thresholdValue}mm`);
        return true;
      }
    }
    
    // For flood policies, check rainfall
    if (policyConditions.type === 'FLOOD') {
      const rainfall = weatherData.rain?.['1h'] || 0;
      if (rainfall > policyConditions.thresholdValue) {
        logger.info(`Flood trigger condition met for policy ${policy.id}: Rainfall ${rainfall}mm is above threshold ${policyConditions.thresholdValue}mm`);
        return true;
      }
    }
    
    // For extreme temperature policies
    if (policyConditions.type === 'EXTREME_HEAT') {
      const temperature = weatherData.main?.temp || 0;
      if (temperature > policyConditions.thresholdValue) {
        logger.info(`Extreme heat trigger condition met for policy ${policy.id}: Temperature ${temperature}°C is above threshold ${policyConditions.thresholdValue}°C`);
        return true;
      }
    }
    
    return false;
  }

  /**
   * Create a policy trigger record
   */
  private async createPolicyTrigger(
    policyId: number, 
    oracleDataId: number, 
    triggered: boolean
  ): Promise<void> {
    await prisma.policyTrigger.create({
      data: {
        policyId,
        oracleDataId,
        triggered,
        triggerCheckedAt: new Date()
      }
    });
  }

  /**
   * Run a scheduled job to check for policy triggers
   * This method would be called by a cron job
   */
  async runTriggerCheck(): Promise<void> {
    // Get the latest oracle data entries that haven't been checked
    const latestOracleData = await prisma.oracleData.findMany({
      where: {
        policyTriggers: {
          none: {} // No policy triggers yet for this data
        }
      },
      orderBy: {
        timestamp: 'desc'
      },
      take: 10 // Limit to 10 most recent entries
    });

    // Process each oracle data entry
    for (const data of latestOracleData) {
      await this.evaluateTriggerConditions(data.id);
    }
    
    // Also check active policies directly against weather API
    await this.checkActivePoliciesWeather();
  }
  
  /**
   * Check active policies against current weather data
   */
  async checkActivePoliciesWeather(): Promise<void> {
    // Get all active policies
    const activePolicies = await prisma.policy.findMany({
      where: {
        status: 'ACTIVE',
        coverageStart: { lte: new Date() },
        coverageEnd: { gte: new Date() },
      }
    });
    
    logger.info(`Checking ${activePolicies.length} active policies against current weather data`);
    
    for (const policy of activePolicies) {
      try {
        // Use the new Oracle service to check weather triggers
        const isTriggered = await oracleService.checkWeatherTriggers(policy.id.toString());
        
        if (isTriggered) {
          // Process payout
          const payoutAmount = Number(policy.coverageAmount);
          
          const payout = await paymentService.processPayout({
            policyId: policy.id,
            payoutAmount,
            riskPoolId: policy.riskPoolId
          });
          
          logger.info(`Weather-triggered payout processed for policy ${policy.id}: ${payout.id}`);
        }
      } catch (error) {
        logger.error(`Error checking weather triggers for policy ${policy.id}:`, error);
      }
    }
  }
} 