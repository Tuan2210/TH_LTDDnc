import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txtRegister}>REGISTER</Text>
      </View>
      <View>
        <TextInput placeholder="Name" style={styles.inputName}></TextInput>
      </View>
      <View>
        <TextInput placeholder="Phone" style={styles.inputPhone}></TextInput>
      </View>
      <View>
        <TextInput placeholder="Email" style={styles.inputEmail}></TextInput>
      </View>
      <View>
        <TextInput
          placeholder="Password"
          style={styles.inputPassWord}
        ></TextInput>
      </View>
      <View>
        <TextInput
          placeholder="Birthday"
          style={styles.inputBirthday}
        ></TextInput>
      </View>
      <View style={styles.btnRegister}>
        <Button title="REGISTER" color="#E53935"></Button>
      </View>
      <View>
        <Text style={styles.txtAgree}>When you to term and conditions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31AA5219",
  },
  txtRegister: {
    position: "absolute",
    width: 116,
    height: 29,
    left: 123,
    top: 40,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 29,
  },
  inputName: {
    position: "absolute",
    width: 330,
    height: 54,
    left: 17,
    top: 97,
    backgroundColor: "rgba(196,196,196,03)",
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 20,
  },
  inputPhone: {
    position: "absolute",
    width: 330,
    height: 54,
    left: 17,
    top: 167,
    backgroundColor: "rgba(196,196,196,03)",
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 20,
  },
  inputEmail: {
    position: "absolute",
    width: 330,
    height: 54,
    left: 17,
    top: 237,
    backgroundColor: "rgba(196,196,196,03)",
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 20,
  },
  inputPassWord: {
    position: "absolute",
    width: 330,
    height: 54,
    left: 17,
    top: 307,
    backgroundColor: "rgba(196,196,196,03)",
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 20,
  },
  inputBirthday: {
    position: "absolute",
    width: 330,
    height: 54,
    left: 17,
    top: 377,
    backgroundColor: "rgba(196,196,196,03)",
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 20,
  },
  radioButonMale: {
    position: "absolute",
    width: 23,
    height: 23,
    left: 36,
    top: 453,
  },
  btnRegister: {
    position: "absolute",
    width: 330,
    height: 45,
    left: 15,
    top: 502,
  },
  txtAgree: {
    position: "absolute",
    width: 260,
    height: 20,
    left: 50,
    top: 561,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 16,
  },
});