import React from 'react';
import { Text, View } from 'react-native';
import { Svg } from '../../../assets/svgs';
import { weatherIcons } from '../../utils/constant';
import { styles } from './style';
interface ForcastCardProps {
    time: string
    temp: string
    icon: string
}
export default function index({ time, temp, icon }: ForcastCardProps) {
    // console.log("icon here===", icon);
    const iconName = weatherIcons[icon as keyof typeof weatherIcons];

    return (
        <View style={styles.footerItem}>
            <Svg name={iconName} width={34} height={34} />
            <View style={styles.footerItemTextContainer}>
                <Text style={styles.footerItemText}>{time}</Text>
                <Text style={styles.footerItemTextValue}>{temp}</Text>
            </View>
        </View>
    )
}