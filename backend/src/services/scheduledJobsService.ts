import cron from 'node-cron';
import PayoutTriggerService from './payoutTriggerService';
import PolicyStatusService from './policyStatusService';
import { oracleService } from './oracleService';
import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();
const payoutTriggerService = new PayoutTriggerService();
const policyStatusService = new PolicyStatusService();

/**
 * Service to manage scheduled background jobs
 */
export default class ScheduledJobsService {
  /**
   * Start all scheduled jobs
   */
  startAllJobs(): void {
    this.startPolicyStatusJob();
    this.startPayoutTriggerJob();
    this.startWeatherDataFetchJob();
    logger.info('🕑 Scheduled background jobs started');
  }

  /**
   * Start the job to update policy statuses
   * Run every hour to check for expired policies
   */
  private startPolicyStatusJob(): void {
    // Run every hour
    cron.schedule('0 * * * *', async () => {
      logger.info('Running policy status update job...');
      try {
        await policyStatusService.updatePolicyStatuses();
        logger.info('Policy status update job completed');
      } catch (error) {
        logger.error('Error in policy status update job:', error);
      }
    });
  }

  /**
   * Start the job to check for policy payout triggers
   * Run every 30 minutes to check latest oracle data
   */
  private startPayoutTriggerJob(): void {
    // Run every 30 minutes
    cron.schedule('*/30 * * * *', async () => {
      logger.info('Running payout trigger check job...');
      try {
        await payoutTriggerService.runTriggerCheck();
        logger.info('Payout trigger check job completed');
      } catch (error) {
        logger.error('Error in payout trigger check job:', error);
      }
    });
  }

  /**
   * Start the job to fetch weather data for active policies
   * Run every hour to gather recent weather data
   */
  private startWeatherDataFetchJob(): void {
    // Run every hour
    cron.schedule('0 * * * *', async () => {
      logger.info('Running weather data fetch job...');
      try {
        await this.fetchWeatherDataForActivePolicies();
        logger.info('Weather data fetch job completed');
      } catch (error) {
        logger.error('Error in weather data fetch job:', error);
      }
    });
  }

  /**
   * Fetch weather data for all active policies
   */
  private async fetchWeatherDataForActivePolicies(): Promise<void> {
    // Get all active policies with locations
    const activePolicies = await prisma.policy.findMany({
      where: {
        status: 'ACTIVE',
        coverageStart: { lte: new Date() },
        coverageEnd: { gte: new Date() },
      }
    });

    // Get unique locations from policies to minimize API calls
    const locations = new Map<string, { lat: number, lon: number }>();
    
    for (const policy of activePolicies) {
      // Skip policies without location data
      if (!policy.latitude || !policy.longitude) continue;
      
      const locationKey = `${policy.latitude}-${policy.longitude}`;
      if (!locations.has(locationKey)) {
        locations.set(locationKey, {
          lat: policy.latitude,
          lon: policy.longitude
        });
      }
    }

    // Fetch and store weather data for each unique location
    for (const [locationKey, { lat, lon }] of locations.entries()) {
      try {
        // Fetch current weather
        const weatherData = await oracleService.getCurrentWeather(lat, lon);
        
        // Store in database
        await oracleService.storeWeatherData(lat, lon, weatherData);
        
        // Also store as oracle data for trigger evaluation
        await this.storeAsOracleData(lat, lon, weatherData);
        
        logger.info(`Weather data fetched and stored for location: ${locationKey}`);
      } catch (error) {
        logger.error(`Error fetching weather data for location ${locationKey}:`, error);
      }
    }
  }
  
  /**
   * Store weather data as oracle data for trigger evaluation
   */
  private async storeAsOracleData(lat: number, lon: number, weatherData: any): Promise<void> {
    try {
      // Get or create weather oracle source
      const oracleSource = await prisma.oracleSource.upsert({
        where: { name: 'OpenWeather' },
        update: {},
        create: {
          name: 'OpenWeather',
          sourceType: 'WEATHER_API',
          endpoint: 'api.openweathermap.org/data/2.5'
        }
      });
      
      // Store as oracle data
      await prisma.oracleData.create({
        data: {
          oracleSourceId: oracleSource.id,
          timestamp: new Date(),
          data: weatherData,
          latitude: lat,
          longitude: lon,
          dataType: 'WEATHER'
        }
      });
    } catch (error) {
      logger.error(`Error storing weather data as oracle data:`, error);
    }
  }

  /**
   * Stop all scheduled jobs
   */
  stopAllJobs(): void {
    cron.getTasks().forEach(task => task.stop());
    logger.info('All scheduled jobs stopped');
  }
} 