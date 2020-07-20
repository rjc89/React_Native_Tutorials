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
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
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
});

