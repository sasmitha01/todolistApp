document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button>Delete</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";

        li.querySelector("button").addEventListener("click", function () {
            taskList.removeChild(li);
        });
    });
});
