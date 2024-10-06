import React, { useState, useEffect } from 'react';
import { View, Text, Colors } from 'react-native-ui-lib';

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric');
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View padding-20>
      {weatherData && (
        <>
          <Text text60 marginB-10>City: {weatherData.name}</Text>
          <Text text60 marginB-10>Temperature: {weatherData.main.temp} °C</Text>
          <Text text60>Weather: {weatherData.weather[0].description}</Text>
        </>
      )}
    </View>
  );
};

export default WeatherInfo;
