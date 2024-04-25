// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC023qTNBm6FUoRhl6agsy-Kw0XhLska44",
  authDomain: "assignment-ten-3e753.firebaseapp.com",
  projectId: "assignment-ten-3e753",
  storageBucket: "assignment-ten-3e753.appspot.com",
  messagingSenderId: "143592334116",
  appId: "1:143592334116:web:869e079eeef4b8f4ca89b1",
  measurementId: "G-D932CS6X9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;