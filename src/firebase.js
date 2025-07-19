import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs7AmawmHNMXM1vID7hh9YC91YYJwqrpo",
  authDomain: "hotel-auth-abc9d.firebaseapp.com",
  projectId: "hotel-auth-abc9d",
  storageBucket: "hotel-auth-abc9d.appspot.com",
  messagingSenderId: "872424994040",
  appId: "1:872424994040:web:6cb14eefe2676282c6f70d",
  measurementId: "G-G3KW2BHMY1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);