import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDH52Npu-acEnRL3uYNrB-wGGMEqPDj4pE",
    authDomain: "eshop-de986.firebaseapp.com",
    projectId: "eshop-de986",
    storageBucket: "eshop-de986.appspot.com",
    messagingSenderId: "174792194610",
    appId: "1:174792194610:web:1efff490af8766f0171a2b",
    measurementId: "G-WW316TT0HQ"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export{db, auth}