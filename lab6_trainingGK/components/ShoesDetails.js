import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";


export default function ShoesDetails({navigation}) {
    const route = useRoute();

    var image1 = require("../images/shoes_rm_preview_b.png");
    var [link, setLink] =useState(image1);
    useEffect(() => {
        if(route.params != null) 
            setLink(route.params.message);
    })

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.boxTop}>
                    <Image source={link} style={styles.imgDetail}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  box: {
    alignItems: "center",
  },
  boxTop: {
    backgroundColor: "#F8DEDE",
  },
});
