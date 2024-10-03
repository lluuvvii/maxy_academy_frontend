import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import PortfolioScreen from './screens/PortfolioScreen';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="screens/HomeScreen">
          <Stack.Screen options={{ title: 'Home' }} name="screens/HomeScreen" component={HomeScreen} />
          <Stack.Screen options={{ title: 'About' }} name="screens/AboutScreen" component={AboutScreen} />
          <Stack.Screen options={{ title: 'Portfolio' }} name="screens/PortfolioScreen" component={PortfolioScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </ThemeProvider>
  );
}
