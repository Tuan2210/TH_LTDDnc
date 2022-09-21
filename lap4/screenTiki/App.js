import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from "react";

//npm i react-native-safe-area-context
//link: https://www.npmjs.com/package/react-native-safe-area-context
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [count, setCount] = useState(1);
  const onPressPlus = () => setCount(count => count + 1);
  const onPressMinus = () => setCount(count => count - 1);

  // function handleQuantityBook(minCount){
  //   if(count<1) {
  //     [count, setCount] = useState(1)
  // }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.view1_twoColumn}>
          <View style={styles.view1_left}>
            <Image source={{ uri: 'https://raw.githubusercontent.com/Tuan2210/TH_LTDDnc/master/lap4/images/book.png'}} style={styles.imgBook}/>
            <Text style={styles.txt}>Mã giảm giá đã lưu</Text>
          </View>
          <View style={styles.view1_right}>
            <Text style={styles.txt}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.txt}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.txtPriceDiscount}>141.800 đ</Text>
            <Text style={styles.txtPrice}>141.800 đ</Text>
            <View style={styles.quantity} numberOfLines={1}>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={onPressMinus}
              >
                <Text style={styles.txt}>-</Text>
              </TouchableOpacity>
              <Text style={styles.txtQuantity}>{count}</Text>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={onPressPlus}
              >
                <Text style={styles.txt}>+</Text>
              </TouchableOpacity>
              <Text style={styles.txtMuaSau}>Mua sau</Text>
            </View>
            <Text style={{ fontSize: 20, color: '#134FEC'}}>Xem tại đây</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
  },
  view1:{
    backgroundColor: '#fff',
    height: 300,
    paddingTop: 20
  },
  view1_twoColumn:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
  },
  imgBook:{
    width: 170,
    height: 200,
  },
  view1_left: {
    height: '98%',
    width: '37%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1
  },
  view1_right:{
    // backgroundColor: '#C4C4C4',
    width: '58%',
    height: '98%',
    left: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingBottom: 5
  },
  txt:{
    fontSize: 20,
  },
  txtPriceDiscount:{
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold'
  },
  txtPrice:{
    fontSize: 20,
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  quantity:{
    flexDirection: 'row',
    display: 'flex',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,
  },
  txtQuantity:{
    fontSize: 20,
    left: 15
  },
  btnPlus: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    width: 30,
    paddingLeft: 5,
    paddingRight: 5,
    left: 35
  },
  btnMinus: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    width: 30,
    paddingLeft: 5,
    paddingRight: 5,
  },
  txtMuaSau: {
    fontSize: 20,
    color: '#134FEC',
    left: '580%'
  }
});
