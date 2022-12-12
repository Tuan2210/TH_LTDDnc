import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from "react";

//npm i react-native-animatable
//npm i axios firebase react-native-safe-area-context
//npm i @react-navigation/native @react-navigation/native-stack 
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import GetStarted from './components/GetStarted';
import Home from './components/Home';

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
          component={Home}
          options={{ title: "Screen2 | Home" }}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
