import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Names = () => {
  return (
    <View style={styles.container}>
      <Text>Names</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Names;