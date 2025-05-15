import axios from 'axios';
import { appwrite } from './appwriteService';
import { logger } from '../utils/logger';
import AuditLogService, { AuditAction, AuditEntity } from './auditLogService';

// Get Appwrite services and constants
const { databases, Query } = appwrite;
const databaseId = process.env.APPWRITE_DATABASE_ID || '';
const policiesCollectionId = process.env.APPWRITE_COLLECTION_POLICIES_ID || '';
const weatherDataCollectionId = process.env.APPWRITE_COLLECTION_WEATHER_DATA_ID || '';

// Create audit log service instance
const auditLogService = new AuditLogService();

// Cache weather data to reduce API calls
interface WeatherDataCache {
  [key: string]: {
    data: any;
    timestamp: number;
  }
}

class OracleService {
  private apiKey: string;
  private baseUrl: string;
  private weatherCache: WeatherDataCache = {};
  private cacheDuration = 3600000; // 1 hour in milliseconds

  constructor() {
    // Load API key from environment variables in production
    this.apiKey = process.env.OPENWEATHER_API_KEY || 'a2ecc4ffa8a10faa2441393a61e92f24';
    this.baseUrl = 'https://api.openweathermap.org/data/2.5';
  }

  /**
   * Fetch current weather data for a specific location
   * @param lat Latitude
   * @param lon Longitude
   * @returns Weather data
   */
  async getCurrentWeather(lat: number, lon: number): Promise<any> {
    try {
      const cacheKey = `current-${lat}-${lon}`;
      
      // Check if we have cached data
      if (this.weatherCache[cacheKey] && 
          (Date.now() - this.weatherCache[cacheKey].timestamp) < this.cacheDuration) {
        logger.info(`Using cached weather data for ${lat},${lon}`);
        return this.weatherCache[cacheKey].data;
      }

      // Fetch new data
      const url = `${this.baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
      logger.info(`Fetching current weather data for coordinates: ${lat},${lon}`);
      
      const response = await axios.get(url);
      
      // Cache the data
      this.weatherCache[cacheKey] = {
        data: response.data,
        timestamp: Date.now()
      };
      
      // Log the oracle data fetch
      await auditLogService.logOracleAction(
        AuditAction.ORACLE_DATA_RECEIVE,
        cacheKey,
        'openweather',
        { 
          lat, 
          lon, 
          dataType: 'current' 
        }
      );
      
      return response.data;
    } catch (error) {
      logger.error('Error fetching current weather data:', error);
      throw new Error('Failed to fetch current weather data');
    }
  }

  /**
   * Fetch weather forecast data for a specific location
   * @param lat Latitude
   * @param lon Longitude
   * @returns Forecast data
   */
  async getWeatherForecast(lat: number, lon: number): Promise<any> {
    try {
      const cacheKey = `forecast-${lat}-${lon}`;
      
      // Check if we have cached data
      if (this.weatherCache[cacheKey] && 
          (Date.now() - this.weatherCache[cacheKey].timestamp) < this.cacheDuration) {
        logger.info(`Using cached forecast data for ${lat},${lon}`);
        return this.weatherCache[cacheKey].data;
      }

      // Fetch new data
      const url = `${this.baseUrl}/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
      logger.info(`Fetching forecast data for coordinates: ${lat},${lon}`);
      
      const response = await axios.get(url);
      
      // Cache the data
      this.weatherCache[cacheKey] = {
        data: response.data,
        timestamp: Date.now()
      };
      
      // Log the oracle forecast data fetch
      await auditLogService.logOracleAction(
        AuditAction.ORACLE_DATA_RECEIVE,
        cacheKey,
        'openweather',
        { 
          lat, 
          lon, 
          dataType: 'forecast' 
        }
      );
      
      return response.data;
    } catch (error) {
      logger.error('Error fetching weather forecast data:', error);
      throw new Error('Failed to fetch weather forecast data');
    }
  }

