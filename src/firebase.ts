import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const app = initializeApp({
  apiKey: "AIzaSyCukNpthghr9LjhdhYPDUo7ratt3h7-wDQ",
  authDomain: "react-ts-test-task.firebaseapp.com",
  projectId: "react-ts-test-task",
  storageBucket: "react-ts-test-task.appspot.com",
  messagingSenderId: "637672507165",
  appId: "1:637672507165:web:bb35a5c4a7d30f8a04c3f4"
});

export const db = getFirestore(app);
