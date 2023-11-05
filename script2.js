document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('task-list');
    const addTaskButton = document.getElementById('add-task');
    let taskId = 1;

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value;
        const selectedWhen = document.getElementById('when').value;

        if (taskText.trim() !== '') {
            const date = new Date();
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="task-info">
                    <input type="checkbox" class="complete-checkbox">
                    <span class="task-number">${taskId++}.</span>
                    <span>${taskText}</span>
                    <span class="task-date">(${date.toLocaleString()})</span>
                    <span class="task-when">[${selectedWhen}]</span>
                </span>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(listItem);

            
            taskInput.value = '';
            
            
            const deleteButton = listItem.querySelector('.delete-button');
            deleteButton.addEventListener('click', function() {
                listItem.remove();
            });
        }
    });
});