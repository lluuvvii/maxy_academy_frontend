import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header */}
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.header}>
        <View style={styles.logoContainer}>
          {/* <Image source={require('./assets/logo.png')} style={styles.logo} /> */}
          <Text style={styles.title}>Welcome to Our Company</Text>
        </View>
      </LinearGradient>

      {/* Body */}
      <ScrollView style={styles.body}>
        <Text style={styles.subtitle}>What We Do</Text>
        <Text style={styles.description}>
          Our company specializes in providing innovative solutions for digital transformation. We focus on building high-quality software and creating unique user experiences.
        </Text>

        <Text style={styles.subtitle}>Our Services</Text>
        <View style={styles.serviceContainer}>
          <ServiceCard
            icon="code"
            title="Software Development"
            description="Building custom software solutions for businesses."
          />
          <ServiceCard
            icon="mobile1"
            title="Mobile App Development"
            description="Creating responsive and intuitive mobile applications."
          />
          <ServiceCard
            icon="cloud"
            title="Cloud Solutions"
            description="Delivering scalable and secure cloud services."
          />
        </View>
      </ScrollView>

      {/* Footer */}
      <LinearGradient colors={['#192f6a', '#3b5998', '#4c669f']} style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Our Company - All Rights Reserved</Text>
      </LinearGradient>
    </View>
  );
}

const ServiceCard = ({ icon, title, description }: any) => {
  return (
    <TouchableOpacity style={styles.card}>
      <AntDesign name={icon} size={40} color="#4c669f" />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3b5998',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '30%',
    alignItems: 'center',
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cardDescription: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  footer: {
    padding: 15,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
  },
});
