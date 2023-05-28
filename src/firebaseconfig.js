// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7fFMhoXhU9V4-PZAeqtZod0S7GVBKKr4",
  authDomain: "realtime-chat-c8698.firebaseapp.com",
  projectId: "realtime-chat-c8698",
  storageBucket: "realtime-chat-c8698.appspot.com",
  messagingSenderId: "907699461230",
  appId: "1:907699461230:web:7dc16082dfa55da9059a7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
