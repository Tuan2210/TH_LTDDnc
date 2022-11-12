import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import FoundationIcon from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";

//link doc top tabs: https://reactnavigation.org/docs/material-top-tab-navigator/
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from "@react-navigation/native";

import Products from "./tabs/Products";
import LoveProducts from "./tabs/LoveProducts";
import Order from "./tabs/Order";

const Tab = createMaterialTopTabNavigator();

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

export default function Home({ navigation }) {
  return (
    <>
      {/* Vì App.js đã có NavigationContainer */}
      {/* <NavigationContainer> */}
      <Tab.Navigator
        initialRouteName="products"
        tabBarPosition="bottom"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconNameFoundation, iconNameIcon, iconNameFeather;
            if (route.name === "products") {
              iconNameFoundation = "home";
              size = focused ? 30 : 25;
              color = focused ? "#D4A055" : "#fff";
            } else if (route.name === "love_products") {
              iconNameIcon = "heart-half";
              size = focused ? 30 : 25;
              color = focused ? "#D4A055" : "#fff";
            } else if (route.name === "order") {
              iconNameFeather = "shopping-bag";
              size = focused ? 30 : 25;
              color = focused ? "#D4A055" : "#fff";
            }
            return (
              <View
                style={{
                  flexDirection: "row",
                  // height: "100%",
                  // width: "130%",
                  justifyContent: "center",
                  marginLeft: "-12%",
                  marginTop:'-20%'
                }}
              >
                <FoundationIcon
                  name={iconNameFoundation}
                  size={size}
                  color={color}
                />
                <Ionicons name={iconNameIcon} size={size} color={color} />
                <FeatherIcon
                  name={iconNameFeather}
                  size={size}
                  color={color}
                />
              </View>
            );
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            width: widthScreen,
            // height: "8%",
            backgroundColor: "black",
          },
          // tabBarItemStyle: {
          //   padding: "3%",
          // },
          tabBarActiveTintColor: "#D4A055",
          // tabBarActiveBackgroundColor: '#D4A055',
          tabBarInactiveTintColor: "#fff",
          // tabBarInactiveBackgroundColor: '#fff',
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
          // headerShown: false,
          // tabBarVisibilityAnimationConfig
        })}
      >
        <Tab.Screen name="products" component={Products} />
        <Tab.Screen name="love_products" component={LoveProducts} />
        <Tab.Screen name="order" component={Order} />
      </Tab.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
