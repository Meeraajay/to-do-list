document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    // --- 1. ADD TASK FUNCTIONALITY ---
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            taskInput.style.borderColor = '#ff4757';
            setTimeout(() => taskInput.style.borderColor = '#e0e0e0', 1000);
            return;
        }

        createTaskElement(taskText, false);
        taskInput.value = '';
        taskInput.focus();
    }

    addBtn.addEventListener('click', addTask);

    // Allow pressing "Enter" to add task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    // --- 2. CREATE TASK ELEMENT (Dynamic Creation) ---
    function createTaskElement(text, isCompleted) {
        const li = document.createElement('li');
        
        // Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = isCompleted;

        // Text Span
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = text;
        if (isCompleted) span.classList.add('completed');

        // Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&times;'; 

        // --- DELETE FUNCTIONALITY ---
        deleteBtn.addEventListener('click', () => {
            li.style.transform = 'translateX(20px)';
            li.style.opacity = '0';
            setTimeout(() => li.remove(), 200);
        });

        // --- CHECKBOX TOGGLE FUNCTIONALITY ---
        checkbox.addEventListener('change', () => {
            span.classList.toggle('completed', checkbox.checked);
        });

        // Assemble
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    // --- 3. BIND EVENTS TO EXISTING (Hardcoded) TASKS ---
    document.querySelectorAll('#taskList > li').forEach(li => {
        const checkbox = li.querySelector('.task-checkbox');
        const deleteBtn = li.querySelector('.delete-btn');
        const span = li.querySelector('.task-text');

        deleteBtn.addEventListener('click', () => {
            li.style.transform = 'translateX(20px)';
            li.style.opacity = '0';
            setTimeout(() => li.remove(), 200);
        });

        checkbox.addEventListener('change', () => {
            span.classList.toggle('completed', checkbox.checked);
        });
    });

});