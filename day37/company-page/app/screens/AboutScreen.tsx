import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.content}>
        We are a company committed to delivering innovative digital solutions. Our mission is to empower businesses through technology.
      </Text>
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
  content: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});

export default About;
