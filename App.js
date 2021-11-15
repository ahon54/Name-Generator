import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import Home from './Screens/Home';
import LetterList from './Screens/LetterList';
import LetterSelection from './Screens/LetterSelection';
import Names from './Screens/Names';
import Middle from './Screens/Middle';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#F5ABB9',
          },
          headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
          },
      }}  />
      <Stack.Screen 
        name="Middle" 
        component={Middle}
        options={{
          headerStyle: {
            backgroundColor: '#F5ABB9',
          },
          headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
          },
      }} />
      <Stack.Screen 
        name="LetterSelection" 
        component={LetterSelection}
        options={{
          headerStyle: {
            backgroundColor: '#F5ABB9',
          },
          headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
          },
        }} />
      <Stack.Screen 
      name="Names" 
      component={Names} 
      options={{
        headerStyle: {
          backgroundColor: '#F5ABB9',
        },
        headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
        },
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
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