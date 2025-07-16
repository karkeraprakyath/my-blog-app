/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTJd2fmW2uBeu6bzhBe8jTKztiONbzfT4",
  authDomain: "myblogproject-d95d8.firebaseapp.com",
  projectId: "myblogproject-d95d8",
  storageBucket: "myblogproject-d95d8.firebasestorage.app",
  messagingSenderId: "873648103386",
  appId: "1:873648103386:web:01d570eb036608d1d9eae3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
