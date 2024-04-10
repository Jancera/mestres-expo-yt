import {
  useFonts,
  Inter_700Bold,
  Inter_100Thin,
} from "@expo-google-fonts/inter";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function MainLayout() {
  const [fontsLoaded, loadError] = useFonts({
    Inter_100Thin,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, loadError]);

  if (!fontsLoaded || loadError) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
