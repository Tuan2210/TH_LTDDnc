import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from "react-native";
import React, { useState } from "react";

//link: https://reactnative.dev/docs/navigation
//npm i @react-navigation/native @react-navigation/native-stack
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//link doc: https://reactnative.dev/docs/flatlist

import columnFlatListData from '../columnFlatListData';

const Item = ({
  item,
  onPress,
  viewItemList,
  imgPrd,
  viewItem,
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, viewItemList]}>
    <View style={viewItem}>
      <Image
        source={{ uri: item.imgProduct }}
        style={[styles.imgProduct, imgPrd]}
      />
      <Text>{item.nameProduct}</Text>
    </View>
  </TouchableOpacity>
);

export default function ColumnFlatList() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <View style={styles.container}>
      <FlatList
        key={'#'}
        numColumns={2} // => bắt buộc key={'#'}
        data={columnFlatListData}
        renderItem={
          ({ item, index }) => {
            const backgroundColor = item.id === selectedId ? "#fff" : "#E5E5E5";

            return (
              <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                viewItemList={{ flex: 1, backgroundColor }}
                viewItem={{}}
                imgPrd={{ width: 170, height: 100 }}
              />
            );
          }
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  viewThacMac: {
    backgroundColor: "#E5E5E5",
    padding: 20,
  },
});