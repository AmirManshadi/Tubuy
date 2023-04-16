// * Firebase Configuration object
import FIREBASE_CONFIG from "./firebase.config"
// * Firebase SDKs
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore"

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG)

// Get DataBase
const db = getFirestore(app)

// Create Collection Reference
const collectionRef = collection(db, "items")

// Real-Time Collection Data Fetch
// todo: create a subscription (real-time database listner)
