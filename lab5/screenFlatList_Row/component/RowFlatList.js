import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import React, {useState} from "react";

//link: https://reactnative.dev/docs/navigation
//npm i @react-navigation/native @react-navigation/native-stack
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//link doc: https://reactnative.dev/docs/flatlist

import rowFlatListData from '../rowFlatListData';

const Item = ({
  item,
  onPress,
  viewItem,
  imgPrd,
  viewTwoColumnInfo,
  viewInfoPrd,
  txtNameShop,
  btnChatColor,
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, viewItem]}>
    <Image
      source={{ uri: item.imgProduct }}
      style={[styles.imgProduct, imgPrd]}
    />
    <View style={viewTwoColumnInfo}>
      <View style={viewInfoPrd}>
        <Text>{item.nameProduct}</Text>
        <Text>
          Shop&nbsp;
          <Text style={[styles.nameShop, txtNameShop]}>{item.nameShop}</Text>
        </Text>
      </View>
      <TouchableOpacity style={[styles.btnChat, btnChatColor]}>
        <Text style={{ color: "#fff" }}>CHAT</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

export default function RowFlatList() {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.viewThacMac}>
                <Text>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
            </View>
            <FlatList 
                data = {rowFlatListData} 
                renderItem = {
                    // ({item, index}) => {
                    //     //console.log(`item ${JSON.stringify(item)} index ${index}`)
                    //     return (
                    //         <Text>{item.name}</Text>
                    //     )
                    // }
                   ({ item, index }) => {
                        const backgroundColor = item.id === selectedId ? "#fff" : "#E5E5E5";

                        return (
                          <Item
                            item={item}
                            onPress={() => setSelectedId(item.id)}
                            viewItem={{
                              backgroundColor,
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignItems: "flex-start",
                              borderColor: "#C4C4C4",
                              borderStyle: "solid",
                              borderWidth: 1,
                            }}
                            imgPrd={{ width: 100, height: 100 }}
                            viewTwoColumnInfo={{
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignItems: "flex-start",
                              width: "75%",
                              height: "100%",
                              // borderColor: "#C4C4C4",
                              // borderStyle: "solid",
                              // borderWidth: 1,
                            }}
                            viewInfoPrd={{
                              flexDirection: "column",
                              padding: 15,
                              width: '65%',
                              height: '100%'
                              // borderColor: "#C4C4C4",
                              // borderStyle: "solid",
                              // borderWidth: 1,
                            }}
                            txtNameShop={{ color: "red" }}
                            btnChatColor={{
                              backgroundColor: "red",
                              width: "30%",
                              height: "25%",
                              justifyContent: "center",
                              alignItems: "center",
                              alignSelf: "center",
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
  viewThacMac: {
    backgroundColor: "#E5E5E5",
    padding: 20
  },
});