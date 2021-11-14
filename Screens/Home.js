import React from "react";
import { StyleSheet, Text, View, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const btton = styled.Button`
//   background-color: #5BCFFB;
//   color: white;
//   font-size: 20px;
//   padding: 40px 60px;
//   border-radius: 15px;
//   margin: 50px 0px;
//   border: none;
//   font-weight: bold;
//   width: 100px;
// `

const Home = () => {
  const handleMtoF = () => {
    console.log("Male to Female");
  }
  const handleFtoM = () => {
    console.log("Female to Male");
  }
  const handleNeutral = () => {
    console.log("Gender Neutral");
  }
  return (
    <View style={styles.container}>
      <Button style={styles.button} 
      title="Male to Female Names" 
      onClick={() => handleMtoF()}>
      </Button>
      <Button 
      style={styles.button}
      title= "Female to Male Names"
      onClick={() => handleFtoM()}>
      </Button>
      <Button 
      style={styles.button}
      title= "Gender Neutral Names"
      onClick={() => handleNeutral()}>
      </Button>
      <Button 
      style={styles.button}
      title= "Next Page"
      onPress={() => navigation.navigate('LetterSelection')}>
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
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
    },
  });

export default Home;