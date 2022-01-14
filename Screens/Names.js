import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { TextInput, SectionList, StyleSheet, Text, View } from 'react-native';
// const names = ["Liam", "Noah", "William", "James", "Oliver", "Benjamin", "Elijah", "Lucas", "Mason", "Logan", "Alexander", "Ethan", "Jacob", "Michael", "Daniel", "Henry", "Jackson", "Sebastian", "Aiden", "Matthew", "Samuel", "David", "Joseph", "Carter", "Owen", "Wyatt", "John", "Jack", "Luke", "Jayden", "Dylan", "Grayson", "Levi"]
import  Sorting  from '../functions/sorting';
import female_names from '../data/girl_names_2018.json';


const Names = ({ navigation, route }) => {
  const params = route.params
  const [text, setText] = useState('');
  // const [name] = useState("David");
  // const [mode] = useState("MtF");
  // const name = params["name"]
  // const mode = params["mode"]
  const names_stringify = female_names['names'];
  let title = "";
  let names = [];
  if (params["similar"]) {
    console.log(params);
    names = Sorting(params);
    title = "All";
  } else {
    title = params["letter"];
    names = names_stringify.filter((name) => name.startsWith(title)).sort();
  }
  return (
    <View style={styles.container}>
      <SectionList 
        sections={[
          {title: title, data: names},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
      {/* <TextInput
        style={styles.search}
        placeholder="Search Here"
        onChangeText={text => setText(text)}
      /> */}
      <StatusBar style="auto"/>
      {/* <Sorting name={name} mode={mode}/> */}

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
  search: {
    height: 50,
  },
  header:{
    flex: 1,
    backgroundColor: '#F5ABB9',
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
  item: {
    paddingLeft: 20,
    padding: 10,
    fontSize: 20,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 350,
    paddingBottom: 2,
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});

export default Names;