interface WeatherData {
  region: string;
  country: string;
  latitude: number;
  longitude: number;
  temperature: number;
  humidity: number;
  windSpeed: number;
  rainfall: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy' | 'drought';
  riskLevel: 'low' | 'medium' | 'high' | 'extreme';
  timestamp: string;
}

// Mock weather data for different regions
const mockWeatherData: WeatherData[] = [
  // Africa
  {
    region: 'Accra',
    country: 'Ghana',
    latitude: 5.6037,
    longitude: -0.1870,
    temperature: 32,
    humidity: 75,
    windSpeed: 12,
    rainfall: 0.2,
    condition: 'sunny',
    riskLevel: 'medium',
    timestamp: new Date().toISOString()
  },
  {
    region: 'Kumasi',
    country: 'Ghana',
    latitude: 6.6666,
    longitude: -1.6163,
    temperature: 30,
    humidity: 80,
    windSpeed: 8,
    rainfall: 1.5,
    condition: 'rainy',
    riskLevel: 'low',
    timestamp: new Date().toISOString()
  },
  {
    region: 'Tamale',
    country: 'Ghana',
    latitude: 9.4008,
    longitude: -0.8393,
    temperature: 36,
    humidity: 40,
    windSpeed: 15,
    rainfall: 0,
    condition: 'drought',
    riskLevel: 'high',
    timestamp: new Date().toISOString()
  },
  {
    region: 'Nairobi',
    country: 'Kenya',
    latitude: -1.2864,
    longitude: 36.8172,
    temperature: 25,
    humidity: 65,
    windSpeed: 10,
    rainfall: 0.5,
    condition: 'cloudy',
    riskLevel: 'low',
    timestamp: new Date().toISOString()
  },
  {
    region: 'Mombasa',
    country: 'Kenya',
    latitude: -4.0435,
    longitude: 39.6682,
    temperature: 29,
    humidity: 78,
    windSpeed: 14,
    rainfall: 2.1,
    condition: 'rainy',
    riskLevel: 'medium',
    timestamp: new Date().toISOString()
  },
  {
    region: 'Lagos',
    country: 'Nigeria',
    latitude: 6.5244,
    longitude: 3.3792,
    temperature: 31,
    humidity: 80,
    windSpeed: 11,
    rainfall: 1.8,
    condition: 'rainy',
    riskLevel: 'medium',
    timestamp: new Date().toISOString()
  },
  {
    region: 'Abuja',
    country: 'Nigeria',
    latitude: 9.0765,
    longitude: 7.3986,
    temperature: 33,
    humidity: 55,
    windSpeed: 9,
    rainfall: 0.1,
    condition: 'sunny',
    riskLevel: 'low',
    timestamp: new Date().toISOString()
  },
  {
    region: 'Kano',
    country: 'Nigeria',
    latitude: 12.0022,
    longitude: 8.5920,
    temperature: 38,
    humidity: 30,
    windSpeed: 18,
    rainfall: 0,
    condition: 'drought',
    riskLevel: 'extreme',
    timestamp: new Date().toISOString()
  },
  // Asia
  {
    region: 'Delhi',
    country: 'India',
    latitude: 28.6139,
    longitude: 77.2090,
    temperature: 36,
    humidity: 45,
    windSpeed: 8,
    rainfall: 0,
    condition: 'sunny',
    riskLevel: 'high',
    timestamp: new Date().toISOString()
  },
  {
    region: 'Mumbai',
    country: 'India',
    latitude: 19.0760,
    longitude: 72.8777,
    temperature: 33,
    humidity: 70,
    windSpeed: 12,
    rainfall: 3.5,
    condition: 'rainy',
    riskLevel: 'medium',
    timestamp: new Date().toISOString()
  },
  {
    region: 'Bangkok',
    country: 'Thailand',
    latitude: 13.7563,
    longitude: 100.5018,
    temperature: 32,
    humidity: 75,
    windSpeed: 7,
    rainfall: 2.1,
    condition: 'rainy',
    riskLevel: 'medium',
    timestamp: new Date().toISOString()
  },
  {
    region: 'Beijing',
    country: 'China',
    latitude: 39.9042,
    longitude: 116.4074,
    temperature: 27,
    humidity: 50,
    windSpeed: 15,
    rainfall: 0.1,
    condition: 'cloudy',
    riskLevel: 'low',
    timestamp: new Date().toISOString()
  },
  // Europe
  {
    region: 'Paris',
    country: 'France',
    latitude: 48.8566,
    longitude: 2.3522,
    temperature: 24,
    humidity: 60,
    windSpeed: 10,
    rainfall: 0.5,
    condition: 'cloudy',
    riskLevel: 'low',
    timestamp: new Date().toISOString()
  },
  {
    region: 'Madrid',
    country: 'Spain',
    latitude: 40.4168,
    longitude: -3.7038,
    temperature: 30,
    humidity: 35,
    windSpeed: 8,
    rainfall: 0,
    condition: 'sunny',
    riskLevel: 'high',
    timestamp: new Date().toISOString()
  },
  {
    region: 'Rome',
    country: 'Italy',
    latitude: 41.9028,
    longitude: 12.4964,
    temperature: 29,
    humidity: 55,
    windSpeed: 6,
    rainfall: 0.2,
    condition: 'sunny',
    riskLevel: 'medium',
    timestamp: new Date().toISOString()
  },
  // Americas
  {
    region: 'New York',
    country: 'USA',
    latitude: 40.7128,
    longitude: -74.0060,
    temperature: 26,
    humidity: 65,
    windSpeed: 12,
    rainfall: 0.8,
    condition: 'cloudy',
    riskLevel: 'low',
    timestamp: new Date().toISOString()
  },
  {
    region: 'California',
    country: 'USA',
    latitude: 36.7783,
    longitude: -119.4179,
    temperature: 32,
    humidity: 30,
    windSpeed: 9,
    rainfall: 0,
    condition: 'drought',
    riskLevel: 'extreme',
    timestamp: new Date().toISOString()
  },
  {
    region: 'Rio de Janeiro',
    country: 'Brazil',
    latitude: -22.9068,
    longitude: -43.1729,
    temperature: 28,
    humidity: 75,
    windSpeed: 7,
    rainfall: 1.2,
    condition: 'rainy',
    riskLevel: 'medium',
    timestamp: new Date().toISOString()
  },
  {
    region: 'Buenos Aires',
    country: 'Argentina',
    latitude: -34.6037,
    longitude: -58.3816,
    temperature: 24,
    humidity: 60,
    windSpeed: 14,
    rainfall: 0.3,
    condition: 'cloudy',
    riskLevel: 'low',
    timestamp: new Date().toISOString()
  },
  // Australia/Oceania
  {
    region: 'Sydney',
    country: 'Australia',
    latitude: -33.8688,
    longitude: 151.2093,
    temperature: 23,
    humidity: 65,
    windSpeed: 16,
    rainfall: 1.0,
    condition: 'cloudy',
    riskLevel: 'low',
    timestamp: new Date().toISOString()
  },
  {
    region: 'Perth',
    country: 'Australia',
    latitude: -31.9505,
    longitude: 115.8605,
    temperature: 29,
    humidity: 40,
    windSpeed: 20,
    rainfall: 0,
    condition: 'sunny',
    riskLevel: 'high',
    timestamp: new Date().toISOString()
  },
  {
    region: 'Auckland',
    country: 'New Zealand',
    latitude: -36.8509,
    longitude: 174.7645,
    temperature: 18,
    humidity: 70,
    windSpeed: 15,
    rainfall: 1.8,
    condition: 'rainy',
    riskLevel: 'medium',
    timestamp: new Date().toISOString()
  }
];

