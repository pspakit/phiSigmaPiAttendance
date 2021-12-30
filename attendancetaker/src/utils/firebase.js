// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set  } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp_3hdrUprDdmoI9O3z1i6OwAJK_JArYg",
  authDomain: "phisigmapiattendance-6b5cd.firebaseapp.com",
  projectId: "phisigmapiattendance-6b5cd",
  storageBucket: "phisigmapiattendance-6b5cd.appspot.com",
  messagingSenderId: "254916396235",
  appId: "1:254916396235:web:6108e74f814a8de4a6c74e",
  measurementId: "G-QVR4D71SRK",
  databaseURL: "https://phisigmapiattendance-6b5cd-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

