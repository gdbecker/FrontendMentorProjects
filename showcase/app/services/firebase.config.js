import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCzjEA4U5HoWHND1CmBFajujALaBPVkDmM",
    authDomain: "frontendmentorportfolio.firebaseapp.com",
    projectId: "frontendmentorportfolio",
    storageBucket: "frontendmentorportfolio.appspot.com",
    messagingSenderId: "466025043100",
    appId: "1:466025043100:web:02191d0ff35f2b91568959",
    measurementId: "G-G74J6L6LQ8"
  };

  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);