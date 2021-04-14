import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB5IWbjpiJBBYSjp-FyxA69EzOwJkxZ40M",
    authDomain: "will-158ad.firebaseapp.com",
    projectId: "will-158ad",
    storageBucket: "will-158ad.appspot.com",
    messagingSenderId: "420286055113",
    appId: "1:420286055113:web:de74c667c091bae0778318"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();