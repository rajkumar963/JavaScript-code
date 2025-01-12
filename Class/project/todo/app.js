const taskInput = document.querySelector('#taskInput');
const addTaskButton = document.querySelector('#addTaskButton');
const taskList = document.querySelector('#tasklist');

        addTaskButton.addEventListener('click', () => {
            const taskText = taskInput.value.trim();
            if (taskText === '') {
                alert("Please enter a task");
                return;
            }

            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value = '';
        });