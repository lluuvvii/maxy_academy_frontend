import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ServiceCard({ icon, title, onPress }: any) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <AntDesign name={icon} size={40} color="#4c669f" />
      <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '45%',
    alignItems: 'center',
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
