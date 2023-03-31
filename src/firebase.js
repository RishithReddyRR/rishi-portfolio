import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyC_R_vpkGn5M2s329fw3U9HC4LMX4ItxWA",
  authDomain: "react-portfolio-rishi.firebaseapp.com",
  projectId: "react-portfolio-rishi",
  storageBucket: "react-portfolio-rishi.appspot.com",
  messagingSenderId: "538984838271",
  appId: "1:538984838271:web:9c1af4f8453a99f044fb4a"
};

export const app = initializeApp(firebaseConfig);
export const db=getFirestore()