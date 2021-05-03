import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyBRlDRuqm-INyWUrfuvr70gEsan2GgearU",
  // authDomain: "clone-1de8a.firebaseapp.com",
  // projectId: "clone-1de8a",
  // storageBucket: "clone-1de8a.appspot.com",
  // messagingSenderId: "939529182522",
  // appId: "1:939529182522:web:21d4c0ce870c6d263bc403",
  // measurementId: "G-WZGXTF43M0",
  apiKey: "AIzaSyCM8kA2xRsgAU-DdQwzd2sNYWzbxMVb2uM",
  authDomain: "fir-d7b84.firebaseapp.com",
  projectId: "fir-d7b84",
  storageBucket: "fir-d7b84.appspot.com",
  messagingSenderId: "653890279804",
  appId: "1:653890279804:web:fa7af2e20545501ed12cf9",
  measurementId: "G-R2T7FR3T21"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }