import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
// import { useRoute } from "@react-navigation/native";

export default function Cart() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>List orders</Text>
      {/* {listCart !== null ? (
        <FlatList
          data={listCart}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={[styles.f_title__title]}>Giỏ hàng rỗng </Text>
      )} */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
