import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//link: https://reactnative.dev/docs/navigation
//npm i @react-navigation/native @react-navigation/native-stack
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './src/components/Home';
import BT1 from './src/components/BT1';
import BT2 from "./src/components/BT2";
import BT3 from './src/components/BT3';
import BT4 from './src/components/BT4';
import BT5 from './src/components/BT5';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "5 bài tập" }}
        ></Stack.Screen>
        <Stack.Screen
          name="BT1"
          component={BT1}
          options={{ title: "Bài tập 1" }}
        ></Stack.Screen>
        <Stack.Screen
          name="BT2"
          component={BT2}
          options={{ title: "Bài tập 2" }}
        ></Stack.Screen>
        <Stack.Screen
          name="BT3"
          component={BT3}
          options={{ title: "Bài tập 3" }}
        ></Stack.Screen>
        <Stack.Screen
          name="BT4"
          component={BT4}
          options={{ title: "Bài tập 4" }}
        ></Stack.Screen>
        <Stack.Screen
          name="BT5"
          component={BT5}
          options={{ title: "Bài tập 5" }}
        ></Stack.Screen>
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
