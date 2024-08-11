// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCi99ToaZWWY_tzFh41lfxrTjB1J71B-o",
    authDomain: "saylani-batch-11-test.firebaseapp.com",
    projectId: "saylani-batch-11-test",
    storageBucket: "saylani-batch-11-test.appspot.com",
    messagingSenderId: "824449006908",
    appId: "1:824449006908:web:1f8705639d78a6cd21b239",
    measurementId: "G-DNFMH9G7RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db }