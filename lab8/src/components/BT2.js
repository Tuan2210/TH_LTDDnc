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

const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get("screen").height;
console.log(widthScreen +',' +heightScreen);

export default function BT2() {

  return (
    <Animated.View style={styles.container}>
      <Image
        source={require("../../assets/flying-airplane.gif")}
        style={{ height: 100, width: 100 }}
      />
      <View style={styles.viewBtn}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Top - Bottom</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Left - Right</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // marginLeft: 100,
    // marginTop: 20,
    backgroundColor: "#fff",
    // width: 200,
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
    // marginLeft: widthScreen-40,
    marginLeft: 100,
    marginTop: 20,
    backgroundColor: "yellow",
    width: 200,
  },
});
