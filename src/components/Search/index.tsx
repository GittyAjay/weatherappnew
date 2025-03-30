import React from 'react';
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input/Input';
import { setSearchResults } from '../../features/weatherslice';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import { AppDispatch } from '../../store/store';
import { styles } from './style';
interface SearchResult {
    id: number;
    title: string;
    description: string;
}

function SearchPage({ componentId }: { componentId: string }) {
    const dispatch = useDispatch<AppDispatch>();
    React.useEffect(() => {
        dispatch(setSearchResults([]));
    }, [dispatch])

    const {
        query,
        searchResults,
        handleSearch,
        loading,
        setSelectedLocation
    } = useSearchQuery();

    function renderItem({ item }: { item: SearchResult }) {
        return (
            <TouchableOpacity
                style={styles.resultItem}
                onPress={() => {
                    setSelectedLocation(item.title);
                    Navigation.pop(componentId);
                }}
            >
                <Text style={styles.resultTitle}>{item.title}</Text>
                <Text style={styles.resultDescription}>{item.description}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.searchContainer}>
                    <Input
                        placeholder='Search...'
                        onChangeText={handleSearch}
                        value={query}
                        placeholderTextColor='gray'
                        style={{ borderColor: 'gray' }}
                    />
                </View>

                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
                ) : (
                    <FlatList
                        data={searchResults}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={styles.resultsList}
                        ListHeaderComponent={!query && searchResults.length > 0 ? (
                            <View style={styles.headerContainer}>
                                <Text style={styles.sectionHeader}>Recent Searches</Text>
                            </View>
                        ) : null}
                        ListEmptyComponent={
                            <Text style={styles.noResults}>
                                {query ? 'No results found' : 'No recent searches'}
                            </Text>
                        }
                    />
                )}
            </View>
        </SafeAreaView>
    );
}

export default SearchPage;
