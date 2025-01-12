class TodoApp {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.currentFilter = 'all';
        this.initializeElements();
        this.addEventListeners();
        this.render();
    }

    initializeElements() {
        this.todoInput = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.todoList = document.getElementById('todoList');
        this.filterBtns = document.querySelectorAll('.filter-btn');
    }

    addEventListeners() {
        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });

        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.currentFilter = btn.dataset.filter;
                this.filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.render();
            });
        });
    }

    addTodo() {
        const text = this.todoInput.value.trim();
        if (text) {
            this.todos.push({
                id: Date.now(),
                text,
                completed: false
            });
            this.todoInput.value = '';
            this.saveAndRender();
        }
    }

    toggleTodo(id) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        );
        this.saveAndRender();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveAndRender();
    }

    filterTodos() {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(todo => !todo.completed);
            case 'completed':
                return this.todos.filter(todo => todo.completed);
            default:
                return this.todos;
        }
    }

    render() {
        const filteredTodos = this.filterTodos();
        this.todoList.innerHTML = filteredTodos.map(todo => `
            <li class="todo-item ${todo.completed ? 'completed' : ''}">
                <input type="checkbox" 
                       class="todo-checkbox" 
                       ${todo.completed ? 'checked' : ''}
                       onchange="todoApp.toggleTodo(${todo.id})">
                <span class="todo-text">${todo.text}</span>
                <button class="delete-btn" onclick="todoApp.deleteTodo(${todo.id})">Delete</button>
            </li>
        `).join('');
    }

    saveAndRender() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
        this.render();
    }
}

const todoApp = new TodoApp();