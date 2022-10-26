import { StyleSheet, Text, View, Animated, Image, TouchableOpacity } from "react-native";
import React, { useRef } from "react";

export default function BT1({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onLayout={fadeIn}
      >
        <Text style={styles.txtWelcome}>Welcome to Animation React Native</Text>
        <Image
          source={require("../../assets/react-img.gif")}
          style={{ height: 100, width: 100 }}
        />
      </Animated.View>
      <TouchableOpacity style={styles.btnHome}>
        <Text
          style={{ fontSize: 20 }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          Trở về màn hình chính
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#212121",
  },
  txtWelcome: {
    color: "#00D7FF",
    fontSize: 30,
    fontWeight: "bold",
  },
  btnHome: {
    backgroundColor: "#00D7FF",
    height: 60,
    justifyContent: "center",
    padding: 10,
    borderRadius: 15
  },
});