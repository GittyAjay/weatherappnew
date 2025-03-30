import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { colors } from '../../utils/constant'
import { styles } from './style'

interface WeatherInfoProps {
    title: string
    value: string
    description: string
    loading: boolean
}
export default function WeatherInfo({ title, value, description, loading }: WeatherInfoProps) {
    return (
        <View style={styles.weatherInfoItem}>
            {
                loading ? <ActivityIndicator size='small' color={colors.primary} /> :
                    <>
                        <Text style={styles.weatherInfoItemText}>{title}</Text>
                        <Text style={styles.weatherInfoItemText}>{value}</Text>
                        <Text style={styles.weatherInfoItemDescription}>{description}</Text>
                    </>
            }
        </View>
    )
}