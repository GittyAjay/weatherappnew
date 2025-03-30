import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    searchContainer: {
        marginBottom: 16,
    },
    searchInput: {
        height: 48,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
    },
    loader: {
        marginTop: 20,
    },
    resultsList: {
        flexGrow: 1,
    },
    resultItem: {
        padding: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginBottom: 12,
    },
    resultTitle: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'Poppins-Regular',
        marginBottom: 4,
    },
    resultDescription: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#666',
    },
    noResults: {
        textAlign: 'center',
        color: '#666',
        marginTop: 20,
    },
    headerContainer: {
        backgroundColor: '#f5f5f5',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        marginBottom: 16,
    },
    sectionHeader: {
        fontSize: 16,
        color: '#666',
        fontFamily: 'Poppins-Regular',
    },
});