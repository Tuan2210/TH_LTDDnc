import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
// import { useRoute } from "@react-navigation/native";

import { listOrders } from "./Home";
import axiosConfig from "../axiosConfig";

export default function Cart() {
  const [fullOrderList, setFullOrderList] = useState([{}]);
  useEffect(() => {
    axiosConfig.get("/Giỏ hàng.json").then((response) => {
      // console.log(response.data);
      // const getData = [];
      for (let key in response.data) {
        fullOrderList.push({ ...response.data[key], id: key });
      }
      // fullFilterList.push({ ...response.data });
      console.log(fullOrderList);
      // console.log(getData);
    });
  });
  const ItemOrder = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: "#F8E7D7",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ backgroundColor: "black", width: 120, padding: 10 }}>
          <Image
            style={{ width: "auto", height: "100%" }}
            source={item.url}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.price}</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.quantity}</Text>
          <Text style={{fontSize: 18, fontWeight: "bold"}}>Loại: {item.title}</Text>
        </View>
      </View>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.viewProductList}>
        <Text>List orders</Text>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          width: "95%",
          height: "15%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "red", fontSize: 15, fontWeight: "bold" }}>
          Tổng tiền:
        </Text>
        <Text style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>
          99,999 đ
        </Text>
      </View>
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
    alignItems: "center"
  },
  viewProductList: {
    width: '95%',
    height: '60%',
    backgroundColor: 'yellow'
  }
});
