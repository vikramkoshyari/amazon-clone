import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRlDRuqm-INyWUrfuvr70gEsan2GgearU",
  authDomain: "clone-1de8a.firebaseapp.com",
  projectId: "clone-1de8a",
  storageBucket: "clone-1de8a.appspot.com",
  messagingSenderId: "939529182522",
  appId: "1:939529182522:web:21d4c0ce870c6d263bc403",
  measurementId: "G-WZGXTF43M0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth}