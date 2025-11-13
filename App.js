// +++ Part 2 - Import Hooks and Components.
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  
  // +++ Part 2 - Initialize State
  // State for the text input
  const [enteredTaskText, setEnteredTaskText] = useState('');
  // State for the list of tasks
  const [tasks, setTasks] = useState([]);
  
  
  // +++ Part 2 - Handler functions for Input and Adding Tasks
  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
}

function addTaskHandler() {
  // Basic validation
  if (enteredTaskText.trim().length === 0) {
    return;
  }
  
  // Add new task to the tasks array
  setTasks((currentTasks) => [
    ...currentTasks,
    { id: Math.random().toString(), text: enteredTaskText },
  ]);

  // Clear the input field
  setEnteredTaskText('');
}

  return (
  <SafeAreaView style={styles.appContainer}>
    <View style={styles.contentContainer}>
      <Text style={styles.title}>My Todo List</Text>
      {/* +++ Part 2 - Adding input JSX */ }
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.textInput}
        placeholder="Add a new task..."
        onChangeText={taskInputHandler}
        value={enteredTaskText}
      />
      <Button title="Add" onPress={addTaskHandler} />
    </View>
      
      {/* List area will go here */ }

      </View>
      </SafeAreaView>
      );
    }

    const styles= StyleSheet.create({
      appContainer: {
        flex: 1,
        backgroundColor: '#f0f0f0', // Light gray background
        },
      contentContainer: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold'
          ,
          marginBottom: 20,
          textAlign: 'center',
        },
        inputContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
          borderBottomWidth: 1,
          borderColor: '#ccc',
          paddingBottom: 10,
        },
        textInput: {
          flex: 1,
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          borderRadius: 6,
          marginRight: 10,
          fontSize: 16,
        },
      });