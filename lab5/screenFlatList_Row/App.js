import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from "react";

//link: https://reactnative.dev/docs/navigation
//npm i @react-navigation/native @react-navigation/native-stack
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RowFlatList from "./component/RowFlatList";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RowFlatList">
        <Stack.Screen
          name="RowFlatList"
          component={RowFlatList}
          options={{ title: "Row_FlatList" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
