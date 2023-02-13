// getting the accees via variable 
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

import { GoogleAuthProvider } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEu3QmaFU-s6uPI_l_Lo0zp5XhymsQCOg",
  authDomain: "alumniform-4fe0a.firebaseapp.com",
  projectId: "alumniform-4fe0a",
  storageBucket: "alumniform-4fe0a.appspot.com",
  messagingSenderId: "312362900799",
  appId: "1:312362900799:web:863dbeeeaabf9f9a69078a"
};


  firebase.initializeApp(firebaseConfig);

  // variables that it will reaturn after calling import
  const auth = firebase.auth()
  const fs = firebase.firestore();
  const storage= firebase.storage();
  const provider =new GoogleAuthProvider();
  
  export {provider}