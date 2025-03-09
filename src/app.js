"use strict";

const deleteTask = (taskId) => {
    
    // get <li> element to be deleted
    // delete <li> element
    const tasks = new Array.fill(document.getElementsByClassName("task"));
    tasks.find( (task) => {
        console.log(task);
        return true;
    })
}

//document.addEventListener("click", deleteTask)
//document.removeEventListener("click", deleteTask)