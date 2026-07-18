let groceries = JSON.parse(localStorage.getItem("grocery")) || [];

const form = document.getElementById("groceryForm");

const input = document.getElementById("groceryInput");

const list = document.getElementById("groceryList");

let editId = null;

// CREATE

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = input.value.trim();

  if (name === "") return;

  if (editId) {
    updateItem(editId, name);

    editId = null;
  } else {
    let item = {
      id: Date.now(),

      name: name,

      completed: false,
    };

    groceries.push(item);
  }

  saveData();

  render();

  input.value = "";
});

// READ

function render() {
  list.innerHTML = "";

  groceries.forEach((item) => {
    let li = document.createElement("li");

    li.innerHTML = `

<div>

<input 
type="checkbox"
${item.completed ? "checked" : ""}
onclick="completeItem(${item.id})"
>


<span class="${item.completed ? "completed" : ""}">

${item.name}

</span>

</div>



<div class="actions">


<button 
class="edit"
onclick="editItem(${item.id})">

Edit

</button>



<button
class="delete"
onclick="deleteItem(${item.id})">

Delete

</button>


</div>

`;

    list.appendChild(li);
  });
}

// UPDATE

function editItem(id) {
  let item = groceries.find((item) => item.id === id);

  input.value = item.name;

  editId = id;
}

function updateItem(id, name) {
  groceries = groceries.map((item) => {
    if (item.id === id) {
      return {
        ...item,

        name: name,
      };
    }

    return item;
  });
}

// DELETE

function deleteItem(id) {
  groceries = groceries.filter((item) => item.id !== id);

  saveData();

  render();
}

// COMPLETE

function completeItem(id) {
  groceries = groceries.map((item) => {
    if (item.id === id) {
      return {
        ...item,

        completed: !item.completed,
      };
    }

    return item;
  });

  saveData();

  render();
}

// LOCAL STORAGE

function saveData() {
  localStorage.setItem("grocery", JSON.stringify(groceries));
}

// initial load

render();
