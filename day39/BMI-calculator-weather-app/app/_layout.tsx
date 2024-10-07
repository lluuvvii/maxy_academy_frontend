import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
// import { NavigationContainer } from '@react-navigation/native';

import BMICalculator from './screens/BMICalculator';
import WeatherInfo from './screens/WeatherInfo';
import Calculator from './screens/Calculator';

import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaView } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

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
        <Tab.Navigator initialRouteName="screens/BMICalculator">
          <Tab.Screen
            options={{
              title: "BMI Calculator",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'calculator' : 'calculator-outline'} color={color} />
              )
            }}
            name="screens/BMICalculator"
            component={BMICalculator} />
          <Tab.Screen
            options={{
              title: "Calculator",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'calculator' : 'calculator-outline'} color={color} />
              )
            }}
            name="screens/Calculator"
            component={Calculator} />
          <Tab.Screen
            options={{
              title: "Weather Information",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'cloudy-night' : 'cloudy-night-outline'} color={color} />
              )
            }}
            name="screens/WeatherInfo"
            component={WeatherInfo} />
        </Tab.Navigator>
      </SafeAreaView>
    </ThemeProvider>
  );
}
