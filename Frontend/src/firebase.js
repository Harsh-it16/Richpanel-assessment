// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3OGg3vXi06hK-oRmj24Mw3VuTwHyh03Y",
    authDomain: "richpanel-db.firebaseapp.com",
    projectId: "richpanel-db",
    storageBucket: "richpanel-db.appspot.com",
    messagingSenderId: "3644033626",
    appId: "1:3644033626:web:4b823beb10360550aba663",
    measurementId: "G-T2WDTQCRP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
