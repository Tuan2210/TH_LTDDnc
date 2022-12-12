import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";

//npm i @react-navigation/native @react-navigation/native-stack
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// //link all name animations: https://github.com/oblador/react-native-animatable
// //link how to code animation: https://blog.bitsrc.io/top-5-animation-libraries-in-react-native-d00ec8ddfc8d
import * as Animatable from 'react-native-animatable';

import { SafeAreaView } from "react-native-safe-area-context";

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

export default function GetStarted({navigation}) {
  //splash-screen
  const splashscreen = useRef(new Animated.Value(0)).current;
  const [isVisible, setisVisible] = useState(true);
  useEffect(() => {
    Animated.sequence([
      Animated.timing(splashscreen, {
        toValue: 1,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  useEffect(() => {
    let myTimeout = setTimeout(() => {
      setisVisible(false);
    }, 5000); //5s
    return () => clearTimeout(myTimeout);
  }, []);
  function showSplashScreen() {
    return (
      <Animated.View
        style={[
          {
            // flex: 1,
            width: widthScreen,
            height: heightScreen,
            backgroundColor: "orange",
            alignItems: "center",
            justifyContent: "center",
          },
          { opacity: splashscreen },
        ]}
      >
        <Animated.Image
          source={require("../assets/loading.gif")}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: "5%" }}>
          WELCOME !
        </Text>
      </Animated.View>
    );
  }
  
  return (
    <SafeAreaView style={styles.container}>
      {isVisible ? (
        showSplashScreen()
      ) : (
        <Animatable.View animation='fadeInDownBig'>
          <TouchableOpacity
            style={styles.btnGetStarted}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ fontSize: 20 }}>Get Started</Text>
          </TouchableOpacity>
        </Animatable.View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnGetStarted: {
    backgroundColor: 'orange',
    padding: 20,
    borderRadius: 15
  }
});
