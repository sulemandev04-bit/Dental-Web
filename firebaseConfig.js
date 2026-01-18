// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"; // Auth service
import { getDatabase, ref, push, set ,get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"; // Database functions

const firebaseConfig = {
  apiKey: "AIzaSyA7L8v-NLPdJ_9RX9Z26sWCB6C3JNFl9qU",
  authDomain: "dentalweb-b9c2e.firebaseapp.com",
  databaseURL: "https://dentalweb-b9c2e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dentalweb-b9c2e",
  storageBucket: "dentalweb-b9c2e.firebasestorage.app",
  messagingSenderId: "120826046446",
  appId: "1:120826046446:web:bd19b18293f3cb8424d0ff",
  measurementId: "G-EN4WVLMR5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const auth = getAuth(app);
const db = getDatabase(app);

// Export everything for use in other files
export { app, auth, db, ref, push, set , createUserWithEmailAndPassword ,get ,signInWithEmailAndPassword};