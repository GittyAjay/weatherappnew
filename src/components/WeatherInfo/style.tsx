import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    weatherInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 30,
        marginHorizontal: 30,
    },
    weatherInfoItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    weatherInfoItemText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    },
    weatherInfoItemTextValue: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    },
    weatherInfoItemDescription: {
        color: 'white',
        fontSize: 12,
        maxWidth: 100,
        fontFamily: 'Poppins-Regular',
    },
})