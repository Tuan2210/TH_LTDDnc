import { StatusBar } from "expo-status-bar";
import { Dimensions, View } from "react-native";
import React from "react";

//link all icons react-native: https://oblador.github.io/react-native-vector-icons/
import FoundationIcon from "react-native-vector-icons/Foundation";
// import Ionicons from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";

//link doc top tabs: https://reactnavigation.org/docs/material-top-tab-navigator/
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Home } from "./tabs/Home";
import Cart from "./tabs/Cart";

const Tab = createMaterialTopTabNavigator();

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

export default function TabBarBottom() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarPosition="bottom"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconNameFoundation, iconNameIcon, iconNameFeather;
          if (route.name === "home") {
            iconNameFoundation = "home";
            size = focused ? 30 : 25;
            color = focused ? "#D4A055" : "#fff";
          }
          // else if (route.name === "love_products") {
          //   iconNameIcon = "heart-half";
          //   size = focused ? 30 : 25;
          //   color = focused ? "#D4A055" : "#fff";
          // }
          else if (route.name === "cart") {
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
                marginTop: "-20%",
              }}
            >
              <FoundationIcon
                name={iconNameFoundation}
                size={size}
                color={color}
              />
              {/* <Ionicons name={iconNameIcon} size={size} color={color} /> */}
              <FeatherIcon name={iconNameFeather} size={size} color={color} />
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
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="cart" component={Cart} />
    </Tab.Navigator>
  );
}
