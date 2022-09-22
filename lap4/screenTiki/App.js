import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import React, { useState } from "react";

//npm i react-native-safe-area-context
//link: https://www.npmjs.com/package/react-native-safe-area-context
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [count, setCount] = useState(1);
  const onPressPlus = () => setCount(count => count + 1);
  const onPressMinus = () => setCount(count => count - 1);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.viewTwoColumn}>
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
            <Text style={{fontSize: 20, color: '#134FEC'}}>Xem tại đây</Text>
          </View>
        </View>
      </View>
      <View style={styles.view2}>
        <View style={styles.viewTwoColumn}>
          <View style={styles.viewMaGiamGia}>
            <View style={styles.viewYellow}/>
            <Text style={styles.txtMaGiamGia}>Mã giảm giá</Text>
          </View>
          {/* <View style={styles.viewBtnApDung}> */}
            {/* <Button
              style={styles.btnApDung}
              title='Áp dụng'
              color='#0A5EB7'/> */}
          <View style={{ left: 60 }}>
            <TouchableOpacity style={styles.btnApDung}
              // onPress={}
            >
              <Text style={styles.txtApDung}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
          {/* </View> */}
        </View>
      </View>
      <View style={styles.view3}>
        <View style={styles.viewTwoColumn}>
          <Text style={styles.txt}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Text style={styles.txtNhap}>Nhập tại đây</Text>    
        </View>
      </View>
      <View style={styles.view4}>
        <View style={styles.viewTwoColumn}>
          <Text style={styles.txtTamTinh}>Tạm tính</Text>
          <Text style={styles.priceTamTinh}>{141800*count} đ</Text>
        </View>
      </View>
      <View style={styles.view5}>
        <View style={styles.viewTwoColumn}>
          <Text style={styles.txtThanhTien}>Thành tiền</Text>
          <Text style={styles.priceThanhTien}>{141800*count} đ</Text>
        </View>
        <View style={styles.viewDat}>
          <TouchableOpacity style={styles.btnDat}
          // onPress={}
          >
            <Text style={styles.txtDat}>TIẾN HÀNH ĐẶT HÀNG</Text>
          </TouchableOpacity>
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
  viewTwoColumn:{
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
  },
  view2: {
    backgroundColor: '#fff',
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    // borderColor: '#808080',
    // borderStyle: 'solid',
    // borderWidth: 1,
  },
  viewMaGiamGia: {
    borderColor: '#808080',
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    left: 15,
    width: '67%',
  },
  viewYellow: {
    backgroundColor: '#F2DD1B',
    width: 40,
    height: 20,
    margin: 10
  },
  txtMaGiamGia: {
    fontSize: 25,
    padding: 10
  },
  btnApDung: {
    backgroundColor: '#0A5EB7',
    width: 130,
    height: 76,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtApDung: {
    fontSize: 25,
    color: '#fff'
  },
  view3: {
    backgroundColor: '#fff',
    top: 20,
    padding: 15
  },
  txtNhap: {
    fontSize: 20,
    color: '#134FEC',
    left: 25
  },
  view4: {
    backgroundColor: '#fff',
    top: 40,
    paddingBottom: 20
  },
  txtTamTinh: {
    fontSize: 25,
    padding: 15
  },
  priceTamTinh: {
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
    left: '400%',
    paddingTop: 12
  },
  view5: {
    backgroundColor: '#fff',
    top: 150,
    height: '22%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  txtThanhTien: {
    fontSize: 25,
    paddingLeft: 15,
    color: '#808080'
  },
  priceThanhTien: {
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
    left: '600%',
  },
  viewDat: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: '-2%'
  },
  btnDat: {
    backgroundColor: '#E53935',
    width: 400,
    height: 76,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtDat: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
