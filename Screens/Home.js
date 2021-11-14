import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #5BCFFB;
  color: white;
  font-size: 20px;
  padding: 40px 60px;
  border-radius: 15px;
  margin: 40px 0px;
  border: none;
  font-weight: bold;
`
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
      <Button onClick={() => handleMtoF()}>
        Male to Female Names
      </Button>
      <Button onClick={() => handleFtoM()}>
        Female to Male Names
      </Button>
      <Button onClick={() => handleNeutral()}>
        Gender Neutral Names
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
  });

export default Home;