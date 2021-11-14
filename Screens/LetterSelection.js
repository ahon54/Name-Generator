import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LetterButton from '../components/LetterButton';

const LetterSelection = ({ navigation }) => {
  return (
    <View>
      <Text>LetterSelection</Text>
      <StatusBar style="auto" />

      <Button 
        title= "Next Page"
        onPress={() => navigation.navigate('Names')}>
      </Button>
    </View>
  );
}

export default LetterSelection;