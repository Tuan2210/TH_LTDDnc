import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState, useRef } from "react";

//link doc: https://docs.expo.dev/guides/splash-screens/
//npm i expo-splash-screen
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); //splash screen khi khởi động toàn bộ app
setTimeout(SplashScreen.hideAsync, 2000); //để ngoài export default function time khởi động lâu hơn 1s để trong

export default function BT4() {
    const splashscreen = useRef(new Animated.Value(0)).current; //splash screen khi khởi động screen BT4.js
    const [isVisible, setisVisible] = useState(true);

    useEffect(() => {
      Animated.sequence([
        Animated.timing(splashscreen, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(splashscreen, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }, []);

    useEffect(() => {
      let myTimeout = setTimeout(() => {
        setisVisible(false);
      }, 3000);
      return () => clearTimeout(myTimeout);
    }, []);

    function flashScreen() {
      return (
        <Animated.View
          style={[
            { flex: 1 },
            {
              opacity: splashscreen,
            },
          ]}
        >
          <View style={{ flex: 0.3 }}></View>
          <Animated.Image
            style={[{ flex: 1 }]}
            source={require("../../assets/React-icon.svg.png")}
          ></Animated.Image>
          <Animated.View
            style={[
              { flex: 1, justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Text style={styles.welcome}>
              WELCOME !!
            </Text>
          </Animated.View>
        </Animated.View>
      );
    }

    return (
      <View style={styles.container}>
        <>
          {isVisible == true ? (
            flashScreen()
          ) : (
            <View style={styles.container2}>
              <Text style={{ fontSize: 30 }}>BT4 splash screen</Text>
            </View>
          )}
        </>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 23,
  },
});