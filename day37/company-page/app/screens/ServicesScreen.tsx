import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Services: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Services</Text>
      <Text style={styles.serviceItem}>1. Software Development</Text>
      <Text style={styles.serviceItem}>2. Mobile App Development</Text>
      <Text style={styles.serviceItem}>3. Cloud Solutions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  serviceItem: {
    fontSize: 18,
    marginBottom: 10,
    color: '#4c669f',
  },
});

export default Services;
