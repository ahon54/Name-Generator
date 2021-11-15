import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled, { withTheme } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Home = ({ navigation }) => {

  const [mode, setMode] = useState('');

  function handleMtoF() {
    console.log("Male to Female");
    mode = 'MtF';
    setMode('MtF');
  }
  const handleFtoM = () => {
    console.log("Female to Male");
    setMode = 'FtM';
  }
  const handleNeutral = () => {
    console.log("Gender Neutral");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Name Selector</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={() => {e => handleMtoF(e); navigation.navigate('LetterList')}}>
        <Text style={styles.title}>Male To Female Names </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}
      onPress={() => {handleFtoM(); navigation.navigate('LetterList')}}>
        <Text style={styles.title}>Female To Male Names </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button}
      onPress={() => {handleNeutral(); navigation.navigate('LetterList')}}>
        <Text style={styles.title}>Gender Neutral Names </Text>
      </TouchableOpacity>

      <Button 
      title= "Next Page"
      color="#5BCFFB"
      onPress={() => {navigation.navigate('LetterList'); }}>
      </Button>
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