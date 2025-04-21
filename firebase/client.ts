import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaobDyWw8BKc-qg22vj9HmpGZAmplYhes",
  authDomain: "mentorai-8cc8e.firebaseapp.com",
  projectId: "mentorai-8cc8e",
  storageBucket: "mentorai-8cc8e.firebasestorage.app",
  messagingSenderId: "434398048772",
  appId: "1:434398048772:web:9d45632f208611d8853b51",
  measurementId: "G-DBV1BD70VV",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);