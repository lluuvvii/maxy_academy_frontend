import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { View, Text, Button } from 'react-native-ui-lib';
import RNPickerSelect from 'react-native-picker-select';

const WeatherInfo = () => {
  const [provinces, setProvinces] = useState<any[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [weatherInfo, setWeatherInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [loadingProvinces, setLoadingProvinces] = useState(false);

  // Fetching provinces from the API
  const fetchProvince = async () => {
    setLoadingProvinces(true);
    try {
      const response = await fetch('https://weather-api-tau-six.vercel.app/provinces');
      const data = await response.json();
      setProvinces(data.data);
    } catch (err) {
      console.log('Error fetching provinces:', err);
    } finally {
      setLoadingProvinces(false);
    }
  };

  // Fetching weather info based on the selected province
  const fetchWeatherInfo = async () => {
    if (!selectedProvince) return;

    setLoading(true);
    try {
      const response = await fetch(`https://weather-api-tau-six.vercel.app/weather/${selectedProvince}`);
      const data = await response.json();
      setWeatherInfo(data.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProvince();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Weather Information</Text>

      {loadingProvinces ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            placeholder={{ label: "Select Province", value: '' }}
            value={selectedProvince}
            onValueChange={(value) => setSelectedProvince(value)}
            items={provinces.map((province: any) => ({
              label: province.name,
              value: province.id,
            }))}
            style={pickerSelectStyles}
          />
        </View>
      )}

      <Text>{selectedProvince}</Text>

      <Button
        label="Fetch Weather Info"
        onPress={fetchWeatherInfo}
        style={styles.button}
        backgroundColor="#007AFF"
      />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : weatherInfo ? (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>Province: {JSON.stringify(weatherInfo)}</Text>
          {/* <Text style={styles.weatherText}>Temperature: {weatherInfo.temperature}°C</Text>
          <Text style={styles.weatherText}>Condition: {weatherInfo.condition}</Text> */}
        </View>
      ) : (
        <Text style={styles.noData}>No weather data available {JSON.stringify(weatherInfo)}</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  pickerContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  button: {
    marginBottom: 20,
  },
  weatherContainer: {
    padding: 20,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    marginBottom: 20,
  },
  weatherText: {
    fontSize: 18,
    marginBottom: 10,
  },
  noData: {
    textAlign: 'center',
    fontSize: 16,
    color: '#777',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // To ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // To ensure the text is never behind the icon
  },
});

export default WeatherInfo;
