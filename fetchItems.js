export default function fetchItems(docs) {
	const items = docs.map(doc => {
		return {
			itemId: doc.id,
			itemValue: doc.data().item,
		}
	})

	return items
}
