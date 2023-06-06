// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8pGXrna2XEgUgwBdsN-H6DVolyLQXU54",
  authDomain: "on-site-app.firebaseapp.com",
  databaseURL:
    "https://on-site-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "on-site-app",
  storageBucket: "on-site-app.appspot.com",
  messagingSenderId: "1071400844689",
  appId: "1:1071400844689:web:ce35d9d91ec2c1e4432e30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
