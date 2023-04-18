// * Firebase Configuration object
import FIREBASE_CONFIG from "./firebase.config"
// * Firebase SDKs
import { initializeApp } from "firebase/app"
import {
	getFirestore,
	collection,
	addDoc,
	onSnapshot,
	deleteDoc,
	doc,
	query,
	orderBy,
	serverTimestamp,
} from "firebase/firestore"
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

// Create query for timestamp
const q = query(collectionRef, orderBy("timestamp", "asc"))

// Real-Time Collection Data Fetch
onSnapshot(q, snapshot => {
	clearList()
	const items = fetchItems(snapshot.docs)
	renderItems(items)
})

// Event Listeners
document.getElementById("input-form").addEventListener("submit", e => {
	e.preventDefault()

	const { target: form } = e

	addDoc(collectionRef, {
		item: form.item.value,
		timestamp: serverTimestamp(),
	}).catch(err => console.error(err.message))

	form.item.value = ""
})

document.getElementById("item-list").addEventListener("click", e => {
	e.preventDefault()

	const { target } = e

	if (target.tagName !== "LI") return

	deleteDoc(doc(db, "items", `${target.id}`)).catch(err =>
		console.error(err.message)
	)
})
