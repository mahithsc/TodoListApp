// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCewSG57m6PLrsKnGoveQMfg3huHBOBGtA",
  authDomain: "todolistapp-f8cf9.firebaseapp.com",
  projectId: "todolistapp-f8cf9",
  storageBucket: "todolistapp-f8cf9.appspot.com",
  messagingSenderId: "1016007433270",
  appId: "1:1016007433270:web:f650075513bea458868c97",
  measurementId: "G-14DXSDSTHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);