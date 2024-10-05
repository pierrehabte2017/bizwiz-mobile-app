import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const conversations = [
    {
        id: '1',
        name: 'John Doe',
        lastMessage: 'Hey, how are you?',
        unreadMessages: 2,
        image: 'https://via.placeholder.com/50',
    },
    {
        id: '2',
        name: 'Jane Smith',
        lastMessage: 'Let\'s catch up later!',
        unreadMessages: 0,
        image: 'https://via.placeholder.com/50',
    },
    {
        id: '3',
        name: 'Alice Johnson',
        lastMessage: 'Can you send me the report?',
        unreadMessages: 1,
        image: 'https://via.placeholder.com/50',
    },
    {
        id: '4',
        name: 'Bob Brown',
        lastMessage: 'Meeting at 3 PM.',
        unreadMessages: 0,
        image: 'https://via.placeholder.com/50',
    },
    {
        id: '5',
        name: 'Charlie Davis',
        lastMessage: 'Happy Birthday!',
        unreadMessages: 3,
        image: 'https://via.placeholder.com/50',
    },
    // Add more dummy data as needed
];

const ConversationPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>WhatsApp Conversations</Text>
            <TextInput style={styles.searchBar} placeholder="Search" />
            <View style={styles.filters}>
                <TouchableOpacity><Text style={styles.filterText}>All</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.filterText}>Unread</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.filterText}>Favorites</Text></TouchableOpacity>
            </View>
            <FlatList
                data={conversations}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.conversation}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.lastMessage}>{item.lastMessage}</Text>
                        </View>
                        {item.unreadMessages > 0 && (
                            <View style={styles.unreadBadge}>
                                <Text style={styles.unreadText}>{item.unreadMessages}</Text>
                            </View>
                        )}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    filters: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    filterText: {
        fontSize: 16,
        color: '#007AFF',
    },
    conversation: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    lastMessage: {
        color: '#888',
    },
    unreadBadge: {
        backgroundColor: '#FF3B30',
        borderRadius: 12,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    unreadText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ConversationPage;
