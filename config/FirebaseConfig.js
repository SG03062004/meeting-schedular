// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-scheduler-c8cdd.firebaseapp.com",
  projectId: "meeting-scheduler-c8cdd",
  storageBucket: "meeting-scheduler-c8cdd.firebasestorage.app",
  messagingSenderId: "345865972723",
  appId: "1:345865972723:web:a0fbac39d830e8c0c8c086",
  measurementId: "G-812T1MCVM2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
