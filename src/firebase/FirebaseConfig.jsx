// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyDprWTRsCyGySfNhvmcXX1_pqdzkEvx0mU",
  authDomain: "thakurcakepoint.firebaseapp.com",
  projectId: "thakurcakepoint",
  storageBucket: "thakurcakepoint.firebasestorage.app",
  messagingSenderId: "427588855761",
  appId: "1:427588855761:web:423db782202e404d54e2f0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }