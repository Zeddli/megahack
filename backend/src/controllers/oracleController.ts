import { Request, Response } from 'express';
import { oracleService } from '../services/oracleService';
import { logger } from '../utils/logger';

/**
 * Controller for handling Oracle-related operations
 */
export const oracleController = {
  /**
   * Get current weather data for a location
   * @param req Request
   * @param res Response
   */
  async getCurrentWeather(req: Request, res: Response): Promise<void> {
    try {
      const { lat, lon } = req.query;
      
      // Validate parameters
      if (!lat || !lon) {
        res.status(400).json({ 
          success: false, 
          message: 'Latitude and longitude parameters are required' 
        });
        return;
      }
      
      const latitude = parseFloat(lat as string);
      const longitude = parseFloat(lon as string);
      
      // Validate coordinates
      if (isNaN(latitude) || isNaN(longitude)) {
        res.status(400).json({ 
          success: false, 
          message: 'Invalid latitude or longitude values' 
        });
        return;
      }
      
      const weatherData = await oracleService.getCurrentWeather(latitude, longitude);
      
      res.status(200).json({
        success: true,
        data: weatherData
      });
    } catch (error) {
      logger.error('Error in getCurrentWeather controller:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch current weather data',
        error: (error as Error).message
      });
    }
  },
  
  /**
   * Get weather forecast data for a location
   * @param req Request
   * @param res Response
   */
  async getWeatherForecast(req: Request, res: Response): Promise<void> {
    try {
      const { lat, lon } = req.query;
      
      // Validate parameters
      if (!lat || !lon) {
        res.status(400).json({ 
          success: false, 
          message: 'Latitude and longitude parameters are required' 
        });
        return;
      }
      
      const latitude = parseFloat(lat as string);
      const longitude = parseFloat(lon as string);
      
      // Validate coordinates
      if (isNaN(latitude) || isNaN(longitude)) {
        res.status(400).json({ 
          success: false, 
          message: 'Invalid latitude or longitude values' 
        });
        return;
      }
      
      const forecastData = await oracleService.getWeatherForecast(latitude, longitude);
      
      res.status(200).json({
        success: true,
        data: forecastData
      });
    } catch (error) {
      logger.error('Error in getWeatherForecast controller:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch weather forecast data',
        error: (error as Error).message
      });
    }
  },
  
  /**
   * Check if a policy's weather trigger conditions are met
   * @param req Request
   * @param res Response
   */
  async checkWeatherTriggers(req: Request, res: Response): Promise<void> {
    try {
      const { policyId } = req.params;
      
      if (!policyId) {
        res.status(400).json({ 
          success: false, 
          message: 'Policy ID is required' 
        });
        return;
      }
      
      const isTriggered = await oracleService.checkWeatherTriggers(policyId);
      
      res.status(200).json({
        success: true,
        policyId,
        isTriggered,
        checkedAt: new Date()
      });
    } catch (error) {
      logger.error(`Error in checkWeatherTriggers controller for policy ${req.params.policyId}:`, error);
      res.status(500).json({
        success: false,
        message: `Failed to check weather triggers for policy ${req.params.policyId}`,
        error: (error as Error).message
      });
    }
  }
}; 