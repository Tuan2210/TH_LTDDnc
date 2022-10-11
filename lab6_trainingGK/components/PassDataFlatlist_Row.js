import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";

import shoesData from './shoesData';

const Item = ({
  item,
  onPress,
  viewItem,
  viewTxtItemShoes,
}) => (
  <TouchableOpacity onPress={onPress} style={[item, viewItem]}>
    <Image source={item.imgShoes}/>
    <View style={viewTxtItemShoes}>
      <Text>
        {item.nameShoes}-discount {item.discount}
      </Text>
      <Text>Pls touch to see detail</Text>
    </View>
  </TouchableOpacity>
);

export default function PassDataFlatlist_Row() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <View style={styles.container}>
      <FlatList
        data={shoesData}
        renderItem={({ item, index }) => {
          const backgroundColor =
            item.id === selectedId ? "#FDC251" : "#D9CEBA";

          return (
            <Item
              item={item}
              onPress={() => setSelectedId(item.id)}
              viewItem={{
                backgroundColor,
                marginTop: '5%',
                padding: 10,
                alignSelf: 'center',
                width: '90%',
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-start",
                borderRadius: 15,
              }}
              viewTxtItemShoes={{
                alignSelf: 'center',
                marginLeft: '10%'
                
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "#FFF9F9",
  },
});