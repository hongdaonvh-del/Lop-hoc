// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx51d7ZHSl45wIDIM2D1cA80li8u1m20I",
  authDomain: "lop-hoc-cua-toi.firebaseapp.com",
  projectId: "lop-hoc-cua-toi",
  storageBucket: "lop-hoc-cua-toi.firebasestorage.app",
  messagingSenderId: "858707233238",
  appId: "1:858707233238:web:ba72aa4f10bf45cd547c77",
  measurementId: "G-T7XFWNDW9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
