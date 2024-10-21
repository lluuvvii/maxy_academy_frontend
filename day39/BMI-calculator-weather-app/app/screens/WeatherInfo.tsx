import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  weather: [{ description: string }];
  visibility: number;
  name: string;
}

const WeatherInfo = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false)

  const [chartWidth, setChartWidth] = useState(Dimensions.get('window').width - 40);

  // Update chart width on dimension change
  useEffect(() => {
    const onChange = (result: any) => {
      setChartWidth(result.window.width); // Update width on orientation change

      if (result.window.width < 600) {
        setIsSmallScreen(true)
      }

      setIsSmallScreen(true)
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => subscription?.remove();
  }, []);

  const fetchData = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b160d13367e876e2f5ba8b5282b85290`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch weather data.');
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

  const getChartData = () => {
    if (!weatherData) return { labels: [], data: [] };

    const labels = ['Temperature', 'Feels Like', 'Humidity', 'Wind Speed'];
    const data = [
      weatherData.main.temp,
      weatherData.main.feels_like,
      weatherData.main.humidity,
      weatherData.wind.speed,
    ];

    return { labels, data };
  };

  const { labels, data } = getChartData();

  return (
    <ScrollView>
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
        {loading && <ActivityIndicator size="large" />}
        {weatherData ?
          <View style={styles.container}>
            <Text style={styles.title}>{weatherData.name} weather overview</Text>
            <View style={{
              flexDirection: isSmallScreen ? 'column' : 'row',
              justifyContent: 'space-between',
              marginBottom: 16,
            }}>
              <View style={styles.infoBox}>
                <Ionicons name="thermometer" size={24} color="#fff" />
                <Text style={styles.infoText}>Temperature: {data[0]}°C</Text>
              </View>
              <View style={styles.infoBox}>
                <MaterialIcons name="visibility" size={24} color="#fff" />
                <Text style={styles.infoText}>Humidity: {data[2]}%</Text>
              </View>
              <View style={styles.infoBox}>
                <Feather name="wind" size={24} color="#fff" />
                <Text style={styles.infoText}>Wind Speed: {data[3]} m/s</Text>
              </View>
            </View>

            {/* Grafik untuk visualisasi data cuaca */}
            <ScrollView horizontal={true}>
              <LineChart
                data={{
                  labels: labels,
                  datasets: [
                    {
                      data: data,
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      strokeWidth: 2,
                    },
                  ],
                }}
                width={chartWidth}
                height={220}
                chartConfig={{
                  backgroundColor: '#1E2923',
                  backgroundGradientFrom: '#1E2923',
                  backgroundGradientTo: '#08130D',
                  decimalPlaces: 1,
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </ScrollView>
          </View>
          : null}
      </View>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E2923',
    padding: 16,
    borderRadius: 16,
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E3B4E',
    padding: 8,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 4,
  },
  infoText: {
    color: '#fff',
    marginLeft: 8,
  },
});

export default WeatherInfo;
