import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, Alert } from "react-native";
import React, { useEffect } from "react";

//hande expo google login
//link yt: https://www.youtube.com/watch?v=FSMrzYpBeDM
//link doc 1: https://docs.expo.dev/versions/v45.0.0/sdk/google-sign-in
//link doc 2: https://docs.expo.dev/guides/authentication/#google
//npm i expo-google-sign-in expo-auth-session
//npm i -g eas-cli
//link prj credentials gg cloud: https://console.cloud.google.com/apis/credentials?project=trainingkiemtrath-ltddnc&supportedpurview=project
//find SHA1 android: keytool -list -v -keystore "C:\Users\DELL\.android\debug.keystore" -alias androiddebugkey -storepass android -keypass android

// import * as GoogleSignIn from "expo-google-sign-in";
// import * as Google from "expo-auth-session/providers/google";

export default function Login({ navigation }) {
  // const handleGoogleLogin = () => {
  //   const config = {
  //     iosClientId: `386792697540-bh5isencli2g6if1i0l2rdt2v0ppi60u.apps.googleusercontent.com`,
  //     androidClientId: `386792697540-fmpdkor221bpi0r5p9t40mcnima5nv4o.apps.googleusercontent.com`,
  //     scopes: ['profile', 'email']
  //   };
  //   GoogleSignIn.signInAsync()
  //               .then((result) => {
  //                 const {type, user} = result;
  //                 if(type == 'success') {
  //                   setTimeout(() => navigation.navigate('Home'), 1000)
  //                 } else Alert.alert('Thông báo', 'Đăng nhập bằng Google bị hủy!')
  //               })
  //               .catch(err => {
  //                 console.log(err);
  //                 Alert.alert('Thông báo', 'Đăng nhập bằng Google thất bai, vuii lòng thử lại!');
  //               })
  // }
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   // expoClientId: "GOOGLE_GUID.apps.googleusercontent.com",
  //   iosClientId: "386792697540-bh5isencli2g6if1i0l2rdt2v0ppi60u.apps.googleusercontent.com",
  //   androidClientId: "386792697540-fmpdkor221bpi0r5p9t40mcnima5nv4o.apps.googleusercontent.com",
  //   // webClientId: "GOOGLE_GUID.apps.googleusercontent.com",
  // });

  // useEffect(() => {
  //   if (response?.type === "success") {
  //     const { authentication } = response;
  //     navigation.navigate("Home");
  //   }
  // }, [response]);

  // const signInAsync = async () => {
  //   try {
  //     await GoogleSignIn.askForPlayServicesAsync();
  //     const { type, user } = await GoogleSignIn.signInAsync();
  //     if (type === "success") {
  //       setTimeout(() => navigation.navigate("Home"), 1000);
  //     }
  //   } catch ({ message }) {
  //     Alert.alert("login: Error:" + message);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/coffee.png")}
        resizeMode="contain"
        style={{ alignSelf: "center" }}
      />
      <View style={styles.viewBottom}>
        <Text
          style={{
            color: "#fff",
            fontSize: 25,
            fontWeight: "bold",
            width: "55%",
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Coffe so good, your taste buds will love it.
        </Text>
        <Text
          style={{
            color: "lightgray",
            fontSize: 15,
            width: "40%",
            alignSelf: "center",
            textAlign: "center",
            marginTop: '-3%'
          }}
        >
          The best grain, the finest roast, the powerful flavor.
        </Text>
        <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Home')}>
          <Image source={require("../assets/imgGoogle.png")} />
          {/* <Text style={{marginLeft: '3%', fontWeight: "bold", fontSize: 18}}>LOGIN WITH GOOGLE</Text> */}
          <Text style={{marginLeft: '3%', fontWeight: "bold", fontSize: 18}}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  viewBottom: {
    // backgroundColor: '#fff',
    height: '30%',
    justifyContent: "space-evenly"
  },
  btnLogin: {
    backgroundColor: 'orange',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: '80%',
    padding: '3%',
    borderRadius: 10
  }
});
