import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { View } from 'react-native-ui-lib';
import { Dimensions } from 'react-native';

const WeatherChart = ({ forecastData }: { forecastData: any }) => {
  const dates = forecastData.map((day: any) => day.date);
  const temperatures = forecastData.map((day: any) => day.day.avgtemp_c);

  return (
    <View>
      <LineChart
        data={{
          labels: dates,
          datasets: [
            {
              data: temperatures,
            },
          ],
        }}
        width={Dimensions.get('window').width - 40} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix="°C"
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
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
    </View>
  );
};

export default WeatherChart;
