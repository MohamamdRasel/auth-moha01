// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr8vkxj7GOlccwGo1gKrO73EXy_CpZ2fQ",
  authDomain: "auth-milo01.firebaseapp.com",
  projectId: "auth-milo01",
  storageBucket: "auth-milo01.appspot.com",
  messagingSenderId: "224105585231",
  appId: "1:224105585231:web:7f6bef08e9cb99d0c0e83a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;