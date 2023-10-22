// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnmWeCkShhREjE-jmr9DygxpzXswU7qGA",
  authDomain: "coffee-store-b4e25.firebaseapp.com",
  projectId: "coffee-store-b4e25",
  storageBucket: "coffee-store-b4e25.appspot.com",
  messagingSenderId: "840123436807",
  appId: "1:840123436807:web:6142d8b9498fad87b33fa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;