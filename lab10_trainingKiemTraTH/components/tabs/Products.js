import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, Alert, FlatList } from "react-native";
import React, { useEffect, useMemo, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import menuData from "../menuData";

//link handle click filter buttons and render data item flatlist: 
//https://stackoverflow.com/questions/68737291/react-native-filter-by-category-using-button-or-touchableopacity

export default function Products() {
  ////////// flatList filter btn
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
  const renderItemFilter = ({ item }) => {
    const backgroundColor = item.id === selectedIdCenter ? "#D4A055" : "";
    const color = item.id === selectedIdCenter ? "white" : "black";

    return (
      <ItemCenter
        item={item}
        onPress={() => {setselectedIdCenter(item.id); getTitleFilter(item.title)}}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  //////////

  ////////// flatlist render item data
  const [fullFilterList, setFullFilterList] = useState(menuData);

  const [titleFilter, setTitleFilter] = useState("");
  function getTitleFilter(filter) {
    setTitleFilter(filter);
  };

  const handleFilterList = useMemo(() => {
    if (titleFilter === "Hot Coffee")
      return fullFilterList.filter((item) => titleFilter === item.title); //title in menuData
    if (titleFilter === "Tea")
      return fullFilterList.filter((item) => titleFilter === item.title); //title in menuData
    if (titleFilter === "Milk")
      return fullFilterList.filter((item) => titleFilter === item.title); //title in menuData
    if (titleFilter === "Hot Teas")
      return fullFilterList.filter((item) => titleFilter === item.title); //title in menuData
  }, [titleFilter, fullFilterList]);

  const [selectedIdItemData, setSelectedIdItemData] = useState(null);

  const ItemData = ({ item, onPress, activeItemBg, activeItemFont }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[
        activeItemBg,
        {
          width: "45%",
          height: 220,
          justifyContent: "center",
          marginLeft: "3%",
          marginTop: "4%",
          borderRadius: 20,
          borderColor: "black",
          borderWidth: 1,
          borderStyle: "solid",
        },
      ]}
    >
      <Image
        source={item.url}
        style={{ width: "auto", height: 100 }}
        resizeMode="contain"
      />
      <View style={{ marginBottom: "-10%", marginTop: 20, marginLeft: 10 }}>
        <Text style={[activeItemFont, { fontSize: 18 }]}>{item.name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#D4A055", fontSize: 25, fontWeight: "bold", marginRight: '30%' }}>
            {item.price}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#D4A055",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              borderRadius: 10
            }}
          >
            <Text style={{fontWeight: "bold"}}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
  //////////

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBottom}>
        <Image
          source={require("../../assets/imgPromo.png")}
          style={{ alignSelf: "center", marginTop: "-18%", borderRadius: 20 }}
        />

        {/* flatlist buttons filter */}
        <View style={[styles.flatListBtn]}>
          <FlatList
            data={dataFilter}
            renderItem={renderItemFilter}
            keyExtractor={(item) => item.id}
            extraData={selectedIdCenter}
            horizontal
          />
        </View>

        {/* list items filter */}
        <View style={{flex: 1, alignItems: "center", marginTop: '3%'}}>
          <FlatList
            key={"#"}
            numColumns={2} // => bắt buộc key={'#'}
            data={handleFilterList}
            // keyExtractor={(item) => item.id}
            renderItem={
              ({item}) => {
                const backgroundColor = item.id === selectedIdItemData ? '#fff' : 'black';
                const color = item.id === selectedIdItemData ? 'black' : '#fff';
                return (
                  <ItemData
                    item={item}
                    onPress={() => setSelectedIdItemData(item.id)}
                    activeItemBg={{ backgroundColor }}
                    activeItemFont={{ color }}
                    // viewImgItem={{ width: "auto", height: 100 }}
                  />
                );
              }
            }
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
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  price: {
    fontSize: 22,
    textDecorationStyle: "solid",
    color: "yellow",
  },
});
