import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyDrzAGBKAbWaH4KOpNZxTdzHKRvGlFD-Uo",
  authDomain: "app-1-e2c18.firebaseapp.com",
  databaseURL: "https://app-1-e2c18-default-rtdb.firebaseio.com",
  projectId: "app-1-e2c18",
  storageBucket: "app-1-e2c18.appspot.com",
  messagingSenderId: "967198652298",
  appId: "1:967198652298:web:5b3a3070c376f59c543a73"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

export { db };