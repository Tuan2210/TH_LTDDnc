import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
  FlatList
} from "react-native";
import React, { useEffect, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

import { listOrder } from "./Products";

export default function Order() {
  const [listCart, setListCart] = useState([]);

  const route = useRoute();
  useEffect(() => {
    // console.log(listOrder);
    // if(listOrder === null)
      setListCart(listOrder);
    // else setListCart(null);
    console.log('list cart: ', listCart);
  }, [listCart]);

  function handleBonus(quantity) {
    if (quantity > 0) {
      quantity++;
      // setQuantityItem(quantity)
      console.log(quantity);
      Alert.alert("Số lượng: " + quantity);
      return quantity;
    }
  }
  function handleMinus(quantity) {
    if (quantity === 0) quantity === 0;
    else quantity--;
    // setQuantityItem(quantity);
    Alert.alert("Số lượng: " + quantity);
    console.log(quantity);
    return quantity;
  } 

  const Item = ({ item, index }) => {
    // const [quantityItem, setQuantityItem] = useState('item.quantity');

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
            style={{ width: "auto", height: '100%' }}
            source={item.url}
            resizeMode="contain"
          />
        </View>

        <View style={[styles.f_title, styles.fext_center_collum]}>
          <Text style={[styles.f_title__title]}>{item.name}</Text>
          <Text style={styles.f_title__price}>{item.price}</Text>
        </View>

        <View
          style={{
            backgroundColor: "#D4A055",
            padding: 15,
            height: "100%",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            style={{ backgroundColor: "#F8E7D7", padding: 8, borderRadius: 50, alignItems: "center" }}
            onPress={() => handleBonus(item.quantity)}
          >
            <Text>+</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 20, padding: 5}}>{item.quantity}</Text>
          <TouchableOpacity
            style={{ backgroundColor: "#F8E7D7", padding: 8, borderRadius: 50, alignItems: "center" }}
            onPress={() => handleMinus(item.quantity)}
          >
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>List orders</Text> */}
      {listCart!==null ? (
        <FlatList
          data={listCart}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={[styles.f_title__title]}>Giỏ hàng rỗng </Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
