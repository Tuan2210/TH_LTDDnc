import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnBT}>
        <Text style={styles.btnText} onPress={() => navigation.navigate("BT1")}>
          Bài tập 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBT}>
        <Text style={styles.btnText} onPress={() => navigation.navigate("BT2")}>
          Bài tập 2
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBT}>
        <Text style={styles.btnText} onPress={() => navigation.navigate("BT3")}>
          Bài tập 3
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBT}>
        <Text style={styles.btnText} onPress={() => navigation.navigate("BT4")}>
          Bài tập 4
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBT}>
        <Text style={styles.btnText} onPress={() => navigation.navigate("BT5")}>
          Bài tập 5
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  btnBT: {
    height: 40,
    backgroundColor: 'orange',
    padding: 10
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 15
  }
});
