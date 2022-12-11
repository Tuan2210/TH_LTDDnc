import axios from "axios";
export default axios.create({
  baseURL:
    "https://trainingck-reactnative-52ba4-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDdmCqns8LMStjBDgoQej3-3gZdG7-sKiY",
//   authDomain: "trainingck-reactnative-52ba4.firebaseapp.com",
//   databaseURL:"https://trainingck-reactnative-52ba4-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "trainingck-reactnative-52ba4",
//   storageBucket: "trainingck-reactnative-52ba4.appspot.com",
//   messagingSenderId: "177180901996",
//   appId: "1:177180901996:web:58b6cf2b4a7685fd420e49",
//   measurementId: "G-JJDERNJVXM",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// export const realtimeDBFireBase = getDatabase(app);
