// getting the accees via variable 
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrAMpZXyYPlV1H2vdaXyk7WtmIMd2N7M8",
    authDomain: "bakewithlove-61ccb.firebaseapp.com",
    projectId: "bakewithlove-61ccb",
    storageBucket: "bakewithlove-61ccb.appspot.com",
    messagingSenderId: "102914727968",
    appId: "1:102914727968:web:9ccbf327f7249695619c45",
    measurementId: "G-630N3DZKCF"
  };


  firebase.initializeApp(firebaseConfig);

  // variables that it will reaturn after calling import
  const auth = firebase.auth()
  const fs = firebase.firestore();
  const storage= firebase.storage();
  
  export {auth,fs,storage}