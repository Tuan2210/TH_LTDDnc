import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useState } from "react";

export default function BT3() {
    const [location, setLocation] = useState({
      marginLeft: new Animated.Value(10),
      marginTop: new Animated.Value(10),
    });

    let chieuCao1 = Math.floor(Math.random() * 700) + 1;
    let chieuRong1 = Math.floor(Math.random() * 300) + 1;
    let chieuCao2 = Math.floor(Math.random() * 700) + 1;
    let chieuRong2 = Math.floor(Math.random() * 300) + 1;
    let chieuCao3 = Math.floor(Math.random() * 700) + 1;
    let chieuRong3 = Math.floor(Math.random() * 300) + 1;

    const [locationMouse1, setLocationMouse1] = useState({
      marginLeft1: new Animated.Value(chieuRong1),
      marginTop1: new Animated.Value(chieuCao1),
    });
    const [locationMouse2, setLocationMouse2] = useState({
      marginLeft2: new Animated.Value(chieuRong2),
      marginTop2: new Animated.Value(chieuCao2),
    });
    const [locationMouse3, setLocationMouse3] = useState({
      marginLeft3: new Animated.Value(chieuRong3),
      marginTop3: new Animated.Value(chieuCao3),
    });

    function onPress(evt) {
      // console.log("====================================");
      var x = evt.nativeEvent.locationX;
      // console.log("====================================");
      // console.log(x);
      // console.log("====================================");
      var y = evt.nativeEvent.locationY;
      // console.log("====================================");
      // console.log(y);
      setLocation({
        x: x,
        y: y,
        marginLeft: x - 30,
        marginTop: y - 40,
      });
    }

    function onMove(evt) {
      var x = evt.nativeEvent.locationX;

      var y = evt.nativeEvent.locationY;
      setLocation({ marginLeft: x - 30, marginTop: y - 40 });
    }
    function onRelease() {
      // onMove(event)
    }
    const { marginTop, marginLeft } = location;
    const { marginTop1, marginLeft1 } = locationMouse1;
    const { marginTop2, marginLeft2 } = locationMouse2;
    const { marginTop3, marginLeft3 } = locationMouse3;

    return (
      <View
        style={styles.container}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
        // onResponderMove={onMove}
        onResponderRelease={onRelease}
      >
        {/* <Text>Show something!</Text> */}

        <Animated.Image
          source={require("../../assets/cat-moving.gif")}
          style={[
            { marginLeft: marginLeft, marginTop: marginTop },
            styles.postion,
          ]}
          onStartShouldSetResponder={() => true}
          onMoveShouldSetResponder={() => true}
          onResponderGrant={onPress}
          // onResponderMove={onMove}
          onResponderRelease={onPress}
        />

        <Animated.Image
          source={require("../../assets/rat-moving-1.gif")}
          style={[
            {
              marginLeft: marginLeft1,
              marginTop: marginTop1,
              width: 200,
              height: 80,
            },
            styles.postion,
          ]}
          onStartShouldSetResponder={() => true}
          onMoveShouldSetResponder={() => true}
          onResponderGrant={onPress}
          onResponderMove={onMove}
          onResponderRelease={onPress}
        />

        <Animated.Image
          source={require("../../assets/rat-moving-1.gif")}
          style={[
            {
              marginLeft: marginLeft2,
              marginTop: marginTop2,
              width: 200,
              height: 80,
            },
            styles.postion,
          ]}
        />

        <Animated.Image
          source={require("../../assets/rat-moving-1.gif")}
          style={[
            {
              marginLeft: marginLeft3,
              marginTop: marginTop3,
              width: 200,
              height: 80,
            },
            styles.postion,
          ]}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C9ECC",
  },
  postion: {
    position: "absolute",
    // backgroundColor: "red",
  },
});