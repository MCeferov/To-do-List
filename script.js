"use strict";

const addBtn = document.getElementById("add");
const taskList = document.querySelector(".taskList ul");
const taskListContainer = document.querySelector(".taskList");
const addInput = document.getElementById("input");

let todos=[];


addBtn.addEventListener("click", (e) =>{
e.preventDefault();

const taskLists = input.value.trim();

if (!taskLists) return;

todos.push(taskLists);
console.log(todos)
updateTaskLists()
addInput.value = "";

localStorage.setItem("todos", JSON.stringify(todos));


addInput.focus();
})

const updateTaskLists = () =>{
    taskList.innerHTML = "";

    taskListContainer.style.display = todos.length  ? "block" : "none "

    todos.forEach((todo) => {
        const html = `<li>
        <span>${todo}</span>
        <button class="btn delete">Delete Task</button>
      </li>`;

      taskList.innerHTML += html;
    })


    const deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach((deleteBtn, index) => {
    deleteBtn.addEventListener("click", () => {
      removeTodo(index);
    });
  });
};

const removeTodo = (index) => {
    todos.splice(index, 1);
  
    localStorage.setItem("todos", JSON.stringify(todos));


    updateTaskLists();
  };


  const load = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(storedTodos);
  
    if (storedTodos) {
      todos = storedTodos;
    }
  
    updateTaskLists();
  };
  
  load();
