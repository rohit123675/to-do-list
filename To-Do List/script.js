// Function to create and add a new task
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    // Don't add empty tasks
    if (!taskText) return;

    // Create the task element (li)
    const li = createTaskElement(taskText);

    // Append the new task to the task list
    const taskList = document.getElementById('task-list');
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Function to create a task list item (li)
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add a delete button to each task
    const deleteButton = createDeleteButton();
    li.appendChild(deleteButton);

    return li;
}

// Function to create a delete button for each task
function createDeleteButton() {
    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.classList.add('delete-btn');
    
    // Add event listener to delete the task when clicked
    button.addEventListener('click', function () {
        button.parentElement.remove();
    });

    return button;
}

// Optional: Add event listener for pressing Enter in the input field
document.getElementById('new-task').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
