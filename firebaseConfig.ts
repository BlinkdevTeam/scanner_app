import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, update } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC1id1bulVq3lLUJhkzaNBKH363gp4WqEc",
  authDomain: "philricescannerapp.firebaseapp.com",
  databaseURL: "https://philricescannerapp-default-rtdb.firebaseio.com",
  projectId: "philricescannerapp",
  storageBucket: "philricescannerapp.firebasestorage.app",
  messagingSenderId: "57763195941",
  appId: "1:57763195941:web:e1c8e98a6905b53fc2e3cc",
  measurementId: "G-1S23JZ7X56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database, ref, get, update };
