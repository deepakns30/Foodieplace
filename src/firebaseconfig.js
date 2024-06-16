// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBlB54QcVFFAVkgHPkDy2p8yQiLNpBv0o4",
  authDomain: "foodiepalace-ef0fa.firebaseapp.com",
  projectId: "foodiepalace-ef0fa",
  storageBucket: "foodiepalace-ef0fa.appspot.com",
  messagingSenderId: "985851261923",
  appId: "1:985851261923:web:1bb78987d8a0dcca4ca6d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getfirestore(app);

export { auth,db };
