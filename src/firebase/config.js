// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9f9AjXyhoas3AS8t-IBkuz_8_4oELeig",
  authDomain: "police-feedback-new.firebaseapp.com",
  projectId: "police-feedback-new",
  storageBucket: "police-feedback-new.appspot.com",
  messagingSenderId: "327028593167",
  appId: "1:327028593167:web:87580019947d4163fbc97a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);
