import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions';
import { AppDispatch, RootState } from '../store/store';
interface UseWeatherScreenProps {
    location: string;
}
export const useWeatherScreen = ({ location }: UseWeatherScreenProps) => {
    const weather = useSelector((state: RootState) => state.weather.weather);
    const loading = useSelector((state: RootState) => state.weather.loading);
    const error = useSelector((state: RootState) => state.weather.error);
    const dispatch = useDispatch<AppDispatch>();
    React.useEffect(() => {
        dispatch(fetchWeather(location));
    }, [dispatch, location]);

    return { weather, loading, error };
}

