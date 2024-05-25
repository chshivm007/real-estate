// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGvH6NI9DIEhz_i98DlSbicRmbHc3HBZU",
  authDomain: "real-estate-reactt.firebaseapp.com",
  projectId: "real-estate-reactt",
  storageBucket: "real-estate-reactt.appspot.com",
  messagingSenderId: "152849857352",
  appId: "1:152849857352:web:98ac67a92532a38a58117d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();