// document.addEventListener("DOMContentLoaded",()=>{
//     const addTaskButton = document.getElementById("addtask");
//     const taskInput = document.getElementById("textInput");
//     const taskList = document.getElementById("tasklist");

//    addTaskButton.addEventListener("click",addTask)


//     function addTask(){
//     const taskText=taskInput.value.trim();
    

//     if(taskText===''){
//         alert("Please enter a task");

//         return;
//     }

//     const li = document.createElement("li");
//     li.textContent=taskText;

//     const deleteButton = document.createElement("button");
//     deleteButton.textContent="Delete";
    
//     deleteButton.addEventListener("click",()=>{
//        taskList.removeChild(li);
//     })

//     li.addEventListener("click",()=>{
//         li.classList.toggle("completed");
//     })

//    li.appendChild(deleteButton);
//    taskList.appendChild(li)
    
//     taskInput.value=" ";
// }
// })

document.addEventListener("DOMContentLoaded", () => {
    const addTaskButton = document.getElementById("addtask");
    const taskInput = document.getElementById("textinput"); // corrected ID
    const taskList = document.getElementById("tasklist");

    addTaskButton.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert("Please enter a task");
            return;
        }

        const task = document.createElement("li");
        task.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.style.backgroundColor = "red";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(task);
        });

        task.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        task.appendChild(deleteButton);
        taskList.appendChild(task); 
        taskInput.value = " "; 
    }
});