import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//link: https://reactnative.dev/docs/navigation
//npm i @react-navigation/native @react-navigation/native-stack
//expo i react-native-screens react-native-safe-area-context
////npm i @react-navigation/native @react-navigation/drawer
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//// import { createDrawerNavigator } from '@react-navigation/drawer';

// import ChooseColorVsmart from './src/components/ChooseColorVsmart';
// import SilverVsmart from './src/components/SilverVsmart';
// import RedVsmart from './src/components/RedVsmart';
// import BlackVsmart from './src/components/BlackVsmart';
// import BlueVsmart from './src/components/BlueVsmart';
import ChooseColorVsmart_PassingParams from './src/components/ChooseColorVsmart_PassingParams';
import DetailColorVsmart from './src/components/DetailColorVsmart';

const Stack = createNativeStackNavigator();
//// const Drawer = createDrawerNavigator();

export default function App() {
  //// function Root() {
  ////   return (
  ////     <Drawer.Navigator>
  ////       <Drawer.Screen name="Home - Choose Color Vsmart" component={ChooseColorVsmart} />
  ////       <Drawer.Screen name="Blue Vsmart" component={BlueVsmart} />
  ////       {/* <Stack.Screen name="Settings" component={Settings} /> //Stack đè lên Drawer */}
  ////    </Drawer.Navigator>
  ////   );
  //// }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='ChooseColorVsmart'> */}
      <Stack.Navigator initialRouteName="ChooseColorVsmart_PassingParams">
        <Stack.Screen
          name="ChooseColorVsmart_PassingParams"
          component={ChooseColorVsmart_PassingParams}
          options={{ title: "Home - Choose Color Vsmart passing-params" }}
          // options={{ headerShown: false }} //ko show thanh header tên của từng screen
        />
        <Stack.Screen 
          name='DetailColorVsmart' 
          component={DetailColorVsmart} 
          options={{title: 'Detail Vsmart'}}
        />
        {/* <Stack.Screen
          name="ChooseColorVsmart"
          component={ChooseColorVsmart}
          options={{ title: "Home - Choose Color Vsmart" }}
          // options={{ headerShown: false }} //ko show thanh header tên của từng screen
        />
        <Stack.Screen
          name="SilverVsmart"
          component={SilverVsmart}
          options={{ title: "Silver Vsmart" }}
        />
        <Stack.Screen
          name="RedVsmart"
          component={RedVsmart}
          options={{ title: "Red Vsmart" }}
        />
        <Stack.Screen
          name="BlackVsmart"
          component={BlackVsmart}
          options={{ title: "Black Vsmart" }}
        />
        <Stack.Screen
          name="BlueVsmart"
          component={BlueVsmart}
          options={{ title: "Blue Vsmart" }}
        /> */}

        {/* <Stack.Screen ////
          name="Root- All Screens"
          component={Root}
          options={{ headerShown: false }}
        /> */}
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
