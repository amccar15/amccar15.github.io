import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from"firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATCvyMoGTm3cn-bMOwQj4X9Tl2qujYvh4",
  authDomain: "itis3300blog.firebaseapp.com",
  projectId: "itis3300blog",
  storageBucket: "itis3300blog.appspot.com",
  messagingSenderId: "646791092317",
  appId: "1:646791092317:web:c55489e3f85126ad0ad5b4",
  measurementId: "G-S1TZEXDT1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const auth = getAuth(app);
export const providor = new GoogleAuthProvider();

export const db = getFirestore(app);