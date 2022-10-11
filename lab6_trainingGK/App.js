import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from "react";

//link: https://reactnative.dev/docs/navigation
//npm i @react-navigation/native @react-navigation/native-stack
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//npm i expo-screen-orientation
import * as ScreenOrientation from 'expo-screen-orientation';

import AppTrainingGK_showInputFlatlist from "./components/AppTrainingGK_showInputFlatlist";
import PassDataFlatlist_Row from './components/PassDataFlatlist_Row';
import ShoesDetails from './components/ShoesDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  // const [orientationIsLandscape, setOrientation] = useState(false);
  // if (orientationIsLandscape == true) {
  //   ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  // } else if (orientationIsLandscape == false) {
  //   ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  // }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="AppTrainingGK_showInputFlatlist"> */}
      <Stack.Navigator initialRouteName="PassDataFlatlist_Row">
        <Stack.Screen
          name="AppTrainingGK_showInputFlatlist"
          component={AppTrainingGK_showInputFlatlist}
          options={{ title: "App ôn tập GK_19468641_Đinh Quang Tuấn" }}
        ></Stack.Screen>

        <Stack.Screen
          name="PassDataFlatlist_Row"
          component={PassDataFlatlist_Row}
          options={{ title: "App ôn tập GK_19468641_Đinh Quang Tuấn" }}
        ></Stack.Screen>
        <Stack.Screen
          name="ShoesDetails"
          component={ShoesDetails}
          options={{ title: "Shoes Details" }}
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
