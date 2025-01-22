// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADgXuAas1EjO4EGLoZpE0tCK6MiZUrlUk",
  authDomain: "netflixgpt-49959.firebaseapp.com",
  projectId: "netflixgpt-49959",
  storageBucket: "netflixgpt-49959.firebasestorage.app",
  messagingSenderId: "119055460779",
  appId: "1:119055460779:web:be4b89eeb25522b6404aee",
  measurementId: "G-M5V753QMFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();