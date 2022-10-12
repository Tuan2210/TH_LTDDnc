import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState } from "react";

//npm i expo-screen-orientation
import * as ScreenOrientation from 'expo-screen-orientation';

export default function AppTrainingGK(){
  const [dataList, setDataList] = useState([]);
  const [infoToDo, setInfoToDo] = useState("");

  //handle screen portrait-landscape orientation
  const [orientationIsLandscape, setOrientation] = useState(true);
  async function changeScreenOrientation() {
    if (orientationIsLandscape == true) {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
      );
    } else if (orientationIsLandscape == false) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }
  function toggleOrientation() {
    setOrientation(!orientationIsLandscape);
    changeScreenOrientation();
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.styleInput}
        placeholder="Nhập thông tin"
        onChangeText={(infoToDo) => setInfoToDo(infoToDo)}
        value={infoToDo}
        //   keyboardType="numeric"
      />
      <View style={styles.viewTwoColumn}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setDataList([...dataList, infoToDo]);
            setInfoToDo("");
          }}
        >
          <Text style={{ fontSize: 20, alignSelf: "center" }}>Thêm</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btn} 
          onPress={toggleOrientation}
        >
          <Text style={{ fontSize: 20 }}>Xoay màn hình</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.styleDataList}
        data={dataList}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.itemData}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.txtNumber}>{index + 1} </Text>
                <Text style={{ fontSize: 18 }}>{item}</Text>
              </View>
              <TouchableOpacity
                style={styles.btnDelete}
                onPress={() => {
                  const dataListTemp = [...dataList];
                  dataListTemp.splice(index, 1);
                  setDataList(dataListTemp);
                }}
              >
                <Text
                  style={{ color: "#fff", padding: 10, alignSelf: "center" }}
                >
                  Xóa
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  styleInput: {
    width: "70%",
    backgroundColor: "lightgray",
    fontSize: 22,
    padding: 10,
    top: 30,
    alignSelf: "center",
  },
  viewTwoColumn: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "orange",
    padding: 10,
    margin: 20, 
    marginTop: 100,
    alignSelf: "center",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
  },
  styleDataList: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  itemData: {
    borderWidth: 1,
    borderColor: "#7000FF",
    borderRadius: 20,
    margin: 5,
    marginHorizontal: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  txtNumber: {
    fontSize: 18,
    marginRight: 10,
    color: "red",
    fontWeight: "bold",
  },
  btnDelete: {
    backgroundColor: "#7000FF",
    borderRadius: 10,
    width: 55,
  },
});