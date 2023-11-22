// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuTMV-RYXogYPXCFgr__4HDeNqsfnWio0",
  authDomain: "sportlife-47aa6.firebaseapp.com",
  projectId: "sportlife-47aa6",
  storageBucket: "sportlife-47aa6.appspot.com",
  messagingSenderId: "695134942830",
  appId: "1:695134942830:web:7c229a75614f17a8c0987f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export { auth, db};