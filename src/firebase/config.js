// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt-wZkPRzHKxeVmVZlhnBr4mlo5pUw12M",
  authDomain: "police-feedback-system.firebaseapp.com",
  projectId: "police-feedback-system",
  storageBucket: "police-feedback-system.appspot.com",
  messagingSenderId: "1070943534267",
  appId: "1:1070943534267:web:d385d9db787bee3ed97d9e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);
