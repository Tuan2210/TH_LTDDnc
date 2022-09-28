import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

//link: https://reactnative.dev/docs/navigation
//npm i @react-navigation/native @react-navigation/native-stack
//expo i react-native-screens react-native-safe-area-context
import React, {useState, useEffect} from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";

//npm i react-native-ratings
import { Rating } from "react-native-ratings";

export default function DetailColorVsmart({navigation}) {
    const route = useRoute();

    var blue = require("../components/images/vsmart_live_xanh2.png");
    var [link, setLink] = useState(blue);

    useEffect(() => {
        if (route.params != null) setLink(route.params.message);
    });

  return (
    <View style={styles.container}>
      <Image source={link} style={styles.imgBlueVsmart}/>
      <Text style={styles.txtHang}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View style={styles.viewTwoColumn}>
        <Rating style={{ paddingVertical: 10, marginTop: "5%" }} />
        <Text style={{ marginTop: "10%", paddingLeft: 10 }}>
          (Xem 828 đánh giá)
        </Text>
      </View>
      <View style={styles.viewTwoColumn}>
        <Text style={styles.txtPriceDiscount}>1.790.000 đ</Text>
        <Text style={styles.txtPrice}>1.790.000 đ</Text>
      </View>
      <View style={styles.viewTwoColumn}>
        <Text style={styles.txtRefund}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <View style={styles.questions}>
          <Image source={require("./images/questions.png")} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.btnFourColors}
        onPress={() => navigation.navigate("ChooseColorVsmart_PassingParams")}
      >
        <Text style={styles.txtXong}>4 MÀU - CHỌN MÀU</Text>
        <Text
          style={{
            marginLeft: "25%",
            fontSize: 30,
            alignItems: "center",
            marginTop: -5,
          }}
        >
          {">"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnMua}>
        <Text style={styles.txtMua}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgBlueVsmart: {
    width: 200,
    height: "40%",
    alignSelf: "center",
    top: 10,
  },
  txtHang: {
    alignSelf: "center",
    top: 20,
  },
  viewTwoColumn: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  txtPriceDiscount: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: "-8.5%",
  },
  txtPrice: {
    color: "#00000094",
    fontWeight: "bold",
    textDecorationLine: "line-through",
    fontSize: 15,
    padding: 5,
    paddingLeft: "25%",
  },
  txtRefund: {
    fontSize: 12,
    fontWeight: "bold",
    color: "red",
    paddingTop: 10,
    marginLeft: "-40%",
  },
  questions: {
    paddingTop: 10,
    left: 10,
  },
  btnFourColors: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    width: 350,
    height: 35,
    alignSelf: "center",
    top: 20,
    shadowRadius: 3.84,
    elevation: 3, //độ lan ra
  },
  txtXong: {
    marginLeft: 90,
  },
  btnMua: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EE0A0A",
    borderRadius: 10,
    width: 350,
    height: 45,
    alignSelf: "center",
    top: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3, //độ lan ra
  },
  txtMua: {
    color: "#fff",
    fontSize: 20,
  },
});
