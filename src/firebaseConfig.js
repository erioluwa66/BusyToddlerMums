// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrEelCc8HIVtAefEO0dkJNBek8FiP_guA",
  authDomain: "busytoddlermum.firebaseapp.com",
  projectId: "busytoddlermum",
  storageBucket: "busytoddlermum.appspot.com",
  messagingSenderId: "48862643437",
  appId: "1:48862643437:web:0cd67af959b1619a2ab8e4",
  measurementId: "G-86B9S4C2QT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export default app;
