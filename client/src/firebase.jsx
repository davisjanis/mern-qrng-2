// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-qrng-2.firebaseapp.com",
  projectId: "mern-qrng-2",
  storageBucket: "mern-qrng-2.appspot.com",
  messagingSenderId: "729368299450",
  appId: "1:729368299450:web:d45b10603b0522abf57f83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);