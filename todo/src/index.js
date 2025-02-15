// 1. Default Data
const defaultCategories = [
    { name: "Design", tasks: 5, color: "bg-pink-500" },
    { name: "Learning", tasks: 3, color: "bg-blue-500" },
    { name: "Meeting", tasks: 1, color: "bg-yellow-500" }
];

let categories = [...defaultCategories];
let tasks = [
    { name: "Design Task 1", category: "Design", completed: 0, total: 1, color: "bg-pink-500", date: new Date().toISOString() },
    { name: "Learning Task 1", category: "Learning", completed: 0, total: 1, color: "bg-blue-500", date: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString() },
    { name: "Meeting Task 1", category: "Meeting", completed: 0, total: 1, color: "bg-yellow-500", date: new Date(new Date().setDate(new Date().getDate() - 7)).toISOString() }
];
let selectedCategory = null;

// 2. DOM Elements
const categoryContainer = document.getElementById("categories");
const taskContainer = document.getElementById("taskList");
const addTaskButton = document.getElementById("addTaskBtn");
const searchInput = document.getElementById("search");

// 3. Helper Functions
function showAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.className = "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg transition-opacity duration-300 opacity-100";
    alertBox.innerHTML = `<p class="text-center">${message}</p>`;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.style.opacity = "0";
        setTimeout(() => alertBox.remove(), 300);
    }, 2000);
}

// 4. Rendering Functions
function renderCategories() {
    categoryContainer.innerHTML = "";
    categories.forEach(category => {
        const div = document.createElement("div");
        div.className = `${category.color} p-4 rounded-xl text-center cursor-pointer`;
        div.innerHTML = `
            <p class="text-sm font-semibold">${category.name}</p>
            <p class="text-xs">• ${category.tasks} Task${category.tasks !== 1 ? 's' : ''}</p>
        `;
        div.addEventListener("click", () => selectCategory(category));
        categoryContainer.appendChild(div);
    });
}

function renderTasks() {
    taskContainer.innerHTML = "";
    tasks.forEach(task => {
        const div = document.createElement("div");
        div.className = "flex justify-between items-center p-2 bg-gray-100 rounded-lg";
        div.innerHTML = `
            <div class="flex items-center space-x-2">
                <div class="${task.color} w-3 h-3 rounded-full"></div>
                <p class="font-medium">${task.name} (${task.category})</p>
            </div>
            <p class="text-xs">${task.completed} Completed</p>
            <span class="px-2 py-1 text-sm rounded-full bg-gray-200">${task.total}</span>
        `;
        taskContainer.appendChild(div);
    });
    document.getElementById("totalTasks").textContent = `Total Tasks: ${tasks.length}`;
}

// 5. Category Selection
function selectCategory(category) {
    selectedCategory = category;
    showAlert(`${category.name} selected!`);
}

// 6. Adding Tasks
function addTask() {
    if (!selectedCategory) {
        showAlert("Please select a category first!");
        return;
    }

    const taskName = prompt("Enter task name:");
    if (taskName) {
        const newTask = { 
            name: taskName, 
            category: selectedCategory.name, 
            completed: 0, 
            total: 1, 
            color: selectedCategory.color,
            date: new Date().toISOString() // Add date property
        };
        tasks.push(newTask);

        const categoryIndex = categories.findIndex(cat => cat.name === selectedCategory.name);
        if (categoryIndex !== -1) {
            categories[categoryIndex].tasks += 1;
        }

        renderTasks();
        renderCategories();
        showAlert("Task added successfully!");
    }
}

// 7. Searching Tasks
function searchTasks() {
    const query = searchInput.value.toLowerCase();
    const filteredTasks = tasks.filter(task => 
        task.name.toLowerCase().includes(query) || 
        task.category.toLowerCase().includes(query)
    );

    renderFilteredTasks(filteredTasks);
}

function renderFilteredTasks(filteredTasks) {
    taskContainer.innerHTML = "";
    if (filteredTasks.length === 0) {
        taskContainer.innerHTML = `<p class="text-gray-500 text-center">No tasks found. 📋</p>`;
    } else {
        filteredTasks.forEach(task => {
            const div = document.createElement("div");
            div.className = "flex justify-between items-center p-2 bg-gray-100 rounded-lg";
            div.innerHTML = `
                <div class="flex items-center space-x-2">
                    <div class="${task.color} w-3 h-3 rounded-full"></div>
                    <p class="font-medium">${task.name} (${task.category})</p>
                </div>
                <p class="text-xs">${task.completed} Completed</p>
                <span class="px-2 py-1 text-sm rounded-full bg-gray-200">${task.total}</span>
            `;
            taskContainer.appendChild(div);
        });
    }
    document.getElementById("totalTasks").textContent = `Total Tasks: ${filteredTasks.length}`;
}

// 8. Event Listeners
addTaskButton.addEventListener("click", addTask);
searchInput.addEventListener("input", searchTasks);

// 9. Initial Setup
renderCategories();
renderTasks();