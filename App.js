import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/favicon.png';
 

export default function App() {
  return (
    
      
    <View style={styles.container}>
      <Image source={logo} style={{ width: 50, height: 50 }} />
      <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.logo}/> 
      <Text style={styles.instructions}> 
      Open up App.js to start working on your app!
      </Text>

      <View style = {styles.header}>
      <Text>MEGADOODOO</Text>
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#561dbf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  header: {
    backgroundColor:'pink',
    padding: 20,
  }, 
});

