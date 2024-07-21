// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import env from 'dotenv'
env.config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "onelink-8da0d.firebaseapp.com",
    projectId: "onelink-8da0d",
    storageBucket: "onelink-8da0d.appspot.com",
    messagingSenderId: "371385607379",
    appId: "1:371385607379:web:29657fe2a110c570486026",
    measurementId: "G-B2PM6E3HHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }