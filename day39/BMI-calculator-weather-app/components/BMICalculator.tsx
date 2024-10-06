import React, { useState } from 'react';
import { View, Text, TextField, Button, Colors } from 'react-native-ui-lib';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState<number | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert to meters
    const bmi = w / (h * h);
    setBmiResult(bmi);
  };

  return (
    <View padding-20>
      <Text text60 marginB-20>BMI Calculator</Text>
      <TextField
        placeholder="Enter weight (kg)"
        keyboardType="numeric"
        onChangeText={text => setWeight(text)}
        value={weight}
      />
      <TextField
        placeholder="Enter height (cm)"
        keyboardType="numeric"
        onChangeText={text => setHeight(text)}
        value={height}
        marginT-10
      />
      <Button
        label="Calculate BMI"
        onPress={calculateBMI}
        marginT-20
        backgroundColor={Colors.blue30}
      />
      {bmiResult !== null && (
        <Text text60 marginT-20>Your BMI is: {bmiResult.toFixed(2)}</Text>
      )}
    </View>
  );
};

export default BMICalculator;
