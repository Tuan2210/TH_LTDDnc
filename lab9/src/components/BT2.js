import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions
} from "react-native";
import React, { useState } from "react";

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get("window").height;
console.log('width: ' +widthScreen +', ' +'height: ' +heightScreen);

export default function BT2() {
  //move left - right
  const leftValue = useState(new Animated.Value(0))[0];
  // const rightValue = useState(new Animated.Value(widthScreen-120))[0];
  function moveLeftRight() {
    // if(leftValue) {
      Animated.timing(leftValue, {
        toValue: widthScreen - 120,
        duration: 3000, //3s
        useNativeDriver: false,
      }).start();
    // }
    // if (rightValue) {
    //   Animated.timing(rightValue, {
    //     toValue: 0,
    //     duration: 3000, //3s
    //     useNativeDriver: false,
    //   }).start();
    // }
  }

  //move top - bottom
  const topValue = useState(new Animated.Value(0))[0];
  // const topValueBtn = useState(new Animated.Value(0))[0];
   function moveTopBottom() {
    //  if (topValue) {
       Animated.timing(topValue, {
         toValue: heightScreen - 240,
         duration: 3500, //3s
         useNativeDriver: false,
       }).start();
      //  Animated.timing(topValueBtn, {
      //    toValue: -heightScreen,
      //    duration: 3500,
      //    useNativeDriver: false
      //  })
    //  }
   }

  return (
    <View style={styles.container}>
      {/* <Animated.View style={[styles.viewPlane, { marginLeft: leftValue, marginTop: topValue }]}>
        <Image
          source={require("../../assets/flying-airplane.gif")}
          style={{ height: 120, width: 120 }}
        />
      </Animated.View>
      <View style={styles.viewBtn}>
        <TouchableOpacity style={styles.btn} onPress={moveTopBottom}>
          <Text style={styles.txt}>Top - Bottom</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={moveLeftRight}>
          <Text style={styles.txt}>Left - Right</Text>
        </TouchableOpacity>
      </View> */}
      <Text>bt2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewBtn: {
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    height: 150,
    marginTop: "30%",
  },
  btn: {
    backgroundColor: "cyan",
    height: 50,
    padding: 10,
  },
  txt: {
    fontSize: 20,
  },
  viewPlane: {
    width: 120,
    height: 120,
  },
});
