// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg1G1b8bHGfbK2RFI4Uc37w9eW5gzMVIo",
  authDomain: "bookstore-7ea9f.firebaseapp.com",
  projectId: "bookstore-7ea9f",
  storageBucket: "bookstore-7ea9f.appspot.com",
  messagingSenderId: "894948988713",
  appId: "1:894948988713:web:711f80b7bc198e31e0c938",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
