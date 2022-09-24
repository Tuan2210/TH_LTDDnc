import { ImageBackground, Image, StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import { LinearGradient } from "expo-linear-gradient";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

//yarn create expo-app screen1b
//yarn add expo
//yarn start

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LinearGradient
        colors={["rgb(230, 255, 255)", "#BDF6C6"]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      > */}
        <ImageBackground 
          source={{ uri: 'https://raw.githubusercontent.com/Tuan2210/TH_LTDDnc/master/lap2-3/images/bg1b.png'}} 
          resizeMode='cover' 
          style={styles.bg1b}>
          <View style={styles.iconLock}>
            {/* <Entypo name="lock" size={150} color="black"></Entypo> */}
          <Image source={{ uri: "https://raw.githubusercontent.com/Tuan2210/TH_LTDDnc/master/lap2-3/images/lock.png" }} style={styles.iconLock} />
          </View>
          <View>
            <Text style={styles.title}>FORGET{'\n'}PASSWORD</Text>
          </View>
          <View>
            <Text style={styles.label}>Provide your account's email for which you {'\n'}want to reset your password</Text>
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
          <View style={styles.btnNext}>
            <Button title="NEXT" color="#E3C000"></Button>
          </View>
        </ImageBackground>
      {/* </LinearGradient> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bg1b: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconLock: {
    marginTop: '-50%',
    width: 142,
    height: 150
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 'bold',
    top: '10%'
  },
  label: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '10%'
  },
  searSection: {
    justifyContent: "center",
    marginTop: '10%',
    width: 305,
    height: 45,
    backgroundColor: "#C4C4C4",
    borderColor: "black",
    borderWidth: 1
  },
  searchIcon: {
    position: "absolute",
    width: 48,
    height: 45,
    left: 30
  },
  icon1: {
    padding: 10
  },
  input: {
    position: "absolute",
    marginLeft: '15%'
  },
  btnNext: {
    justifyContent: 'center',
    marginTop: '10%',
    marginBottom: '-50%',
    width: 305,
    height: 50
  },
});