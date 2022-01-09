import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Middle = ({navigation, route}) => {
  const params = route.params;
  const handleAll = () => {
    navigation.navigate('LetterSelection', params)
  };

  const handleSimilar = () => {
    navigation.navigate('Names', {similar: true, params})
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={styles.button}
      onPress={() => handleAll()}>
        <Text style={styles.title}>List of All Names </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}
      onPress={() => handleSimilar()}>
        <Text style={styles.title}>Search by Name Similarity </Text>
      </TouchableOpacity>
      <StatusBar style="auto"/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    height: 50,
  },
  header:{
    flex: 1,
    backgroundColor: '#F5ABB9',
  },
  button: {
    backgroundColor: '#5BCFFB',
    padding: 20,
    margin: 10,
    borderRadius: 15,
  },
  title: {
    color: 'white',
    fontSize: 20,
  }
});

export default Middle;