// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgm7nk5VxNFN7rM3Z5NSg3PLCGLshW05A",
  authDomain: "mahjong-32f6c.firebaseapp.com",
  projectId: "mahjong-32f6c",
  storageBucket: "mahjong-32f6c.appspot.com",
  messagingSenderId: "1074566369783",
  appId: "1:1074566369783:web:8bd62ce90652408895def2",
  measurementId: "G-6Z0RCWF7BL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)