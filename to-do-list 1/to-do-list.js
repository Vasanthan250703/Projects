document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task');
    const inputField = document.getElementById('to-do');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', function() {
        const taskText = inputField.value.trim();
        if (taskText !== '') {
            const newTask = document.createElement('li');
            newTask.textContent = taskText;
            taskList.appendChild(newTask);
            inputField.value = ''; 
        }
    });          
    taskList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        }
    });
});