// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb2nvRpxAiSGkFtJFalI7XXHMlKSxvilI",
  authDomain: "savor-oasis-132a1.firebaseapp.com",
  projectId: "savor-oasis-132a1",
  storageBucket: "savor-oasis-132a1.firebasestorage.app",
  messagingSenderId: "133858020468",
  appId: "1:133858020468:web:8dc4372e2de88125d01521"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export default auth;