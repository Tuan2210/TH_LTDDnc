import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, Button } from 'react-native';

//yarn create expo-app screen1a
//yarn add expo
//yarn start

export default function App() {
  return (
      <View style={styles.container}>
        <ImageBackground source={bg1a} resizeMode="cover" style={styles.bg1a}>
          <Image source={{ uri: "https://raw.githubusercontent.com/Tuan2210/TH_LTDDnc/master/lap2/images/circle.png" }} style={styles.circle} />
          <Text style={styles.title}>GROW {'\n'} YOUR BUSINESS</Text>
          <Text style={styles.line1}>We will help you to grow your business using online server</Text>
          <View style={styles.login}>
            <Button title="LOGIN" color="#E3C000"></Button>
          </View>
          <View style={styles.signUp}>
            <Button title="SIGN UP" color="#E3C000"></Button>
          </View>
          <View style={styles.line2}>
            <Text style={{textAlign: "center", fontSize: 18, fontWeight: 'bold'}}>HOW WE WORK</Text>
          </View>
        </ImageBackground>
      </View>
  );
}

const bg1a = { uri: "https://raw.githubusercontent.com/Tuan2210/TH_LTDDnc/master/lap2/images/background.png" };
      // circle = { uri: "https://raw.githubusercontent.com/Tuan2210/TH_LTDDnc/master/lap2/images/circle.png" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg1a: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  circle: {
    marginTop: '-50%',
    width: 142,
    height: 142
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 'bold',
    top: '10%'
  },
  line1: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '30%'
  },
  login: {
    position: "absolute",
    width: 125,
    height: 45,
    left: 100,
    top: 570,
  },
  signUp: {
    position: "absolute",
    width: 125,
    height: 45,
    left: 320,
    top: 570,

  },
  line2:{
    marginTop: 150,
    marginBottom: -120
  }
});

