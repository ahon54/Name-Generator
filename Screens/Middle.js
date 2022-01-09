import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const Middle = ({navigation, route}) => {
  const params = route.params;
  const [value, setState] = useState({});
  const handleAll = () => {
    navigation.navigate('LetterSelection', params)
  };

  const handleSimilar = () => {
    navigation.navigate('Names', {similar: true, ... params, name: value.input})
  };

  return (
    <View style={styles.container}>
      <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Enter Name"
        placeholderTextColor = "#5BCFFB"
        autoCapitalize = "none"
        onChangeText={input=> setState({input})}/>

      <TouchableOpacity
      style={styles.button}
      onPress={() => handleSimilar()}>
        <Text style={styles.title}>Search By Name Similarity </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button}
      onPress={() => handleAll()}>
        <Text style={styles.title}>List of All Names </Text>
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
  },
  input: {
    width: 275,
    height: 50,
    borderColor: '#5BCFFB',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 15,
  }
});

export default Middle;