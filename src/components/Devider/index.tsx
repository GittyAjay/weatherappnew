import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
interface DeviderProps {
    type?: 'horizontal' | 'vertical';
}
export default function Devider({ type = 'horizontal' }: DeviderProps) {
    return (
        <View>
            {type === 'horizontal' ? (
                <View style={styles.horizontalDevider} />
            ) : (
                <View style={styles.verticalDevider} />
            )}
        </View>
    )
}