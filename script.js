const landingPage = document.getElementById("landing-page");
const mainPage = document.getElementById("main-page");
const nameInput = document.getElementById("name-input");
const goToMainPageButton = document.getElementById("go-to-main-page");
const header = document.getElementById("header");
const todoList = document.getElementById("todo-list");
const newTodoInput = document.getElementById("new-todo-input");
const newTodoMonth = document.getElementById("new-todo-month");
const newTodoDate = document.getElementById("new-todo-date");
const newTodoTime = document.getElementById("new-todo-time");
const addTodoButton = document.getElementById("add-todo-button");
const removeTodoButton = document.getElementById("remove-todo-button");
const goToLandingPageButton = document.getElementById("go-to-landing-page");

let userName = "";

function showLandingPage() {
  landingPage.style.display = "block";
  mainPage.style.display = "none";
}

function showMainPage() {
  userName = nameInput.value;
  header.innerText = `Hello, ${userName}! Here's your to-do list:`;
  landingPage.style.display = "none";
  mainPage.style.display = "block";
}

function createNewTodoItem() {
  const newTodoItem = document.createElement("li");
  const newTodoText = document.createTextNode(newTodoInput.value);
  const newTodoDateText = document.createTextNode(newTodoDate.value);
  const newTodoTimeText = document.createTextNode(newTodoTime.value);
  newTodoItem.appendChild(newTodoText);
  newTodoItem.appendChild(document.createElement("br"));
  newTodoItem.appendChild(document.createTextNode(" "));
  newTodoItem.appendChild(newTodoDateText);
  newTodoItem.appendChild(document.createTextNode(" "));
  newTodoItem.appendChild(newTodoTimeText);
  todoList.appendChild(newTodoItem);
  newTodoInput.value = "";
  newTodoDate.value = "";
  newTodoTime.value = "";
  }
  
  function removeSelectedTodoItem() {
  const selectedTodoItems = document.querySelectorAll("li.selected");
  selectedTodoItems.forEach((item) => item.remove());
  }
  
  function selectTodoItem(event) {
  const selectedTodoItem = event.target;
  selectedTodoItem.classList.toggle("selected");
  }
  
  goToMainPageButton.addEventListener("click", showMainPage);
  goToLandingPageButton.addEventListener("click", showLandingPage);
  addTodoButton.addEventListener("click", createNewTodoItem);
  removeTodoButton.addEventListener("click", removeSelectedTodoItem);
  todoList.addEventListener("click", selectTodoItem);
