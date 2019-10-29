const form = document.querySelector("#form-task");
const inputTask = document.querySelector(".input-field");
const ul = document.querySelector(".todo-items");
const clearBtn = document.querySelector(".clear");

form.addEventListener("submit", addTask);
ul.addEventListener("click", deleteTask);
clearBtn.addEventListener("click", clearTasks);

function addTask(e) {
  e.preventDefault();

  if (inputTask.value === "") {
    alert("Add A New Task");
    return;
  } else {
    const task = inputTask.value.toUpperCase();
    const list = document.createElement("li");
    list.className = "todo-item";
    const link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = "<i class='fas fa-trash-alt'></i>";
    list.appendChild(document.createTextNode(task));
    list.appendChild(link);
    ul.appendChild(list);

    storeItemsLocalStorage(inputTask.value);

    inputTask.value = "";
  }
}

function deleteTask(e) {
  e.preventDefault();
  if (e.target.classList.contains("fas")) {
    e.target.parentElement.parentElement.remove();
  }
}

function clearTasks(e) {
  e.preventDefault();
  if (ul.innerHTML === "") {
    alert("No Task");
  } else {
    ul.innerHTML = "";
  }
}

function storeItemsLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
