import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

//npm i @react-navigation/native @react-navigation/native-stack
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";

export default function GetStarted({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnGetStarted} onPress={() => navigation.navigate('Home')}>
        <Text style={{fontSize: 20}}>Get Started</Text>
      </TouchableOpacity>
    </View>
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