/**
 * Get all weather data
 */
export function getAllWeatherData(): WeatherData[] {
  return mockWeatherData;
}

/**
 * Get weather data for a specific region
 */
export function getWeatherByRegion(regionName: string): WeatherData | null {
  const region = mockWeatherData.find(r => 
    r.region.toLowerCase() === regionName.toLowerCase() ||
    r.country.toLowerCase() === regionName.toLowerCase()
  );
  return region || null;
}

/**
 * Get weather data by coordinates
 */
export function getWeatherByCoordinates(latitude: number, longitude: number): WeatherData | null {
  // Find the closest region based on coordinates
  let closestRegion = null;
  let minDistance = Number.MAX_VALUE;
  
  for (const region of mockWeatherData) {
    const distance = Math.sqrt(
      Math.pow(region.latitude - latitude, 2) + 
      Math.pow(region.longitude - longitude, 2)
    );
    
    if (distance < minDistance) {
      minDistance = distance;
      closestRegion = region;
    }
  }
  
  return closestRegion;
}

/**
 * Get risk assessment for a region
 */
export function getRiskAssessment(regionName: string): { 
  riskLevel: string; 
  description: string;
  recommendations: string[];
} {
  const region = getWeatherByRegion(regionName);
  
  if (!region) {
    return {
      riskLevel: 'unknown',
      description: 'No data available for this region',
      recommendations: ['Consider purchasing general coverage']
    };
  }
  
  const recommendations = [];
  let description = '';
  
  switch (region.riskLevel) {
    case 'low':
      description = 'Low risk of weather-related crop damage in this region';
      recommendations.push('Standard coverage recommended');
      recommendations.push('Monitor weather patterns for seasonal changes');
      break;
    case 'medium':
      description = 'Moderate risk of weather-related crop damage';
      recommendations.push('Enhanced coverage recommended');
      recommendations.push('Implement basic protective measures');
      recommendations.push('Regular monitoring of weather conditions advised');
      break;
    case 'high':
      description = 'High risk of weather-related crop damage in this region';
      recommendations.push('Premium coverage strongly recommended');
      recommendations.push('Implement comprehensive protective measures');
      recommendations.push('Daily weather monitoring essential');
      break;
    case 'extreme':
      description = 'Extreme risk of crop failure due to severe weather conditions';
      recommendations.push('Maximum coverage essential');
      recommendations.push('Consider crop diversification');
      recommendations.push('Immediate protective measures required');
      recommendations.push('Continuous weather monitoring critical');
      break;
  }
  
  return {
    riskLevel: region.riskLevel,
    description,
    recommendations
  };
}

export type { WeatherData }; 