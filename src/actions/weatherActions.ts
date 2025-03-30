import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWeather } from '../utils/endpoint';
import { WeatherResponse } from '../utils/types/weatherType';

const weatherCache: { [key: string]: { data: WeatherResponse; timestamp: number } } = {};
const CACHE_DURATION = 30 * 60 * 1000;

export const fetchWeather = createAsyncThunk<WeatherResponse, string>(
  'weather/fetchWeather',
  async (location: string) => {
    const cachedData = weatherCache[location];
    const now = Date.now();

    if (cachedData && now - cachedData.timestamp < CACHE_DURATION) {
      return cachedData.data;
    }
    const weatherData = await getWeather(location);
    weatherCache[location] = {
      data: weatherData,
      timestamp: now,
    };

    return weatherData;
  }
);
