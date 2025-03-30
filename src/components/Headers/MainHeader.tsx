import React from 'react';
import { Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MenuIcon from '../../../assets/icons/menu.png';
import { styles } from './style';
export default function MainHeader() {
    return (
        <LinearGradient colors={['#4B2A8F', '#2C1463']} style={styles.container}>
            <Text style={styles.title}>London, UK</Text>
            <Image source={MenuIcon} style={styles.menuIcon} />
        </LinearGradient>
    );
}
