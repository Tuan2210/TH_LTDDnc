import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

//link: https://reactnative.dev/docs/navigation
//npm i @react-navigation/native @react-navigation/native-stack
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Home from './src/components/Home';
import BT1 from './src/components/BT1';
import BT2 from './src/components/BT2';
import BT3 from './src/components/BT3';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "3 bài tập" }}
        />
        <Stack.Screen
          name="BT1"
          component={BT1}
          options={{ title: "Bài tập 1" }}
        />
        <Stack.Screen
          name="BT2"
          component={BT2}
          options={{ title: "Bài tập 2" }}
        />
        <Stack.Screen
          name="BT3"
          component={BT3}
          options={{ title: "Bài tập 3" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
