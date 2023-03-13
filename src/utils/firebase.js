// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwhIHmviEUbNEsWRVDeVoqFzKdXP7rhaA",
  authDomain: "br-foundation-9e98e.firebaseapp.com",
  projectId: "br-foundation-9e98e",
  storageBucket: "br-foundation-9e98e.appspot.com",
  messagingSenderId: "242613825986",
  appId: "1:242613825986:web:62e124ae28f24d8ae9265b",
  measurementId: "G-YXTQRCS8TQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
