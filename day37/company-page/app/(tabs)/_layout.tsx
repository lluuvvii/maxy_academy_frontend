import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ServicesScreen from '../screens/ServicesScreen';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';
import { View } from 'react-native-ui-lib';

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }: { color: string; size: number }) => {
            // let iconName = "home"
            // if (route.name === 'Home') {
            //   iconName = 'home';
            // } else if (route.name === 'About') {
            //   iconName = 'infocirlceo';
            // } else if (route.name === 'Services') {
            //   iconName = 'appstore-o';
            // }
            // if (iconName) {
            return <AntDesign name={route.name === "Home" ? "home" : route.name === "About" ? "infocirlceo" : "appstore-o"} size={size} color={color} />;
            // }
          },
          tabBarActiveTintColor: '#4c669f',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* <Tab.Screen name="About" component={AboutScreen} /> */}
        {/* <Tab.Screen name="Services" component={ServicesScreen} /> */}
      </Tab.Navigator>
    </SafeAreaView>
  );
}
