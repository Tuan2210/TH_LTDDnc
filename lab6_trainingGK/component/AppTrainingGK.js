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


export default function AppTrainingGK(){
    const [dataList, setDataList] = useState([]);
    const [infoToDo, setInfoToDo] = useState('');

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.styleInput}
          placeholder="Nhập thông tin"
          onChangeText={(infoToDo) => setInfoToDo(infoToDo)}
          value={infoToDo}
          //   keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => {
            setDataList([...dataList, infoToDo]);
            setInfoToDo("");
          }}
        >
          <Text style={{ fontSize: 20, alignSelf: "center" }}>Thêm</Text>
        </TouchableOpacity>
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
                  <Text style={{ color: "#fff", padding: 10, alignSelf: 'center' }}>Xóa</Text>
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
  btnAdd: {
    backgroundColor: "orange",
    padding: 10,
    width: "20%",
    top: 50,
    alignSelf: "center",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
  },
  styleDataList: {
    flex: 1,
    marginTop: 60,
    backgroundColor: "lightgray",
  },
  itemData: {
    borderWidth: 1,
    borderRadius: 20,
    margin: 5,
    marginHorizontal: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    width: 55
  },
});