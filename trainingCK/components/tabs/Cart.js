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
  // const [fullOrderList, setFullOrderList] = useState([{}]);
  let fullOrderList = [];
  let objUrl, objName, objPrice, objQuantity, objTitle;
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    axiosConfig.get("/Giỏ hàng.json").then((response) => {
      // console.log(response.data);
      // const getData = [];
      for (let key in response.data) {
        fullOrderList.push({ ...response.data[key]});
      }
      // fullFilterList.push({ ...response.data });
      if(fullOrderList!==null) setFlag(true);
      console.log('full order-list:')
      console.log(fullOrderList);
      // console.log(getData);
    });
  });
  const ItemOrder = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#F8E7D7",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ backgroundColor: "black", width: 120, padding: 10 }}>
          <Image
            style={{ width: "auto", height: 120 }}
            source={{uri: item.key.url}}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.key.name}</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.key.price} đ</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.key.quantity}</Text>
          <Text style={{fontSize: 18, fontWeight: "bold"}}>Loại: {item.key.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewProductList}>
        {/* <Text>List orders</Text> */}
        <FlatList
          // style={{display: !flag ? "flex" : 'none'}}
          data={fullOrderList}
          keyExtractor={(item) => `key-${item.id}`}
          renderItem={({item, index}) => {
            return(
              <ItemOrder 
                item={item}
                index={index}
              />
            )
          }}
        />
      </View>
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
    height: '70%',
    backgroundColor: 'yellow'
  }
});
