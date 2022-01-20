import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyB9g9ERCnsn3JZg0UK7eAU5A2bmaKUshww",
  authDomain: "foodhub-448e7.firebaseapp.com",
  projectId: "foodhub-448e7",
  storageBucket: "foodhub-448e7.appspot.com",
  messagingSenderId: "952591350609",
  appId: "1:952591350609:web:60009f795df4c299283170",
});

export const db = getFirestore();
