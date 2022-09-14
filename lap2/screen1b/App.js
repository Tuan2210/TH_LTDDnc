import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <LinearGradient
      colors={["rgb(230, 255, 255)", "#BDF6C6"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.icon}>
        <Entypo name="lock" size={150} color="black"></Entypo>
      </View>
      <View>
        <Text style={styles.lblForgetPass}>FORGET PASSWORD</Text>
      </View>
      <View>
        <Text style={styles.text}>
          Provied your account's email for which you want to reset your password
        </Text>
      </View>
      <View style={styles.searSection}>
        <MaterialCommunityIcons
          name="email-newsletter"
          size={25}
          color="black"
          style={styles.icon1}
        />
        <TextInput placeholder="Email" style={styles.input}></TextInput>
      </View>
      <View style={styles.loginButton}>
        <Button title="NEXT" color="#E3C000"></Button>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    position: "absolute",
    left: 130,
    marginTop: '20%'
  },
  lblForgetPass: {
    position: "absolute",
    width: 133,
    height: 58,
    left: 113,
    marginTop: '55%',
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 29,
  },
  text: {
    position: "absolute",
    width: 302,
    height: 53,
    left: 30,
    top: 320,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 18,
  },
  searSection: {
    position: "absolute",
    width: 305,
    height: 45,
    left: 30,
    top: 383,
    backgroundColor: "#C4C4C4",
    borderColor: "#000000",
    borderWidth: 1,
  },
  searchIcon: {
    position: "absolute",
    width: 48,
    height: 45,
    left: 30,
    top: 383,
  },
  input: {
    position: "absolute",
    borderColor: "#000000",
    paddingTop: 8,
    paddingRight: 10,
    paddingBottom: 30,
    paddingLeft: 40,
  },
  icon1: {
    padding: 10,
  },
  loginButton: {
    position: "absolute",
    width: 305,
    height: 45,
    left: 30,
    top: 471,
  },
});