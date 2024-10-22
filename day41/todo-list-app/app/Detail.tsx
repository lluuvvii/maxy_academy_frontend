import { View, Text, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { firebase } from '../config';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const priorityColors: any = {
  high: '#28B463',
  medium: '#FFC300',
  low: '#FF5733',
};

const Detail = ({ route }: any) => {
  const todoRef = firebase.firestore().collection('todos');
  const { item } = route.params;

  // State for todo fields
  const [textHeading, onChangeHeadingText] = useState(item.heading);
  const [textDetails, onChangeDetailsText] = useState(item.details);
  const [dueDate, onChangeDueDate] = useState(item.dueDate);
  const [priority, setPriority] = useState(item.priority);

  const navigation: any = useNavigation();

  const updateTodo = () => {
    if (!textHeading || textHeading.trim().length === 0 || !textDetails || !dueDate) {
      Alert.alert("Validation Error", "Please fill in all fields.");
      return;
    }

    todoRef
      .doc(item.id)
      .update({
        heading: textHeading,
        details: textDetails,
        dueDate: dueDate,
        priority: priority,
      })
      .then(() => {
        Alert.alert("Success", "Todo updated successfully.");
        navigation.navigate('Home');
      })
      .catch((error) => {
        Alert.alert("Update Failed", error.message);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Update Luvi tasks</Text>

      <TextInput
        style={styles.textField}
        onChangeText={onChangeHeadingText}
        value={textHeading}
        placeholder="Update Todo Title"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.textField}
        onChangeText={onChangeDetailsText}
        value={textDetails}
        placeholder="Update Details"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.textField}
        onChangeText={onChangeDueDate}
        value={dueDate}
        placeholder="Update Due Date (YYYY-MM-DD)"
        placeholderTextColor="#888"
      />

      <View style={styles.priorityContainer}>
        <Text style={styles.priorityLabel}>Select Priority:</Text>
        <TouchableOpacity style={styles.priorityButton} onPress={() => setPriority('low')}>
          <Text style={[styles.priorityText, { backgroundColor: priorityColors.low }]}>Low</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.priorityButton} onPress={() => setPriority('medium')}>
          <Text style={[styles.priorityText, { backgroundColor: priorityColors.medium }]}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.priorityButton} onPress={() => setPriority('high')}>
          <Text style={[styles.priorityText, { backgroundColor: priorityColors.high }]}>High</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonUpdate} onPress={updateTodo}>
        <Text style={styles.buttonText}>UPDATE TODO</Text>
        <FontAwesome name="check" size={20} color="white" style={styles.checkIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f7', // Background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  textField: {
    height: 48,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    paddingLeft: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  buttonUpdate: {
    height: 48,
    borderRadius: 10,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  priorityContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 5,
  },
  priorityLabel: {
    fontWeight: 'bold',
  },
  priorityButton: {
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 1,
  },
  priorityText: {
    color: '#ffffff',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
  },
  checkIcon: {
    marginLeft: 10,
  },
});
