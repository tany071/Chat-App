import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
 
const firebaseConfig = {
  apiKey: "AIzaSyD9bMSyFGE8Utz8vGTHF8Ibnac3c7Vi05I",
  authDomain: "chat-319f8.firebaseapp.com",
  projectId: "chat-319f8",
  storageBucket: "chat-319f8.appspot.com",
  messagingSenderId: "1001701143973",
  appId: "1:1001701143973:web:0da9f4540584bb7ac8644c",
  measurementId: "G-25K2RZX38E"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();