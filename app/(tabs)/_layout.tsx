import React from 'react';
import { Tabs } from 'expo-router';
import { Home, MessageCircle, Settings } from 'lucide-react-native'; // Import the icons you need

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />, // Use the Home icon
          tabBarLabel: () => null, // Remove the tab name
        }}
      />
      <Tabs.Screen
        name="conversations"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MessageCircle color={color} size={size} />, // Use the MessageCircle icon
          tabBarLabel: () => null, // Remove the tab name
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />, // Use the Settings icon
          tabBarLabel: () => null, // Remove the tab name
        }}
      />
    </Tabs>
  );
}
