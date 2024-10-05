import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';

const SettingsPage = () => {
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);
    const toggleTheme = () => setIsDarkTheme(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>

            <View style={styles.setting}>
                <Text>Enable Notifications</Text>
                <Switch
                    onValueChange={toggleNotifications}
                    value={isNotificationsEnabled}
                />
            </View>

            <View style={styles.setting}>
                <Text>Dark Theme</Text>
                <Switch
                    onValueChange={toggleTheme}
                    value={isDarkTheme}
                />
            </View>

            <Button title="Save Settings" onPress={() => alert('Settings Saved!')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
});

export default SettingsPage;
