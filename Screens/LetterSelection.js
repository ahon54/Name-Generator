import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, SafeAreaView, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const LetterSelection = ({ navigation, route }) => {
  const [text, onChangeText] = React.useState("");
  const mode = route.params["mode"];
  const props = {navigation, mode}
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeLetterWrapper}
    >
      <StatusBar style="auto" />  
      <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.scrollView}>  
      <View style={styles.innerContainer}>
        <LetterList {... props}/>
      </View>
      </ScrollView>
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search Here"
      /> */}
      </SafeAreaView>
    </KeyboardAvoidingView>
    
  );
}

function LetterList(props) {
  const mode = props.mode;
  const navigation = props.navigation;
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const listItems = letters.map((letter) =>
    <TouchableOpacity key={letter}
      style={styles.button}
      onPress={() => navigation.navigate('Names', {similar: false, letter: letter, mode})}>
        <Text style={styles.title}> {letter} </Text>
    </TouchableOpacity>
  );

  return (listItems);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    innerContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 20,
        marginTop: 0,
        flex: 1,
    },
    button: {
      backgroundColor: '#C4C4C4',
      flexDirection: 'row',
      borderRadius: 15,
      justifyContent: 'center',
      width: '25%',
      height: '25%',
      color: 'black',
      alignItems: 'center',
      margin: 10
      
    },
    title : {
        fontSize: 20,
        fontWeight: 'bold',
    },
    ScrollView: {
        marginHorizontal: 20,
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#C4C4C4',
        borderRadius: 15,
      },
    safeAreaContainer: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    writeLetterWrapper: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
  });
export default LetterSelection;