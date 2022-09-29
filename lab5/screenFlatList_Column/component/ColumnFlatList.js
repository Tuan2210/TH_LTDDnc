import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from "react-native";
import React, { useState } from "react";

//link doc: https://reactnative.dev/docs/flatlist

//link rating: https://www.npmjs.com/package/react-native-ratings
//npm i react-native-ratings
import { Rating } from "react-native-ratings";

import columnFlatListData from '../columnFlatListData';

const Item = ({
  item,
  onPress,
  viewItemList,
  viewItem,
  imgPrd,
  viewTwoColumn,
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, viewItemList]}>
    <View style={viewItem}>
      <Image
        source={{ uri: item.imgProduct }}
        style={[styles.imgProduct, imgPrd]}
      />
      <Text>{item.nameProduct}</Text>
      <View style={viewTwoColumn}>
        <Rating
          imageSize={22}
          ratingBackgroundColor="E5E5E5"
          style={{ padding: 5 }}
        />
        <Text style={{ marginLeft: 2, padding: 5 }}>(15)</Text>
      </View>
      <View style={viewTwoColumn}>
        <Text style={{ fontWeight: 'bold', paddingRight: 10 }}>{item.price}</Text>
        <Text>{item.discount}</Text>
      </View>
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
                viewItem={{ justifyContent: "center", padding: 15 }}
                imgPrd={{ width: "auto", height: 100 }}
                viewTwoColumn={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
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
});