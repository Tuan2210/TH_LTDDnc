import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import * as React from 'react';

//npm i expo-linear-gradient
import { LinearGradient } from "expo-linear-gradient";

//npm i react-native-linear-gradient-degree
import { deg } from "react-native-linear-gradient-degree";

//npm i create-expo-app
//npx create-expo-app screen1c
//expo start

//if screen1c appears error: 
//'However, this package itself specifies a `main` module field that could not be resolved'
// => use this command: npm start --reset-cache
// start again with command: expo start

export default function App() {
  return (
    <LinearGradient
      colors={['#fff','#C7F4F6', '#D1F4F6', '#E5F4F5','#00CCF9']}
      style={styles.container}
      start={{x:0, y:0}}
      end={{x:1, y:1}}
      {...deg(180)}
    >
      <View>
        <Text style={styles.title}>CODE</Text>          
      </View>
      <View>
        <Text style={styles.line1}>VERIFICATION</Text>
      </View>
      <View>
        <Text style={styles.line2}>Enter ontime password sent on {'\n'}++849092605798</Text>
      </View>
      <View style={styles.rowInput}>
        <TextInput style={styles.input} maxLength={1}></TextInput>
        <TextInput style={styles.input} maxLength={1}></TextInput>
        <TextInput style={styles.input} maxLength={1}></TextInput>
        <TextInput style={styles.input} maxLength={1}></TextInput>
        <TextInput style={styles.input} maxLength={1}></TextInput>
        <TextInput style={styles.input} maxLength={1}></TextInput>
      </View>
      <View style={styles.btnVerify}>
        <Button title="VERIFY CODE" color="#E3C000"></Button>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: '20%'
  },
  line1: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '15%'
  },
  line2: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: '15%'
  },
  rowInput: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center'
  },
  input: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '15%',
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    width: 60,
    height: 60
  },
  btnVerify: {
    justifyContent: 'center',
    marginLeft: '22%',
    marginTop: '10%',
    marginBottom: '-50%',
    width: 305,
    height: 50
  }
});
