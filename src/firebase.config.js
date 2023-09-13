// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0hnDMTjZybGuNtGTUbF6zoaTWh1c_rLA",
    authDomain: "csml-2023.firebaseapp.com",
    databaseURL: "https://csml-2023-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "csml-2023",
    storageBucket: "csml-2023.appspot.com",
    messagingSenderId: "435854713954",
    appId: "1:435854713954:web:d752dd08ccca472d281d3b",
    measurementId: "G-0303HP86G6"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;