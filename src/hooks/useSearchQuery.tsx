import AsyncStorage from '@react-native-async-storage/async-storage';
import debounce from 'lodash/debounce';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions';
import { setQuery, setSearchResults } from '../features/weatherslice';
import { AppDispatch, RootState } from '../store/store';
const RECENT_SEARCHES_KEY = 'recent_searches';
const MAX_RECENT_SEARCHES = 5;

export const useSearchQuery = () => {
    const { query, searchResults, loading, error } = useSelector((state: RootState) => state.weather);
    const dispatch = useDispatch<AppDispatch>();
    const [recentSearches, setRecentSearches] = useState<Array<{ id: number; title: string; description: string }>>([]);

    // Load recent searches on mount
    useEffect(() => {
        dispatch(setSearchResults([]));
        loadRecentSearches();
    }, [dispatch]);

    const loadRecentSearches = async () => {
        try {
            const stored = await AsyncStorage.getItem(RECENT_SEARCHES_KEY);
            if (stored) {
                const searches = JSON.parse(stored);
                setRecentSearches(searches);
                if (!query) {
                    dispatch(setSearchResults(searches));
                }
            }
        } catch (error) {
            console.error('Error loading recent searches:', error);
        }
    };

    const saveRecentSearch = async (searchResult: { id: number; title: string; description: string }) => {
        try {
            const newRecents = [searchResult, ...recentSearches
                .filter(search => search.title !== searchResult.title)]
                .slice(0, MAX_RECENT_SEARCHES);

            await AsyncStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(newRecents));
            setRecentSearches(newRecents);
        } catch (error) {
            console.error('Error saving recent search:', error);
        }
    };

    const debouncedFetchWeather = useCallback(
        debounce((location: string) => {
            dispatch(fetchWeather(location));
        }, 1000),
        [dispatch]
    );

    const handleSearch = (location: string) => {
        dispatch(setQuery(location));
        if (!location) {
            dispatch(setSearchResults(recentSearches));
        } else {
            debouncedFetchWeather(location);
        }
    };

    const setSelectedLocation = async (location: string) => {
        dispatch(setQuery(location));
        const weatherResponse = await dispatch(fetchWeather(location)).unwrap();

        // Save to recent searches after successful fetch
        if (weatherResponse) {
            const searchResult = {
                id: Date.now(),
                title: weatherResponse.resolvedAddress,
                description: `${weatherResponse.currentConditions.temp}°F - ${weatherResponse.currentConditions.conditions}`,
            };
            await saveRecentSearch(searchResult);
        }
    };

    return {
        query,
        searchResults: query ? searchResults : recentSearches,
        handleSearch,
        loading,
        error,
        setSelectedLocation,
        recentSearches
    };
};
