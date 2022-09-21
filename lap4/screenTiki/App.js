import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from "react";

export default function App() {
  const [countPlus, setCountPlus] = useState(1);
  const onPressPlus = () => setCountPlus(nextCount => nextCount + 1);

  const [countMinus, setCountMinus] = useState(countPlus);
  const onPressMinus = () => setCountMinus(prevCount => prevCount - 1);
  
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.view1_twoColumn}>
          <Image source={{ uri: 'https://raw.githubusercontent.com/Tuan2210/TH_LTDDnc/master/lap4/images/book.png'}} style={styles.imgBook}/>
          <View style={styles.view1_txt}>
            <Text style={styles.txtNguyenHam}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.txtCungCap}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.txtPriceDiscount}>141.800 đ</Text>
            <Text style={styles.txtPrice}>141.800 đ</Text>
            <View style={styles.quantity} numberOfLines={1}>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={onPressMinus}
              >
                <Text style={StyleSheet.create({ fontSize: 20 })}>-</Text>
              </TouchableOpacity>
              <Text style={styles.txtQuantity}>{countPlus}</Text>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={onPressPlus}
              >
                <Text style={StyleSheet.create({fontSize: 20})}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
  },
  view1:{
    backgroundColor: '#fff',
    width: '100%',
    height: 400,
    paddingTop: 30
  },
  view1_twoColumn:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
  },
  imgBook:{
    width: 150,
    height: 200,
    left: 15
  },
  view1_txt:{
    width: '65%',
    // backgroundColor: '#C4C4C4',
    left: 30
  },
  txtNguyenHam:{
    fontSize: 20,
  },
  txtCungCap:{
    fontSize: 20,
    top: 20
  },
  txtPriceDiscount:{
    fontSize: 30,
    top: 30,
    color: 'red',
    fontWeight: 'bold'
  },
  txtPrice:{
    fontSize: 20,
    top: 30,
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  quantity:{
    flexDirection: 'row',
    display: 'flex',
  },
  txtQuantity:{
    fontSize: 20,
    top: 30
  },
  btnPlus: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    paddingLeft: 5,
    paddingRight: 5,
    top: 30,
    left: 10
  },
});
