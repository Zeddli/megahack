"use client";

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PageLayout from '../components/PageLayout';
import { getAllWeatherData, getWeatherByRegion, getRiskAssessment } from '../lib/weatherService';
import type { WeatherData } from '../lib/weatherService';
import AuthGuard from '../components/AuthGuard';

export default function WeatherPage() {
  const router = useRouter();
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [regionWeather, setRegionWeather] = useState<WeatherData | null>(null);
  const [riskAssessment, setRiskAssessment] = useState<{
    riskLevel: string;
    description: string;
    recommendations: string[];
  } | null>(null);
  const [mapZoom, setMapZoom] = useState<number>(1);
  const [mapPosition, setMapPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const lastPositionRef = useRef<{ x: number; y: number } | null>(null);

  // Load weather data on component mount
  useEffect(() => {
    setWeatherData(getAllWeatherData());
  }, []);

  // Handle region selection
  const handleRegionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value;
    setSelectedRegion(region);
    
    if (region) {
      const data = getWeatherByRegion(region);
      setRegionWeather(data);
      setRiskAssessment(getRiskAssessment(region));
      
      // Center map on selected region if we have coordinates
      if (data) {
        centerMapOnCoordinates(data.latitude, data.longitude);
      }
    } else {
      setRegionWeather(null);
      setRiskAssessment(null);
    }
  };

  // Center map on coordinates
  const centerMapOnCoordinates = (latitude: number, longitude: number) => {
    if (!mapRef.current) return;
    
    const mapWidth = mapRef.current.clientWidth;
    const mapHeight = mapRef.current.clientHeight;
    
    // Convert lat/long to x/y position
    // This is a simplified version - in a real app, use a proper mapping library
    const x = (longitude + 180) * (mapWidth / 360) - mapWidth / 2;
    const y = (latitude * -1 + 90) * (mapHeight / 180) - mapHeight / 2;
    
    setMapPosition({ x, y });
  };

  // Handle map zooming
  const handleZoomIn = () => {
    setMapZoom(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setMapZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  // Handle map dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    lastPositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingRef.current && lastPositionRef.current) {
      const dx = e.clientX - lastPositionRef.current.x;
      const dy = e.clientY - lastPositionRef.current.y;
      
      setMapPosition(prev => ({
        x: prev.x + dx,
        y: prev.y + dy
      }));
      
      lastPositionRef.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Get icon based on weather condition
  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return '☀️';
      case 'cloudy':
        return '☁️';
      case 'rainy':
        return '🌧️';
      case 'stormy':
        return '⛈️';
      case 'drought':
        return '🏜️';
      default:
        return '❓';
    }
  };

  // Get color based on risk level
  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'extreme':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Handle Get Coverage button click
  const handleGetCoverage = () => {
    // Navigate to policy page
    router.push('/policy');
  };

  const weatherPageContent = (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Weather Monitoring</h1>
        <p className="text-secondary">Track weather patterns and assess crop risks in your region</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">World Map</h2>
              <div className="flex gap-2">
                <button 
                  onClick={handleZoomIn}
                  className="p-2 bg-gray-100 rounded hover:bg-gray-200"
                >
                  +
                </button>
                <button 
                  onClick={handleZoomOut}
                  className="p-2 bg-gray-100 rounded hover:bg-gray-200"
                >
                  -
                </button>
              </div>
            </div>
            
            <div 
              className="relative overflow-hidden border border-gray-200 rounded-lg h-[400px]"
              ref={mapRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* World Map */}
              <div 
                className="absolute cursor-grab transition-all duration-200"
                style={{
                  transform: `translate(${mapPosition.x}px, ${mapPosition.y}px) scale(${mapZoom})`,
                  transformOrigin: 'center',
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Weather markers */}
                {weatherData.map((region) => (
                  <div 
                    key={region.region}
                    className={`absolute px-2 py-1 rounded-full cursor-pointer ${getRiskColor(region.riskLevel)}`}
                    style={{
                      left: `${((region.longitude + 180) / 360) * 100}%`,
                      top: `${((region.latitude * -1 + 90) / 180) * 100}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onClick={() => {
                      setSelectedRegion(region.region);
                      setRegionWeather(region);
                      setRiskAssessment(getRiskAssessment(region.region));
                    }}
                    title={region.region}
                  >
                    {getWeatherIcon(region.condition)}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-500">
              Click and drag to move the map. Use the + and - buttons to zoom.
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4">Region Selector</h2>
            <select
              value={selectedRegion}
              onChange={handleRegionSelect}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            >
              <option value="">Select a region</option>
              {weatherData.map(region => (
                <option key={region.region} value={region.region}>
                  {region.region}, {region.country}
                </option>
              ))}
            </select>
            
            {regionWeather && (
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold">
                    {regionWeather.region}, {regionWeather.country}
                  </h3>
                  <span className="text-4xl">{getWeatherIcon(regionWeather.condition)}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm text-gray-700">Temperature:</div>
                  <div className="text-sm font-medium">{regionWeather.temperature}°C</div>
                  
                  <div className="text-sm text-gray-700">Humidity:</div>
                  <div className="text-sm font-medium">{regionWeather.humidity}%</div>
                  
                  <div className="text-sm text-gray-700">Wind Speed:</div>
                  <div className="text-sm font-medium">{regionWeather.windSpeed} km/h</div>
                  
                  <div className="text-sm text-gray-700">Rainfall:</div>
                  <div className="text-sm font-medium">{regionWeather.rainfall} mm</div>
                  
                  <div className="text-sm text-gray-700">Weather:</div>
                  <div className="text-sm font-medium capitalize">{regionWeather.condition}</div>
                  
                  <div className="text-sm text-gray-700">Risk Level:</div>
                  <div className={`text-sm font-medium px-2 rounded-full inline-block ${getRiskColor(regionWeather.riskLevel)}`}>
                    {regionWeather.riskLevel.toUpperCase()}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {riskAssessment && (
            <div className={`bg-white p-4 rounded-lg shadow-md border-l-4 ${getRiskColor(riskAssessment.riskLevel).replace('bg-', 'border-')}`}>
              <h2 className="text-xl font-bold mb-2">Risk Assessment</h2>
              <p className="text-sm text-gray-700 mb-4">{riskAssessment.description}</p>
              
              <h3 className="font-bold text-sm mb-2">Recommendations:</h3>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                {riskAssessment.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
              
              <div className="mt-4">
                <button 
                  className="w-full py-2 bg-primary hover:bg-primary-hover text-black rounded-md transition-colors"
                  onClick={handleGetCoverage}
                >
                  Get Coverage
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );

  return <AuthGuard>{weatherPageContent}</AuthGuard>;
} 