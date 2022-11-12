import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, Alert, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Products() {
  // flatList filter btn
  const dataFilter = [
    {
      id: 1,
      title: "Hot Coffee",
    },
    {
      id: 2,
      title: "Tea",
    },
    {
      id: 3,
      title: "Milk",
    },
    {
      id: 4,
      title: "Hot Teas",
    },
  ];
  const [selectedIdCenter, setselectedIdCenter] = useState(null);
  const ItemCenter = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, styles.item_center, backgroundColor]}
    >
      <Text style={[styles.title_item_center, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );
  const renderItemCenter = ({ item }) => {
    const backgroundColor = item.id === selectedIdCenter ? "#D4A055" : "";
    const color = item.id === selectedIdCenter ? "white" : "black";

    return (
      <ItemCenter
        item={item}
        onPress={() => setselectedIdCenter(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBottom}>
        <Image
          source={require("../../assets/imgPromo.png")}
          style={{ alignSelf: "center", marginTop: "-18%", borderRadius: 20 }}
        />
        <View style={[styles.flatListBtn]}>
          <FlatList
            data={dataFilter}
            renderItem={renderItemCenter}
            keyExtractor={(item) => item.id}
            extraData={selectedIdCenter}
            horizontal
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  containerBottom: {
    marginTop: "20%",
    flex: 1,
    backgroundColor: "#fff",
  },
  flatListBtn: {
    // backgroundColor: "orange",
    alignItems: "center",
    marginTop: "3%",
  },
  item_center: {
    width: 100,
    height: 40,
    marginRight: 20,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  item: {
    width: 360,
    backgroundColor: "#D4A055",
    borderColor: "#D4A055",
    borderWidth: 2,
    borderRadius: 10,
  },
  title_item_center: {
    textAlign: "center",
  },
});
