"use strict";

const deleteTask = (taskId) => {
    const tasks = Array.from(document.getElementsByClassName("task"));
    const taskFound = tasks.find( (task) => task.id == taskId);
    taskFound.remove();
}

const addTask = (event) => {
    event.preventDefault();
    const taskNameInput = document.getElementById("task-name");
    const taskName = taskNameInput.value;

    const taskDescriptionInput = document.getElementById("task-description");
    const taskDescription = taskDescriptionInput.value;
    const taskId = Math.random(10).toString();

    const listElement = document.createElement("li");
    listElement.setAttribute("class", "task");
    listElement.setAttribute("id", taskId);

    const pElement = document.createElement("p");
    pElement.innerText = taskName;
    listElement.appendChild(pElement);

    const buttonElement = document.createElement("button");
    buttonElement.innerText = 'Delete';
    buttonElement.onclick = function() {
        deleteTask(taskId);
    }
    listElement.appendChild(buttonElement);

    const taskElements = document.getElementById("tasks");
    taskElements.appendChild(listElement);
}

document.getElementById("add-task").addEventListener("click", addTask)