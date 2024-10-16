// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLHolAddBBQWNdlxM0hIDaiIilxo9CytI",
  authDomain: "chungnamws.firebaseapp.com",
  projectId: "chungnamws",
  storageBucket: "chungnamws.appspot.com",
  messagingSenderId: "440901868102",
  appId: "1:440901868102:web:0d0fc409237c4ab4834847",
  measurementId: "G-1GZ7YCCC8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);