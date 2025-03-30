import { BlurView } from '@react-native-community/blur'
import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import Devider from '../../../components/Devider'
import WeatherInfo from '../../../components/WeatherInfo'
import { useWeatherScreen } from '../../../hooks/useWeatherScreen'
import { RootState } from '../../../store/store'
import { styles } from '../style'


export default function WeatherInfos() {
    const { query } = useSelector((state: RootState) => state.weather);
    const { weather, loading, error } = useWeatherScreen({ location: query });
    return (
        <BlurView style={{ marginHorizontal: 15 }} blurType='light' blurAmount={10} reducedTransparencyFallbackColor='white'>
            <View style={styles.weatherInfo}>
                <WeatherInfo
                    title='Temperature'
                    value={`${weather?.currentConditions.temp || 0}°C`}
                    loading={loading}
                    description={weather?.currentConditions.conditions || ''} />
                <Devider type='vertical' />
                <WeatherInfo
                    title='Humidity'
                    value={`${weather?.currentConditions.humidity || 0}%`}
                    loading={loading}
                    description={weather?.currentConditions.conditions || ""} />
                <Devider type='vertical' />
                <WeatherInfo
                    title='Wind'
                    value={`${weather?.currentConditions.windspeed || 0} km/h`}
                    loading={loading}
                    description={weather?.currentConditions.conditions || ""} />
            </View>
        </BlurView>
    )
}