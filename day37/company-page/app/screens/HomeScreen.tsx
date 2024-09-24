import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<any, 'Services'>;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleNavigate = () => {
    navigation.navigate('Services');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our Company</Text>
      <Text style={styles.subtitle}>Click below to explore our services</Text>
      <TouchableOpacity style={styles.card} onPress={handleNavigate}>
        <Text style={styles.cardTitle}>Go to Services</Text>
      </TouchableOpacity>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#4c669f',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
