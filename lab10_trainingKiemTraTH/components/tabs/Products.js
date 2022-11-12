import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, Alert, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import data from '../data';

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
  const [selectedIdBottom, setSelectedIdBottom] = useState(null);

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

  const renderItemsPrd = ({ item }) => {
    const Item = ({ item, onPress }) => (
      <TouchableOpacity
        style={[styles.item, styles.flex_center_row]}
        onPress={onPress}
      >
        <Image style={styles.flatList_img} source={{ uri: item.url }} />
        <View style={[styles.item_about]}>
          <Text style={[styles.title, { height: "40%", width: "90%" }]}>
            {item.name}
          </Text>
          <Text
            style={[styles.title_discrible, { height: "35%", width: "90%" }]}
          >
            Công ty Cổ Phần Phúc Long Heritage
          </Text>
          <View
            style={[styles.item_about__bottom, { height: "25%", width: "90%" }]}
          >
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity style={styles.btn_content}>
              <Text style={styles.btn_content_text}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );

    return <Item item={item} onPress={() => setselectedIdCenter(item.id)} />;
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
        {/* <View style={[styles.flex_center_row]}>
          <FlatList
            data={data}
            renderItem={renderItemsPrd}
            horizontal
            // showsHorizontalScrollIndicator={false}
            // pagingEnabled
            // bounces={false}
            keyExtractor={(item) => item.id}
            // scrollEventThrottle={32}
          />
        </View> */}
        {/* <View style={[styles.flatList_bottom, styles.flex_center_row]}>
          <FlatList
            data={data}
            renderItem={renderItemBottom}
            numColumns={2}
            keyExtractor={(item) => item.id}
          />
        </View> */}
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

  //filters
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

  //items
  flex_center_row: {
    alignItems: "center",
    flexDirection: "row",
  },
  // FlatList: {
  //   marginVertical: 20,
  //   width: 360,
  //   height: "20%",
  // },
  flatList_img: {
    height: 150,
    width: 135,
    resizeMode: "contain",
  },
  item_about: {
    width: 220,
    height: "80%",
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  title_discrible: {
    fontSize: 14,
    color: "#fff",
  },
  item_about__bottom: {
    with: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  price: {
    fontSize: 22,
    textDecorationStyle: "solid",
    color: "yellow",
  },
  btn_content: {
    width: 100,
    height: 35,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#808000",
    borderWidth: 2,
    // borderRadius: "10%",
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: "#808000",
  },
  btn_content_text: {
    textTransform: "uppercase",
    color: "#fff",
  },
});
