// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPKG89Fx-OPBMBE_A4jcif7dR4aBVLZ1k",
  authDomain: "fridgeease.firebaseapp.com",
  projectId: "fridgeease",
  storageBucket: "fridgeease.appspot.com",
  messagingSenderId: "225147347677",
  appId: "1:225147347677:web:84d7d74d5eca5fcde67134",
  measurementId: "G-JVWWH65NDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export {auth}; 