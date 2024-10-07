import React, { useState } from 'react';
import { View, Text, Button } from 'react-native-ui-lib';
import { ScrollView, StyleSheet } from 'react-native';

const DigitalCalculator = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handlePress = (value: string) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString()); // Menggunakan eval() untuk evaluasi ekspresi (perhatikan ini hanya untuk demo)
      } catch (e) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.display}>{input || '0'}</Text>
      <Text style={styles.result}>Result: {result}</Text>
      <View style={styles.buttonGrid}>
        {/* Row 1 */}
        <Button label="C" onPress={() => handlePress('C')} style={styles.button} />
        <Button label="DEL" onPress={() => handlePress('DEL')} style={styles.button} />
        <Button label="%" onPress={() => handlePress('%')} style={styles.button} />
        <Button label="/" onPress={() => handlePress('/')} style={styles.button} />
        {/* Row 2 */}
        <Button label="7" onPress={() => handlePress('7')} style={styles.button} />
        <Button label="8" onPress={() => handlePress('8')} style={styles.button} />
        <Button label="9" onPress={() => handlePress('9')} style={styles.button} />
        <Button label="*" onPress={() => handlePress('*')} style={styles.button} />
        {/* Row 3 */}
        <Button label="4" onPress={() => handlePress('4')} style={styles.button} />
        <Button label="5" onPress={() => handlePress('5')} style={styles.button} />
        <Button label="6" onPress={() => handlePress('6')} style={styles.button} />
        <Button label="-" onPress={() => handlePress('-')} style={styles.button} />
        {/* Row 4 */}
        <Button label="1" onPress={() => handlePress('1')} style={styles.button} />
        <Button label="2" onPress={() => handlePress('2')} style={styles.button} />
        <Button label="3" onPress={() => handlePress('3')} style={styles.button} />
        <Button label="+" onPress={() => handlePress('+')} style={styles.button} />
        {/* Row 5 */}
        <Button label="0" onPress={() => handlePress('0')} style={styles.button} />
        <Button label="." onPress={() => handlePress('.')} style={styles.button} />
        <Button label="=" onPress={() => handlePress('=')} style={styles.buttonEqual} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  display: {
    fontSize: 40,
    textAlign: 'right',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  result: {
    fontSize: 30,
    textAlign: 'right',
    marginBottom: 20,
    paddingRight: 10,
    color: '#888',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: '24%',
    borderRadius: 5,
    margin: 2,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  buttonEqual: {
    width: '48.3%',
    borderRadius: 5,
    margin: 2,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#28a745',
  },
});

export default DigitalCalculator;
