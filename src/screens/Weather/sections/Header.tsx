// import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { useSelector } from 'react-redux'
import { Svg } from '../../../../assets/svgs'
import { useWeatherScreen } from '../../../hooks/useWeatherScreen'
import { RootState } from '../../../store/store'
import { globalStyles } from '../../../style'
import { styles } from '../style'
interface TopHeaderProps {
    componentId: string;
}
export default function TopHeader({ componentId }: TopHeaderProps) {
    const { query } = useSelector((state: RootState) => state.weather);
    const { weather, loading, error } = useWeatherScreen({ location: query });
    const handleSearch = () => {
        Navigation.push(componentId, {
            component: {
                name: 'com.myApp.Search',
            },
        }).catch(err => console.error('Navigation error:', err));
    }
    return (
        <>
            <View style={styles.topHeader}>
                <Text style={[globalStyles.headingText, { flex: 0.8 }]}>{weather?.resolvedAddress || ''}</Text>
                <TouchableOpacity onPress={handleSearch}>
                    <Svg name='search_icon' width={26} height={24} />
                </TouchableOpacity>
            </View>
        </>
    )
}