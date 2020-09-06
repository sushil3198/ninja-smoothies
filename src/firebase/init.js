 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBvZdfdkKNS6QmwPt6ykR2BJKCOtXy33xc",
    authDomain: "ninja-smoothies-4b46a.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-4b46a.firebaseio.com",
    projectId: "ninja-smoothies-4b46a",
    storageBucket: "ninja-smoothies-4b46a.appspot.com",
    messagingSenderId: "983646537005",
    appId: "1:983646537005:web:e1c27bb75e8e83600d3fa4",
    measurementId: "G-LSKP026P94"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebaseApp.firestore()