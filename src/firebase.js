import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCh3ZvdGAd0TV4SQRhD-l5nPNEUpP8Ebzc",
  authDomain: "marine-biodiversity.firebaseapp.com",
  projectId: "marine-biodiversity",
  storageBucket: "marine-biodiversity.firebasestorage.app",
  messagingSenderId: "860037516705",
  appId: "1:860037516705:web:e806c54ae15b563f9dcfe0",
  measurementId: "G-PPYF4HH1TP",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
