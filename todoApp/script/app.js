const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const addButton = document.getElementById("add-button");
const editButton = document.getElementById("edit-button");
const groupingLinks = document.querySelectorAll(".grouping__links");
const deleteButton = document.getElementById("delete-all-button");
const todoTableData = document.getElementById("table-todo-data");
const alertMassage = document.querySelector(".alert");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
const saveToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const generateId = () => {
  return Math.round(Math.random() * Math.random() * Math.pow(10, 12));
};
const showAlert = (text, type) => {
  alertMassage.innerHTML = "";
  const alert = document.createElement("p");
  alert.innerText = text;
  alert.classList.add("alert");
  alert.classList.add(`alert__${type}`);
  alertMassage.append(alert);

  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);
};
const deleteData = () => {
  // localStorage.clear();
  if (todos.length) {
    todos = [];
    saveToLocalStorage();
    displayTodos();
    showAlert("All todos deleted successfully", "success");
  } else {
    showAlert("no todos to clear", "error");
  }
};
const displayTodos = (data) => {
  const todoList = data || todos;
  todoTableData.innerHTML = "";
  if (!todoList.length) {
    todoTableData.innerHTML = `<tr><td colspan="4">No task found</td></tr>`;
  } else {
    todoList.forEach((todo) => {
      todoTableData.innerHTML += `
        <tr>
            <td>${todo.task}</td>
            <td>${todo.date || "No date"}</td>
            <td>${todo.completed ? "Completed" : "Pending"}</td>
            <td>
               <a href="#" class="table__button" onclick="editItemHandler(
                   ${todo.id}
               )">Edit</a>
               <a href="#" class="table__button" onclick="statusHandler(
                   ${todo.id}
                   )">${todo.completed ? "Undo" : "Do"}</a>
               <a href="#" class="table__button" onclick="deleteItemHandler(
                   ${todo.id}
                   )">Delete</a>
            </td>
        </tr>
    `;
    });
  }
};
const addHandler = () => {
  const task = taskInput.value;
  const date = dateInput.value;
  const todo = {
    id: generateId(),
    task: task,
    date: date,
    completed: false,
  };
  if (task) {
    todos.push(todo);
    saveToLocalStorage();
    displayTodos();
    taskInput.value = "";
    dateInput.value = "";
    console.log(todos);
    showAlert("todo added successfully", "success");
  } else {
    showAlert("please enter a task", "error");
  }
};
const deleteItemHandler = (id) => {
  todos = todos.filter((todo) => id !== todo.id);
  saveToLocalStorage();
  displayTodos();
  showAlert("todo deleted successfully", "success");
};
const statusHandler = (id) => {
  // todos = todos.map((todo) => {
  //   if (todo.id === id) {
  //     return {
  //       ...todo,
  //       completed: !todo.completed,
  //     };
  //   } else {
  //     return todo;
  //   }
  // });
  // professional code
  const todo = todos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  saveToLocalStorage();
  displayTodos();
  showAlert("todo status changed successfully", "success");
};
const editItemHandler = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  taskInput.value = todo.task;
  dateInput.value = todo.date;
  addButton.style.display = "none";
  editButton.style.display = "flex";
  editButton.dataset.id = id;
};
const editHandler = (event) => {
  const id = event.target.dataset.id;
  const todo = todos.find((todo) => todo.id === +id);
  todo.task = taskInput.value;
  todo.date = dateInput.value;
  taskInput.value = "";
  dateInput.value = "";
  addButton.style.display = "flex";
  editButton.style.display = "none";
  saveToLocalStorage();
  displayTodos();
  showAlert("Edited successfully", "success");
};
const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  let filteredTodos;
  switch (filter) {
    case "Pending":
      filteredTodos = todos.filter((todo) => todo.completed === false);
      break;
    case "Completed":
      filteredTodos = todos.filter((todo) => todo.completed === true);
      break;
    default:
      filteredTodos = todos;
      break;
  }
  displayTodos(filteredTodos);
};
addButton.addEventListener("click", addHandler);
window.addEventListener("load", () => displayTodos());
// اینجوری دیسپلی ارگومان دیتا رو به درستی میشناسه و ایونت بر نمیگردونه
deleteButton.addEventListener("click", deleteData);
editButton.addEventListener("click", editHandler);
groupingLinks.forEach((button) => {
  button.addEventListener("click", filterHandler);
});
