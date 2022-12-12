import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from "react";

//npx create-expo-app 'name-prj'
////npm i --save-dev @types/react-native

//link all icons react-native: https://oblador.github.io/react-native-vector-icons
////npm i react-native-vector-icons

// link all name animations: https://github.com/oblador/react-native-animatable
// Link how to code animation: https://blog.bitsrc.io/top-5-animation-libraries-in-react-native-d00ec8ddfc8d
////npm i react-native-animatable

////npm i axios firebase react-native-safe-area-context
////npm i @react-navigation/native @react-navigation/native-stack @react-navigation/material-top-tabs
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import GetStarted from './components/GetStarted';
import TabBarBottom from './components/TabBarBottom';

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ title: "Screen1 | Get Started" }}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={TabBarBottom}
          options={{ title: "Screen2 | Home" }}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
