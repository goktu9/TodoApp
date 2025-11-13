// components/TodoItem.js
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function TodoItem({ text, id, onDelete }) {
  return (
    <Pressable
      onPress={() => onDelete(id)} // Call delete handler with the id
      style={({ pressed }) => [
        styles.taskItem,
        pressed && styles.pressedItem, // Apply pressed style
      ]}
    >
      <Text style={styles.taskText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    marginVertical: 5,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  taskText: {
    fontSize: 16,
  },
  pressedItem: {
    opacity: 0.5, // Fade out when pressed
    backgroundColor: '#dddddd',
  },
});