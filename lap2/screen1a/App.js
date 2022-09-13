import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, Button } from 'react-native';
// import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
      <View style={styles.container}>
        <ImageBackground source={bg1a} resizeMode="cover" style={styles.bg1a}>
          <Image source={{ uri: "https://raw.githubusercontent.com/Tuan2210/TH_LTDDnc/master/lap2/images/circle.png" }} style={styles.circle} />
          <Text style={styles.title}>GROW {'\n'} YOUR BUSINESS</Text>
          <Text style={styles.line1}>We will help you to grow your business using online server</Text>
          {/* <View style={{ flexDirection: 'row', marginTop: '50' }}> */}
            {/* <View style={{ marginHorizontal: 25 }}> */}
              <Button style={styles.btnLogin} title='LOGIN' color={'#E3C000'} />
            {/* </View> */}
            {/* <View style={{ marginHorizontal: 25 }}> */}
              <Button style={styles.btnSignUp} title='SIGN UP' color={'#E3C000'} />
            {/* </View> */}
          {/* </View> */}
          <Text style={styles.line2}>HOW WE WORK</Text>
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
  // btnLogin: {
  //   marginTop: '50%'
  // },
  line2:{
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '-50%'
  }
});

