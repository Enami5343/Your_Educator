  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBxMVScUIQ_i35SB32kqOm2HPXnKDi33YM",
    authDomain: "geteducators-99098.firebaseapp.com",
    projectId: "geteducators-99098",
    storageBucket: "geteducators-99098.firebasestorage.app",
    messagingSenderId: "299395983063",
    appId: "1:299395983063:web:adcdaca7c0a1305ccdb292",
    measurementId: "G-00CBGB8BFR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