  /**
   * Analyze weather data to determine if trigger conditions are met
   * @param policyId The ID of the policy to check triggers for
   * @returns Boolean indicating if trigger conditions are met
   */
  async checkWeatherTriggers(policyId: string): Promise<boolean> {
    try {
      // Get policy details from Appwrite
      const policy = await databases.getDocument(
        databaseId,
        policiesCollectionId,
        policyId
      );

      if (!policy || !policy.triggerConditions) {
        logger.warn(`No policy or trigger conditions found for policy ID: ${policyId}`);
        return false;
      }

      // Extract coordinates from policy location
      const { latitude, longitude } = policy;
      if (!latitude || !longitude) {
        logger.warn(`Policy ${policyId} has no location data`);
        return false;
      }

      // Get current weather data
      const weatherData = await this.getCurrentWeather(latitude, longitude);
      
      // Extract relevant weather parameters
      const currentTemperature = weatherData.main?.temp;
      const currentHumidity = weatherData.main?.humidity;
      const weatherCondition = weatherData.weather?.[0]?.main;
      const windSpeed = weatherData.wind?.speed;
      const rainfall = weatherData.rain?.['1h'] || 0; // 1-hour rainfall in mm
      
      // Log the policy trigger check
      await auditLogService.logPolicyAction(
        AuditAction.TRIGGER_DETECT,
        policyId,
        policy.userId,
        null,
        null,
        {
          metadata: {
            temperature: currentTemperature,
            humidity: currentHumidity,
            condition: weatherCondition,
            windSpeed,
            rainfall
          }
        }
      );
      
      // Parse trigger conditions - in Appwrite, this might be stored as a JSON string
      const triggerConditions = typeof policy.triggerConditions === 'string' 
        ? JSON.parse(policy.triggerConditions) 
        : policy.triggerConditions;
      
      // Example trigger check for a drought policy
      if (triggerConditions.type === 'DROUGHT') {
        // Check if rainfall is below threshold
        if (rainfall < triggerConditions.thresholdValue) {
          logger.info(`Drought trigger condition met for policy ${policyId}: Rainfall ${rainfall}mm is below threshold ${triggerConditions.thresholdValue}mm`);
          return true;
        }
      }
      
      // Example trigger check for flood policy
      if (triggerConditions.type === 'FLOOD') {
        // Check if rainfall is above threshold
        if (rainfall > triggerConditions.thresholdValue) {
          logger.info(`Flood trigger condition met for policy ${policyId}: Rainfall ${rainfall}mm is above threshold ${triggerConditions.thresholdValue}mm`);
          return true;
        }
      }

      // No trigger conditions met
      return false;
    } catch (error) {
      logger.error(`Error checking weather triggers for policy ${policyId}:`, error);
      throw new Error(`Failed to check weather triggers for policy ${policyId}`);
    }
  }

  /**
   * Store historical weather data in Appwrite
   * @param lat Latitude
   * @param lon Longitude
   * @param data Weather data to store
   */
  async storeWeatherData(lat: number, lon: number, data: any): Promise<void> {
    try {
      // Create a new weather data document in Appwrite
      const weatherDoc = await databases.createDocument(
        databaseId,
        weatherDataCollectionId,
        'unique()',  // Appwrite will generate a unique ID
        {
          latitude: lat,
          longitude: lon,
          temperature: data.main?.temp,
          humidity: data.main?.humidity,
          weatherCondition: data.weather?.[0]?.main,
          windSpeed: data.wind?.speed,
          rainfall: data.rain?.['1h'] || 0,
          timestamp: new Date().toISOString(),
          rawData: JSON.stringify(data)
        }
      );
      
      // Log the stored weather data
      await auditLogService.logOracleAction(
        AuditAction.ORACLE_DATA_RECEIVE,
        weatherDoc.$id,
        'openweather',
        { 
          lat, 
          lon, 
          stored: true 
        }
      );
      
      logger.info(`Weather data stored for coordinates: ${lat},${lon}`);
    } catch (error) {
      logger.error('Error storing weather data:', error);
      throw new Error('Failed to store weather data');
    }
  }
}

export const oracleService = new OracleService(); 