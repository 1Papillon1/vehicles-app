import firebase from "firebase/compat/app";
import "firebase/compat/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCd2VRqjKEr4glJpT5XurWpVsC1TUX9IJk",
  authDomain: "vehicles-app-d2587.firebaseapp.com",
  databaseURL: "https://vehicles-app-d2587-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vehicles-app-d2587",
  storageBucket: "vehicles-app-d2587.appspot.com",
  messagingSenderId: "930134179589",
  appId: "1:930134179589:web:6647a0610968d4dc1d416c",
  measurementId: "G-7NMC1GPFNG"
  };

firebase.initializeApp(firebaseConfig);


export default firebase;


