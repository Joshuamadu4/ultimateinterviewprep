import { initializeApp, getApp, getApps } from "firebase/app";
import  { getAuth } from 'firebase/auth';
import  { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBPnzqS_Fs9guHTVb9HNFgFhFVt-qEY6Ms",
  authDomain: "prepwise-103df.firebaseapp.com",
  projectId: "prepwise-103df",
  storageBucket: "prepwise-103df.firebasestorage.app",
  messagingSenderId: "994002935216",
  appId: "1:994002935216:web:afdcaff711b369086f4a75",
  measurementId: "G-3NK51V4SF8"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth =  getAuth(app);
export const db = getFirestore(app);