/**
 * Todo List Application
 * This application manages tasks with functionality to add, complete, and delete tasks
 */

// Get DOM elements for the todo list interface
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllTasksBtn = document.getElementById("clearAllTasksBtn");

// Array to store all task objects
let tasks = [];


/**
 * Adds a new task to the tasks array
 * Validates input, creates task object, and updates the display
 */
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText });
        taskInput.value = "";
        displayTasks();
    }
}


/**
 * Renders all tasks in the DOM with checkboxes
 * Creates list items with completion status for each task
 */
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}


/**
 * Toggles the completion status of a task
 * @param {number} index - The index of the task to toggle
 */
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}


/**
 * Removes all completed tasks from the tasks array
 * Filters out tasks marked as completed
 */
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}


/**
 * Removes all tasks from the tasks array
 * Clears the entire todo list at once
 */
function clearAllTasks() {
    tasks = [];
    displayTasks();
}


// Attach event listeners to buttons
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllTasksBtn.addEventListener("click", clearAllTasks);

// Initialize the display with empty todo list
displayTasks();
