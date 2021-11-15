import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';

const LetterList = ({ navigation, mode: parentMode = 'FtM'}) => {

const [mode, setMode] = useState(parentMode);
const [text, setText] = useState('');
console.log(mode);

return (
    <View style={styles.container}>
      <Button 
      title= "Next Page"
      onPress={() => navigation.navigate('LetterSelection')}>
      </Button>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeLetterWrapper}
      >
      <TextInput
        style={styles.search}
        placeholder="Search Here"
        onChangeText={text => setText(text)}
      />
      </KeyboardAvoidingView>
    </View> 
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default LetterList;