import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import ForcastCard from '../../../components/ForcastCard'
import { useWeatherScreen } from '../../../hooks/useWeatherScreen'
import { RootState } from '../../../store/store'
import { styles } from '../style'

export default function Footer() {
    const { query } = useSelector((state: RootState) => state.weather);
    const { weather, loading, error } = useWeatherScreen({ location: query });

    return (

        <View style={styles.footer}>
            <Text style={[styles.footerHeading]}>15-Day Forecast</Text>
            <FlatList
                data={weather?.days}
                keyExtractor={(item) => item.datetime}
                ListEmptyComponent={<Text style={styles.noData}>No data</Text>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <ForcastCard time={item.datetime} temp={`${Math.round(item.temp || 0)}°C`} icon={item.icon} />}
            />
        </View>

    )
}