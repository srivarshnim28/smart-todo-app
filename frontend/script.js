function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <button onclick="completeTask(this)">✔</button>
        <button onclick="deleteTask(this)">❌</button>
    `;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}

function completeTask(button) {
    button.parentElement.style.textDecoration = "line-through";
    alert("Task Completed ✅");
}
