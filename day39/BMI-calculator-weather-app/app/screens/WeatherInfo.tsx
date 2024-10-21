import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-ui-lib';

const WeatherInfo = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    if (!city) return; // Jika tidak ada nama kota, keluar dari fungsi
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f78ad8ebeb3c15d28a43b3784bbfb8e3`
      );
      setWeatherData(response.data);
      console.log(response.data); // Anda bisa melihat semua data cuaca di console log
    } catch (error) {
      console.error(error);
      alert('Failed to fetch weather data.'); // Menampilkan alert jika gagal
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (text: string) => {
    setCity(text);
  };

  const handleSubmit = () => {
    fetchData();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          marginBottom: 10,
        }}
        placeholder="Enter city name"
        value={city}
        onChangeText={handleInputChange}
      />
      <Button title="Get Weather" onPress={handleSubmit} />
      {loading && <Text>Loading weather data...</Text>}
      {weatherData && (
        <Card style={{ marginTop: 20, padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{weatherData.name}</Text>
          <Text>Temperature: {weatherData.main.temp}°C</Text>
          <Text>Description: {weatherData.weather[0].description}</Text>
          <Text>Feels like: {weatherData.main.feels_like}°C</Text>
          <Text>Humidity: {weatherData.main.humidity}%</Text>
          <Text>Pressure: {weatherData.main.pressure} hPa</Text>
          <Text>Wind Speed: {weatherData.wind.speed} m/s</Text>
        </Card>
      )}
    </View>
  );
};

export default WeatherInfo;
