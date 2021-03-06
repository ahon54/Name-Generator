import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled, { withTheme } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Button = styled.Button`
//   background-color: #5BCFFB;
//   color: black;
//   font-size: 20px;
//   padding: 10px 60px;
//   margin: 10px 0px;
// `

const Home = ({ navigation }) => {
  const handleMtoF = () => {
    navigation.navigate('Middle')
  };

  const handleFtoM = () => {
    navigation.navigate('Middle')
  };

  const handleNeutral = () => {
    navigation.navigate('Middle')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Name Selector</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={handleMtoF}>
        <Text style={styles.title}>Male To Female Names </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}
      onPress={handleFtoM}>
        <Text style={styles.title}>Female To Male Names </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button}
      onPress={handleNeutral}>
        <Text style={styles.title}>Gender Neutral Names </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
    welcome: {
      fontSize: 30,
      fontWeight: 'bold',
      padding: 20,
    },
  });

export default Home;