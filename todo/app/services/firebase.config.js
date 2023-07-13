import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDkyK6xBsuO7Uk93_mzsWkKskJqWm267ZY",
    authDomain: "todo-a4b4a.firebaseapp.com",
    projectId: "todo-a4b4a",
    storageBucket: "todo-a4b4a.appspot.com",
    messagingSenderId: "70965435826",
    appId: "1:70965435826:web:f41a96df4c573c927518ab",
    measurementId: "G-TRZF019N0Z"
  };

  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);