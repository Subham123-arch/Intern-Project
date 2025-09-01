import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD8dktvwaXT2ADk0hJHftEPAUTuUU6eixE",
  authDomain: "fir-authentication-9516c.firebaseapp.com",
  projectId: "fir-authentication-9516c",
  storageBucket: "fir-authentication-9516c.appspot.com",
  messagingSenderId: "816801448737",
  appId: "1:816801448737:web:74b8422c1a899082dd3460",
  measurementId: "G-MZBW755X1T"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
console.log("data getting received from getAuth funtion", auth)
export const googleProvider = new GoogleAuthProvider()
console.log("Firebase Auth initilized")