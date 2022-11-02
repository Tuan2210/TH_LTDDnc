import { StyleSheet, View, Animated, Dimensions } from "react-native";
import React, { useState } from "react";

export default function BT1() {
  const widthScreen = Dimensions.get("window").width;
  const heightScreen = Dimensions.get("window").height;
  
  const [location, setLocation] = useState({
    x: null,
    y: null,
    // marginLeft: new Animated.Value(0),
    // marginTop: new Animated.Value(0),
    // xValue: useState(new Animated.Value(0))[0]
    // animatedLocation: null,
  });

  function onPress(e) {
    e.preventDefault();
    var newX = e.nativeEvent.locationX;
    var newY = e.nativeEvent.locationY;
    console.log("====================================");
    console.log('new x: ' +newX, 'new y: ' +newY);
    setLocation({
      x: newX,
      y: newY,
      // animatedLocation: animatedLocation(location),
      // marginLeft: x,
      // marginTop: y,
      // xValue: Animated.timing(newX, {
      //   toValue: newX,
      //   duration: 2000, //2s
      //   useNativeDriver: false,
      // }).start()
    });
  }
  // function animatedLocation({ location }) {
  //   Animated.timing(location, {
  //     toValue: location,
  //     duration: 2000, //2s
  //     useNativeDriver: false,
  //   }).start();
  // }

  function onMove(e) {
    e.preventDefault();
    console.log("====================================");
    console.log('location:'+location.x +',' +location.y);
    console.log("====================================");
    
    //setLocation({marginLeft: x, marginTop: y })
  }

  function onRelease() {
    console.log("Release!");
  }

  // const { marginTop, marginLeft } = location;
  const { x, y } = location;

  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={(e) => {onPress(e);}}
      onResponderMove={onMove}
      onResponderRelease={onRelease}
    >
      <Animated.Image
        source={require("../../assets/cat-moving.gif")}
        style={{
          width: 150,
          height: 200,
          marginLeft: x,
          marginTop: y,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C9ECC",
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
    borderRadius: 15,
  },
});