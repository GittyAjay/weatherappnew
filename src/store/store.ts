import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weatherslice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
