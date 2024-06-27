import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTK1UvGzQN4OF41uJRgQfdEWzl0OJoA4Q",
  authDomain: "ecommrce-22.firebaseapp.com",
  projectId: "ecommrce-22",
  storageBucket: "ecommrce-22.appspot.com",
  messagingSenderId: "759412029465",
  appId: "1:759412029465:web:43ab9b63e86540388ad288",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
