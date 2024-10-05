// _layout.tsx

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Home screen */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* Auth screens (login, signup) */}
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      {/* Tab navigation (for the main app after login) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
