// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9tql9EUtdcPjBrSKftD5azceXadLj91s",
  authDomain: "learn-together-f1e88.firebaseapp.com",
  projectId: "learn-together-f1e88",
  storageBucket: "learn-together-f1e88.appspot.com",
  messagingSenderId: "842002865664",
  appId: "1:842002865664:web:ab6dfdae5fa08d61d082e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;