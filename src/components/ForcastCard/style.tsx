import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    footer: {
        paddingTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 30,
        height: '40%',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    footerHeading: {
        color: 'black',
        fontSize: 16,
        fontWeight: '100',
        fontFamily: 'Poppins-SemiBold',
    },
    footerItems: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    footerItem: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxHeight: 110,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    footerItemTextValue: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
    },
    footerItemTextContainer: {
        paddingTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },
    footerItemText: {
        color: 'gray',
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
    },
})