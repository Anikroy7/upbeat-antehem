// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVfKsX2gxSEBv6Y0ZI0Xk51PBMhx4_RR0",
    authDomain: "upbeat-anthem.firebaseapp.com",
    projectId: "upbeat-anthem",
    storageBucket: "upbeat-anthem.appspot.com",
    messagingSenderId: "369160253341",
    appId: "1:369160253341:web:cad8383dfe297ea5588974"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;