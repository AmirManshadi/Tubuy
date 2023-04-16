export default function renderItems(items) {
	const list = items.map(data => {
		return createListItem(data)
	})
	list.forEach(element => {
		document.getElementById("item-list").append(element)
	})
}

function createListItem(data) {
	const li = document.createElement("li")
	li.textContent = data.itemValue
	li.id = data.itemId
	li.classList.add("item")
	return li
}
