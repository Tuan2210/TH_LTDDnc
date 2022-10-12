import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";


export default function ShoesDetails() {
    const route = useRoute();

    // var image1 = require("../images/shoes_rm_preview_b.png");
    var [link, setLink] =useState(null);
    useEffect(() => {
        if(route.params != null) 
            setLink(route.params.message);
    })

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
              Sole: Rubber Closure: Lace-Up Shoe Width: Medium Lace Up Grip
              Rubber Sole Padded Insole 100$
            </Text>
          </View>
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
    justifyContent: "center"
  },
  boxTop: {
    backgroundColor: "#F8DEDE",
    padding: "5%",
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
});
