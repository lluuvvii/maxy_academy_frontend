import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button, Colors } from 'react-native-ui-lib';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState<number | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert height to meters
    if (!isNaN(w) && !isNaN(h) && h > 0) {
      const bmi = w / (h * h);
      setBmiResult(bmi);
    } else {
      setBmiResult(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter weight (kg)"
        keyboardType="numeric"
        onChangeText={setWeight}
        value={weight}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter height (cm)"
        keyboardType="numeric"
        onChangeText={setHeight}
        value={height}
      />

      <Button
        label="Calculate BMI"
        onPress={calculateBMI}
        style={styles.button}
        backgroundColor={Colors.blue30}
      />

      {bmiResult !== null && (
        <Text style={styles.result}>
          Your BMI is: {bmiResult.toFixed(2)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 18,
  },
  button: {
    marginVertical: 20,
    borderRadius: 10
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default BMICalculator;
