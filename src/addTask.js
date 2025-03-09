"use strict";

const addTask = () => {
    const taskNameInput = document.getElementById("task-name");
    const taskName = taskNameInput.innerText;

    const taskDescriptionInput = document.getElementById("task-description");
    const taskDescription = taskDescriptionInput.innerText;
    const taskId = Math.random(10).toString();

    const listElement = document.createElement("li");
    listElement.setAttribute("class", "task");
    listElement.setAttribute("id", taskId);

    const pElement = document.createElement("p");
    pElement.innerText = taskName;
    listElement.appendChild(pElement);

    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("onclick", deleteTask(taskId));
    listElement.appendChild(buttonElement);

    const taskElements = document.getElementById("tasks");
    taskElements.appendChild(listElement);
}

document.getElementById("add-task").addEventListener("click", addTask)