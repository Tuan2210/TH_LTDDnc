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

export default function PassDataFlatlist_Row({navigation}) {
  var img1 = require("../images/shoes_rm_preview_b.png");
  var img2 = require("../images/shoes_rm_preview_a.png");
  var img3 = require("../images/shoes_rm_purple.png");
  var img4 = require("../images/shoes_rm_preview.png");
  var img5 = require("../images/shoes_rm_yellow.png");
  var img6 = require("../images/shoes_white-removebg-preview.png");
  var img7 = require("../images/color_removebg-preview.png");

  // var allImgItems = {img1, img2, img3, img4, img5, img6, img7};
  // const [img, setImg] = useState(null);
  const [link, setLink] = useState(null);

  //hanle item change bg color when choosen
  const [selectedId, setSelectedId] = useState(null);

  return (
    <View style={styles.container}>
      <FlatList
        data={shoesData}
        renderItem={({ item, index }) => {
          const backgroundColor = item.id === selectedId ? "#FDC251" : "#D9CEBA";

          function changeImgByIdItem() {
            // if(item.id==='1') setLink(img1)
            // if (item.id === "2") setLink(img2);
            // if (item.id === "3") setLink(img3);
            // if (item.id === "4") setLink(img4);
            // if (item.id === "5") setLink(img5);
            // if (item.id === "6") setLink(img6);
            // if (item.id === "7") setLink(img7);

            // if (item.id === selectedId) {
              switch (item.id) {
                case "1":
                  setLink(img1);
                  // setSelectedId(item.imgShoes);
                  break;
                case "2":
                  setLink(img2);
                  // setSelectedId(item.imgShoes);
                  break;
                case "3":
                  setLink(img3);
                  // setSelectedId(item.imgShoes);
                  break;
                case "4":
                  setLink(img4);
                  // setSelectedId(item.imgShoes);
                  break;
                case "5":
                  setLink(img5);
                  // setSelectedId(item.imgShoes);
                  break;
                case "6":
                  setLink(img6);
                  // setSelectedId(item.imgShoes);
                  break;
                case "7":
                  setLink(img7);
                  // setSelectedId(item.imgShoes);
                  break;
                default:
                  break;
              }
              navigation.navigate("ShoesDetails", { message: link });
            }
          // }

          return (
            <Item
              item={item}
              onPress={() => {
                  setSelectedId(item.id);
                  changeImgByIdItem();
                }
              }
              viewItem={{
                backgroundColor,
                marginTop: '5%',
                padding: 10,
                alignSelf: 'center',
                width: '90%',
                flexDirection: "row",
                flexWrap: "wrap",
                // alignItems: "flex-start",
                alignItems: 'center',
                borderRadius: 15,
              }}
              viewTxtItemShoes={{
                // alignSelf: 'center',
                marginLeft: '20%'
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