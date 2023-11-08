import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth }  from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCuTMV-RYXogYPXCFgr__4HDeNqsfnWio0",
  authDomain: "sportlife-47aa6.firebaseapp.com",
  projectId: "sportlife-47aa6",
  storageBucket: "sportlife-47aa6.appspot.com",
  messagingSenderId: "695134942830",
  appId: "1:695134942830:web:7c229a75614f17a8c0987f"
};

const auth = getAuth(app);
const db = getFirestore(app);
const app = initializeApp(firebaseConfig);

export {auth, db};