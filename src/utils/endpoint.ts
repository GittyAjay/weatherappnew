import axios, { AxiosError } from 'axios';
// import config from 'react-native-config';
const VISUALCROSSING_API_KEY = 'EXHWHLNPK4PML8Q69QURMTZXS';
export const http = axios.create({
  baseURL: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 429) {
      console.error('Rate limit reached. Please wait before making more requests.');
    }
    return Promise.reject(error);
  }
);

export const getWeather = async (location: string) => {
  // console.log('getWeather location', location);
  if (!location) {
    throw new Error('Location is required');
  }

  try {
    const response = await http.get(
      `${location}?key=${VISUALCROSSING_API_KEY}&unitGroup=metric&contentType=json`
    );
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    if (
      axiosError.response?.data &&
      typeof axiosError.response.data === 'object' &&
      'message' in axiosError.response.data &&
      typeof axiosError.response.data.message === 'string' &&
      axiosError.response.data.message.includes('Invalid location')
    ) {
      throw new Error('Invalid location provided. Please check the location and try again.');
    }
    if (axiosError.response?.status === 401) {
      throw new Error('Invalid API key or authentication failed.');
    }
    if (axiosError.response?.status === 429) {
      throw new Error('Rate limit exceeded. Please try again later.');
    }
    if (axiosError.response?.status && axiosError.response.status >= 500) {
      throw new Error('Weather service is currently unavailable. Please try again later.');
    }
    // Generic error handling
    console.error('getWeather error:', axiosError.response?.data || axiosError.message);
    throw new Error('Failed to fetch weather data. Please try again.');
  }
};

export const getForecast = async (location: string, startDate?: string, endDate?: string) => {
  const endpoint = endDate
    ? `${location}/${startDate}/${endDate}`
    : startDate
    ? `${location}/${startDate}`
    : location;
  console.log('getForecast endpoint', endpoint);
  const response = await http.get(`${endpoint}?key=${VISUALCROSSING_API_KEY}`);
  console.log('getForecast response', response.data);
  return response.data;
};
