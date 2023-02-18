// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkjsxsjhBNOUz6LwtUX1xxn9oMJ77UVEE",
  authDomain: "thedevpiyush.firebaseapp.com",
  projectId: "thedevpiyush",
  storageBucket: "thedevpiyush.appspot.com",
  messagingSenderId: "62463147843",
  appId: "1:62463147843:web:44591913bf9d0a00c3f9f6",
  measurementId: "G-KMWBD98W28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);