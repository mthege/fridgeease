import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
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
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;