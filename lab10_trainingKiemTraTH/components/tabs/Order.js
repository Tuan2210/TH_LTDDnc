import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
} from "react-native";
import React, { useEffect } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Order() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>List orders</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
  },
});
