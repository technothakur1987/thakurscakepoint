tasks to be done 

1.use memo wherever needed such as login, signin , reset and etc.
2.optimize it for different screens .
3.proper error i toast container in  signin , login, reset and etc .










Cart Does not require login 

but when user want to proceed to payment .. he will do this from his accont page .. 


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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