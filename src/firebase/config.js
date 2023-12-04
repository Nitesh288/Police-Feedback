// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9HHnJEbXoeCSTuKr4zcmDS0LKHJ9nEvc",
  authDomain: "feedback-system-ef012.firebaseapp.com",
  projectId: "feedback-system-ef012",
  storageBucket: "feedback-system-ef012.appspot.com",
  messagingSenderId: "467922610199",
  appId: "1:467922610199:web:abbb7ee2ab60498a8d5452",
  measurementId: "G-CJZN3CMEDT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);
