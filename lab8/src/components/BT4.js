import { StyleSheet, Text, View } from "react-native";
// import React, { useCallback, useEffect, useState } from "react";
import React from "react";

//link: https://docs.expo.dev/versions/latest/sdk/splash-screen/ //no use
// npm i @expo/vector-icons expo-font //no use
import Entypo from "@expo/vector-icons/Entypo"; //no use
import * as Font from "expo-font"; //no use

//npm i expo-splash-screen
import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000); //để ngoài export default function time khởi động lâu hơn 1s để trong

export default function BT4() {
    // const [appIsReady, setAppIsReady] = useState(false);

    // useEffect(() => {
    //   async function prepare() {
    //     try {
    //       await Font.loadAsync(Entypo.font);
    //       await new Promise((resolve) => setTimeout(resolve, 2000));
    //     } catch (e) {
    //       console.warn(e);
    //     } finally {
    //       setAppIsReady(true);
    //     }
    //   }

    //   prepare();
    // }, []);

    // const onLayoutRootView = useCallback(async () => {
    //   if (appIsReady) {
    //     await SplashScreen.hideAsync();
    //   }
    // }, [appIsReady]);

    // if (!appIsReady) {
    //   return null;
    // }
    
    

    return (
      <View style={styles.container} 
            // onLayout={onLayoutRootView}
        >
        {/* <Text>SplashScreen Demo! 👋</Text>   */}
        {/* <Entypo name="rocket" size={30} /> */}
        <Text>BT4 - Splash Screen</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})