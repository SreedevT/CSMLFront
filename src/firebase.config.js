// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8M04p4XUyQ1Sca1-XWAb9t0BgiYQOJMc",
    authDomain: "noise-csml.firebaseapp.com",
    projectId: "noise-csml",
    storageBucket: "noise-csml.appspot.com",
    messagingSenderId: "14893944288",
    appId: "1:14893944288:web:170169883490a88b646f85",
    measurementId: "G-ZDSPK6KR93"
};


const firebaseConfigTest = {
    apiKey: "AIzaSyCaHfFgaFITQ5F8uDzl3_YF-cdLf73hez4",
    authDomain: "testnoise-d24bf.firebaseapp.com",
    projectId: "testnoise-d24bf",
    storageBucket: "testnoise-d24bf.appspot.com",
    messagingSenderId: "55668168218",
    appId: "1:55668168218:web:37de118c2f455f7cd8e3a3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig, 'production');
const db = initializeFirestore(app, { localCache: persistentLocalCache(/*settings*/{}) });


// Initialize Firebase
const appTest = initializeApp(firebaseConfigTest, 'test');
const dbTest = initializeFirestore(appTest, { localCache: persistentLocalCache(/*settings*/{}) });


export { db, dbTest };