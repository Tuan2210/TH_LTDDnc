import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function BT3() {
    const startValue = new Animated.Value(-100);
    const endValue = 150;
    const duration = 5000;

    const movingObject = () => {
      Animated.timing(startValue, {
        toValue: endValue,
        duration: duration,
        useNativeDriver: true,
      }).start();
    };

    const stopAnimation = () => {
      Animated.timing(startValue, {
        toValue: endValue,
        duration: duration,
        useNativeDriver: true,
      }).stop();
    };

    const resetObject = () => {
      Animated.timing(startValue, {
        toValue: startValue,
        duration: 0,
        useNativeDriver: true,
      }).start();
    };

    const animStyle = {
      transform: [
        {
          translateX: startValue,
        },
      ],
    };

    return (
      <View style={styles.container}>
        {/* <Animated.View style={[styles.circle, animStyle]} />
        <TouchableOpacity style={styles.btnOptions} onPress={movingObject}>
          <Text style={{ marginTop: "auto", marginBottom: "auto" }}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOptions} onPress={stopAnimation}>
          <Text style={{ marginTop: "auto", marginBottom: "auto" }}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOptions} onPress={resetObject}>
          <Text style={{ marginTop: "auto", marginBottom: "auto" }}>Reset</Text>
        </TouchableOpacity> */}
        <Text>bt3</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    height: 50,
    width: 50,
    backgroundColor: "blue",
    borderRadius: 50
  },
  btnOptions: {
    width: 100,
    height: 30,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "orange",
  },
});