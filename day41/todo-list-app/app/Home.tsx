import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../config'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  // const [todos, setTodos] = useState([])
  // const todoRef = firebase.firestore().collection('todos')
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home