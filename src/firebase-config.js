import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDGRQwxN1IaNpYME2NuXqz9u5H_VRZGg3I",
  authDomain: "auth-b09ff.firebaseapp.com",
  projectId: "auth-b09ff",
  storageBucket: "auth-b09ff.appspot.com",
  messagingSenderId: "833754217247",
  appId: "1:833754217247:web:be0f3aa93fb79e3b314e2a",
  measurementId: "G-79SXHE3WK5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
