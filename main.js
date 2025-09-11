let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

window.addEventListener("load", () => {
  tasks.forEach((task) => renderItem(task));
});

const list = document.getElementById("checklist");

const input = document.getElementById("new-item-input");

document.getElementById("add-item-button").addEventListener("click", addItem);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addItem();
});

function addItem(){
  let task = { id: `item-${Date.now()}`, text: input.value, completed: false };

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderItem(task);
  input.value = "";
}

function renderItem(task) {
  if (task.text.trim() === "") return;

  const listItem = document.createElement("li");
  listItem.id = task.id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `checkbox-${task.id}`;

  if (task.completed) {
    checkbox.checked = true;
  }

  const label = document.createElement("label");
  label.textContent = task.text;
  label.htmlFor = checkbox.id;

  const button = document.createElement("button");
  button.textContent = "Delete";

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(button);

  listItem.addEventListener("click", (li) => {    
    if (li.target === button) {
      tasks = tasks.filter((t) => t.id !== task.id);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      listItem.remove();
    }
    if (li.target !== checkbox && li.target.id == listItem.id)
      checkbox.checked = !checkbox.checked;
  });


  list.appendChild(listItem);
}
