// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyBTe_jIQna_dUxOa4jT6rdIRkg5KB-xKgo",
    authDomain: "all-project-ico.firebaseapp.com",
    projectId: "all-project-ico",
    storageBucket: "all-project-ico.appspot.com",
    messagingSenderId: "905417169183",
    appId: "1:905417169183:web:3d3af6d58b391f6f85b82a",
    measurementId: "G-J9L8PRHW08"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);