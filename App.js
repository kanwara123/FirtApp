import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textredbold}>Miss Kanwara Jankhoen</Text>
      <Text>Miss Kanwara Jankhoen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbold: {
    fontSize: 20,
    fontWidth: 'bold',
    color: 'red',
  },
});
