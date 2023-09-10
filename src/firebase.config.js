// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaHfFgaFITQ5F8uDzl3_YF-cdLf73hez4",
  authDomain: "testnoise-d24bf.firebaseapp.com",
  projectId: "testnoise-d24bf",
  storageBucket: "testnoise-d24bf.appspot.com",
  messagingSenderId: "55668168218",
  appId: "1:55668168218:web:37de118c2f455f7cd8e3a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;