import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useWeatherScreen } from '../../../hooks/useWeatherScreen';
import { RootState } from '../../../store/store';
import { globalStyles } from '../../../style';
import { styles } from '../style';
export default function MainTemp() {
    const { scale } = useWindowDimensions();
    const { query } = useSelector((state: RootState) => state.weather);
    const { weather, loading, error } = useWeatherScreen({ location: query });
    return (
        <View style={styles.mainTemp}>
            <Text style={[globalStyles.headingText, { fontSize: 30 * scale }]}>{weather?.currentConditions.temp}°C</Text>
        </View>
    )
}