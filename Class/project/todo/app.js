const taskInput = document.querySelector('#taskInput');
const addTaskButton = document.querySelector('#addTaskButton');
const taskList = document.querySelector('#tasklist');
      
loadtasks();    

        addTaskButton.addEventListener('click', () => {
            const task = taskInput.value.trim();
            if (task) {
                creatTaskElement(task);
                taskInput.value = '';
                savetask();
            }else{
                alert('Please enter a task');
            }    
        });

        addTaskButton.addEventListener('click',addTaskButton);

        function creatTaskElement(task){
            const taskElement = document.createElement('li');
            taskElement.textContent = task;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className='deleteTask';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(taskElement);
                savetask();
            });
            taskElement.appendChild(deleteButton);

            taskList.appendChild(taskElement);
        }

        function savetask(){
            let tasks=[];
            taskList.querySelectorAll('li').forEach(function(item){
                tasks.push(item.textContent.trim());
            });
            localStorage.setItem('tasks',JSON.stringify(tasks));
        }

        function loadtasks(){
            const tasks=JSON.parse(localStorage.getItem('tasks'))||[];
            tasks.forEach(creatTaskElement);
        }