import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Keyboard, Pressable, ScrollView, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { firebase } from '../config';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface Todo {
  id: string;
  heading: string;
  details: string;
  dueDate: string;
  priority: string; // New property for priority
}

const priorityColors: any = {
  high: '#28B463',
  medium: '#FFC300',
  low: '#FF5733',
};

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoRef = firebase.firestore().collection('todos');
  const [addData, setAddData] = useState('');
  const [addDetails, setAddDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low'); // Default priority

  const navigation: any = useNavigation();
  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    todoRef
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const todos: any = [];
        querySnapshot.forEach((doc) => {
          const { heading, details, dueDate, priority } = doc.data();
          todos.push({
            id: doc.id,
            heading,
            details,
            dueDate,
            priority,
          });
        });
        setTodos(todos);
      });
  }, []);

  // Delete a todo from firebase db
  const deleteTodo = (todos: any) => {
    todoRef
      .doc(todos.id)
      .delete()
      .then(() => {
        alert('Deleted successfully');
      })
      .catch(error => {
        alert(error);
      });
  };

  // Add a todo
  const addTodo = () => {
    if (addData && addData.length > 0 && addDetails && dueDate) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        heading: addData,
        details: addDetails,
        dueDate: dueDate,
        priority: priority,
        createdAt: timestamp,
      };

      todoRef
        .add(data)
        .then(() => {
          setAddData('');
          setAddDetails('');
          setDueDate('');
          setPriority('low'); // Reset to default priority
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <View style={{ backgroundColor: '#f0f4f7', height: screenHeight }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Luvi Tasks</Text>
      </View>

      <ScrollView>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder='Add a new Todo'
            placeholderTextColor='#aaaaaa'
            onChangeText={(heading) => setAddData(heading)}
            value={addData}
            underlineColorAndroid='transparent'
            autoCapitalize='none'
          />
          <TextInput
            style={styles.input}
            placeholder='Add details'
            placeholderTextColor='#aaaaaa'
            onChangeText={(details) => setAddDetails(details)}
            value={addDetails}
            underlineColorAndroid='transparent'
            autoCapitalize='none'
          />
          <TextInput
            style={styles.input}
            placeholder='Due Date (YYYY-MM-DD)'
            placeholderTextColor='#aaaaaa'
            onChangeText={(date) => setDueDate(date)}
            value={dueDate}
            underlineColorAndroid='transparent'
            autoCapitalize='none'
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
          <TouchableOpacity style={styles.button} onPress={addTodo}>
            <FontAwesome name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <FlatList
            data={todos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                style={styles.container}
                onPress={() => navigation.navigate('Detail', { item })}>
                <FontAwesome
                  name='trash-o'
                  color='red'
                  onPress={() => deleteTodo(item)}
                  style={styles.todoIcon}
                />
                <View style={styles.innerContainer}>
                  <Text style={styles.itemHeading}>
                    {item.heading[0].toUpperCase() + item.heading.slice(1)}
                  </Text>
                  <Text style={styles.itemDetails}>
                    {item.details}
                  </Text>
                  <Text style={styles.itemDueDate}>
                    Due: {item.dueDate}
                  </Text>
                  <View style={[styles.priorityIndicator, { backgroundColor: priorityColors[item.priority] }]}>
                    <Text style={styles.priorityTextIndicator}>{item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}</Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
      </ScrollView>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    backgroundColor: '#ffffff',
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  innerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  itemHeading: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333333',
  },
  itemDetails: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  itemDueDate: {
    fontSize: 15,
    color: '#999999',
    textAlignVertical: 'center',
    marginTop: 2,
  },
  priorityIndicator: {
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  priorityTextIndicator: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  formContainer: {
    flexDirection: 'column',
    margin: 20,
  },
  input: {
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
  button: {
    height: 48,
    borderRadius: 10,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  todoIcon: {
    fontSize: 24,
    marginLeft: 14,
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
});
