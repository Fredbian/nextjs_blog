// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "fun-blog-58baf.firebaseapp.com",
  projectId: "fun-blog-58baf",
  storageBucket: "fun-blog-58baf.appspot.com",
  messagingSenderId: "331286096720",
  appId: "1:331286096720:web:488bc9fd933cbcf5469a55"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);