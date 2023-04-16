// * Firebase Configuration object
import FIREBASE_CONFIG from "./firebase.config";
// * Firebase SDKs 
import { initializeApp } from "firebase/app";

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);