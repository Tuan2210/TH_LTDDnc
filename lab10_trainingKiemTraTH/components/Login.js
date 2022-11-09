import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from "react-native";
import React from "react";

export default function Onboarding({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/coffee.png")}
        resizeMode="contain"
        style={{ alignSelf: "center" }}
      />
      <View style={styles.viewBottom}>
        <Text
          style={{
            color: "#fff",
            fontSize: 25,
            fontWeight: "bold",
            width: "52%",
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Coffe so good, your taste buds will love it.
        </Text>
        <Text
          style={{
            color: "lightgray",
            fontSize: 15,
            width: "55%",
            alignSelf: "center",
            textAlign: "center",
            marginTop: '-3%'
          }}
        >
          The best grain, the finest roast, the powerful flavor.
        </Text>
        <TouchableOpacity style={styles.btnLogin}>
          <Image source={require("../assets/imgGoogle.png")} />
          <Text style={{marginLeft: '3%', fontWeight: "bold", fontSize: 18}}>LOGIN WITH GOOGLE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  viewBottom: {
    // backgroundColor: '#fff',
    height: '30%',
    justifyContent: "space-evenly"
  },
  btnLogin: {
    backgroundColor: 'orange',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: '80%',
    padding: '3%',
    borderRadius: 10
  }
});
