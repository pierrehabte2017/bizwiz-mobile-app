// index.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router'; // Use router from expo-router

export default function HomeScreen() {

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('(auth)/login' as never); // Navigate after the splash screen
        }, 3000); // 3 seconds

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);



    return (
        <View style={styles.splashContainer}>
            <Image
                source={require('../assets/images/splash.png')}
                style={styles.splashImage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Example background color for splash screen
    },
    splashImage: {
        width: '100%', // Adjust width as needed
        height: '100%', // Adjust height as needed
        resizeMode: 'contain', // Adjust resize mode as needed
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
