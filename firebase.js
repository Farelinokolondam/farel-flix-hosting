// FAREL FLIX - Firebase Config FIXED
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDwKg7g0JzwVkCQ6pskhtEg8dZrs6hAasU",
  authDomain: "farel-flix-tambala.firebaseapp.com",
  projectId: "farel-flix-tambala",
  storageBucket: "farel-flix-tambala.firebasestorage.app",
  messagingSenderId: "265996924707",
  appId: "1:265996924707:web:e824c8cd3a195a9f8b3e96",
  measurementId: "G-8LJKB2W9WB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export default app;