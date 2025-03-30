import React from 'react';
import { ImageBackground, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { backgroundImages } from '../../utils/constant';
import Footer from './sections/Footer';
import TopHeader from './sections/Header';
import MainTemp from './sections/MainTemp';
import WeatherInfos from './sections/WeatherInfo';
import { styles } from './style';

export default function WeatherDashboard({
    componentId
}: {
    componentId: string;
}) {
    const { backgroundImage } = useSelector((state: RootState) => state.weather);
    return (
        <ImageBackground
            source={backgroundImages[backgroundImage as keyof typeof backgroundImages]}
            style={styles.container}>
            <TopHeader componentId={componentId} />
            <View style={styles.weatherContainer}>
                <MainTemp />
                <WeatherInfos />
            </View>
            <Footer />
        </ImageBackground>

    );
}