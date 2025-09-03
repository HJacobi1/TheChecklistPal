const list = document.getElementById("checklist");

const input = document.getElementById("new-item-input");

document.getElementById("add-item-button").addEventListener("click", () => {
  addItemToList(input.value);
  input.value = "";
});

function addItemToList(item) {
  if (item.trim() === "") return;

  const listItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `item-${Date.now()}`;

  const label = document.createElement("label");
  label.textContent = item;
  label.htmlFor = checkbox.id;

  listItem.appendChild(checkbox);
  listItem.appendChild(label);

  list.appendChild(listItem);
}
