// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp} from "firebase/app";
import{getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVg6RrOJc4HlpoS5XSimAuSBKj-rOvs5I",
  authDomain: "preppal-a0e04.firebaseapp.com",
  projectId: "preppal-a0e04",
  storageBucket: "preppal-a0e04.firebasestorage.app",
  messagingSenderId: "374395685314",
  appId: "1:374395685314:web:1463d5fbabd2620bf62e5b",
  measurementId: "G-3KX71ZGJ5N"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);