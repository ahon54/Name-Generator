import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, SafeAreaView, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const LetterSelection = ({ navigation }) => {

    const [text, onChangeText] = React.useState("");

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeLetterWrapper}
    >
    <Button 
      title= "Next Page"
      onPress={() => navigation.navigate('Names')}>
    </Button>
      <StatusBar style="auto" />  
      <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.scrollView}>  
      <View style={styles.innerContainer}>
      
      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> A </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> B </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> C </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> D </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> E </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> F </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> G </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> H </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> I </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> J </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> K </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> L </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> M </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> N </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> O </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> P </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> Q </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> R </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> S </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> T </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> U </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> V </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> W </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> X </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> Y </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
       <Text style={styles.title}> Z </Text>
      </TouchableOpacity>

      </View>
      </ScrollView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search Here"
      />
      </SafeAreaView>
    </KeyboardAvoidingView>
    
  );
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