import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";

//npm i expo-screen-orientation
import * as ScreenOrientation from 'expo-screen-orientation';

export default function ShoesDetails() {
  const route = useRoute();

  // var image1 = require("../images/shoes_rm_preview_b.png");
  var [link, setLink] = useState(null);
  useEffect(() => {
    if (route.params != null) setLink(route.params.message);
  });

  //handle screen portrait-landscape orientation
  const [orientationIsLandscape, setOrientation] = useState(true);
  async function changeScreenOrientation() {
    if (orientationIsLandscape == true) {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
      );
    } else if (orientationIsLandscape == false) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }
  function toggleOrientation() {
    setOrientation(!orientationIsLandscape);
    changeScreenOrientation();
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.boxTop}>
          <Image source={link} style={styles.imgDetail} />
        </View>
        <View style={styles.boxBottom}>
          <Text style={styles.txtDetails}>
            adidas Women's Stan Smith Low Top Fashion Sneakers Shoes
          </Text>
          <Text style={styles.txtDetails}>
            Sole: Rubber Closure: Lace-Up Shoe Width: Medium Lace Up Grip Rubber
            Sole Padded Insole 100$
          </Text>
        </View>
        <TouchableOpacity 
          style={styles.btn} 
          onPress={toggleOrientation}
        >
          <Text style={{ fontSize: 20 }}>Change screen orientation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
  },
  boxTop: {
    backgroundColor: "#F8DEDE",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "50%",
  },
  imgDetail: {
    width: "70%",
    height: "80%",
  },
  boxBottom: {
    width: "80%",
    height: "35%",
    padding: "5%",
    backgroundColor: "#DDBBBB",
  },
  txtDetails: {
    fontSize: 22,
  },
  btn: {
    top: 10,
    margin: 15,
    backgroundColor: "orange",
    width: "40%",
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
