import React, { useRef } from "react";
import { Animated, Button, StyleSheet, View } from "react-native";

export default function BT5() {
  const sq1 = useRef(new Animated.Value(0)).current;
  const sq2 = useRef(new Animated.Value(1)).current;
  const sq3 = useRef(new Animated.Value(2)).current;

  function moveRL() {
    Animated.sequence([
      Animated.timing(sq1, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(sq2, {
        toValue: 2,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(sq3, {
        toValue: 3,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }
  function stopMove() {
    Animated.timing(sq1, {
        toValue: 0,
        useNativeDriver: false
    }).stop();

    Animated.timing(sq2, {
        toValue: 0,
        useNativeDriver: false
    }).stop();
  }

  function reset() {
    Animated.timing(sq1, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
    Animated.timing(sq2, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start();
    Animated.timing(sq3, {
      toValue: 2,
      duration: 0,
      useNativeDriver: true,
    }).start();
  }
  const square1 = sq1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 75],
  });
  const square2 = sq2.interpolate({
    inputRange: [1, 2],
    outputRange: [75, 150],
  });

  const showsquare2 = sq2.interpolate({
    inputRange: [1, 1],
    outputRange: [0, 1],
  });

  const square3 = sq3.interpolate({
    inputRange: [2, 3],
    outputRange: [150, 225],
  });

  const showsquare3 = sq3.interpolate({
    inputRange: [2, 2],
    outputRange: [0, 1],
  });

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.5 }}>
        <View style={{ flex: 0.7 }}></View>

        <View
          style={{ flex: 0.2, flexDirection: "row", backgroundColor: "lightgray" }}
        >
          <Animated.View
            style={[
              styles.animation_view,
              {
                transform: [
                  {
                    translateX: square1,
                  },
                ],
              },
            ]}
          ></Animated.View>

          <Animated.View
            style={[
              styles.animation_view2,
              {
                transform: [
                  {
                    translateX: square2,
                  },
                ],
              },
              { opacity: showsquare2 },
            ]}
          ></Animated.View>
          <Animated.View
            style={[
              styles.animation_view3,
              {
                transform: [
                  {
                    translateX: square3,
                  },
                ],
              },
              { opacity: showsquare3 },
            ]}
          ></Animated.View>
        </View>
      </View>

      <View
        style={{
          flex: 0.2,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button title="Start" onPress={moveRL}></Button>
        <Button title="Stop" onPress={stopMove}></Button>
        <Button title="Reset" onPress={reset}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  square: {
    marginTop: 20,
    width: 50,
    height: 50,
    backgroundColor: "cyan",
  },
  animation_view: {
    marginTop: 15,
    backgroundColor: "red",
    width: 50,
    height: 50,
  },
  animation_view2: {
    marginTop: 15,
    backgroundColor: "blue",
    width: 50,
    height: 50,
  },
  animation_view3: {
    marginTop: 15,
    backgroundColor: "yellow",
    width: 50,
    height: 50,
  },
});
