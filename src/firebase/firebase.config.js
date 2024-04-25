// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE-APIKEY,
  authDomain: import.meta.env.VITE-AUTHDOMAIN,
  projectId: import.meta.env.VITE-PROJECTID,
  storageBucket: import.meta.env.VITE-STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE-MESSAGINGSENDERID,
  appId: import.meta.env.VITE-APPID,
  measurementId: import.meta.env.VITE-MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;