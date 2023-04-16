// * Firebase Configuration object
import FIREBASE_CONFIG from "./firebase.config"
// * Firebase SDKs
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, addDoc, onSnapshot } from "firebase/firestore"
// * Utilities
import fetchItems from "./fetchItems"
import renderItems from "./renderItems"
import clearList from "./clearList"

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG)

// Get DataBase
const db = getFirestore(app)

// Create Collection Reference
const collectionRef = collection(db, "items")

// Real-Time Collection Data Fetch
onSnapshot(collectionRef, (snapshot) => {
  clearList()
  const items = fetchItems(snapshot.docs)
  renderItems(items)
})