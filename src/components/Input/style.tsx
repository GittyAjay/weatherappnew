import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    input: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    },
    clearButton: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
});