import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from '../actions/weatherActions';
import { WeatherResponse } from '../utils/types/weatherType';

interface SearchResult {
  id: number;
  title: string;
  description: string;
}
const initialState = {
  weather: null as WeatherResponse | null,
  loading: false,
  searchResults: [] as SearchResult[],
  error: null as string | null,
  query: 'Delhi' as string,
  backgroundImage: 'cloudy' as string,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setBackgroundImage: (state, action) => {
      state.backgroundImage = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchWeather.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.weather = action.payload;
      state.searchResults = [
        {
          id: 1,
          title: action.payload.resolvedAddress,
          description: `${action.payload.currentConditions.temp}°F - ${action.payload.currentConditions.conditions}`,
        },
      ];
      console.log('Current Conditions Icon:', action.payload.currentConditions.icon);
      if (action.payload.currentConditions.icon === 'clear-day') {
        state.backgroundImage = 'clear';
      } else if (
        action.payload.currentConditions.icon === 'cloudy' ||
        action.payload.currentConditions.icon === 'partly-cloudy-day'
      ) {
        state.backgroundImage = 'cloudy';
      } else if (action.payload.currentConditions.icon === 'rain') {
        state.backgroundImage = 'rainy';
      }
      state.loading = false;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    });
  },
});

export const { setWeather, setLoading, setError, setSearchResults, setQuery, setBackgroundImage } =
  weatherSlice.actions;
export default weatherSlice.reducer;
