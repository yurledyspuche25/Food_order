import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCrhQsgMOIL0s_ip1LsAAew-Da1Phg2jK8",
  authDomain: "sprint-food-2bac0.firebaseapp.com",
  projectId: "sprint-food-2bac0",
  storageBucket: "sprint-food-2bac0.appspot.com",
  messagingSenderId: "429777510635",
  appId: "1:429777510635:web:8d393eed101a3684aedeae",
  measurementId: "G-HJ0HV0F8H2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  export const auth = getAuth(app);
  export const dataBase = getFirestore(app);
  export const google = new GoogleAuthProvider();
  export const facebook = new FacebookAuthProvider();