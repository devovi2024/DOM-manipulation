// Load data from local storage or use defaults
const defaultCategories = [
    { name: "Design", tasks: 5, color: "bg-pink-500" },
    { name: "Learning", tasks: 3, color: "bg-blue-500" },
    { name: "Meeting", tasks: 1, color: "bg-yellow-500" }
];

let categories = JSON.parse(localStorage.getItem("categories")) || [...defaultCategories];
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let selectedCategory = null;

const categoryContainer = document.getElementById("categories");
const taskContainer = document.getElementById("taskList");
const totalTasksElement = document.getElementById("totalTasks");
const searchInput = document.getElementById("search");
const filterDropdown = document.getElementById("filterDropdown");

function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("categories", JSON.stringify(categories));
}

function showAlert(message) {
    alert(message);
}

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

function renderTasks(filteredTasks = tasks) {
    taskContainer.innerHTML = "";
    if (filteredTasks.length === 0) {
        taskContainer.innerHTML = `<p class="text-gray-500 text-center">No tasks found. 📋</p>`;
        return;
    }
    
    filteredTasks.forEach(task => {
        const div = document.createElement("div");
        div.className = "flex justify-between items-center p-2 bg-gray-100 rounded-lg";
        div.innerHTML = `
            <div class="flex items-center space-x-2">
                <div class="${task.color} w-3 h-3 rounded-full"></div>
                <p class="font-medium">${task.name} (${task.category})</p>
            </div>
            <span class="px-2 py-1 text-sm rounded-full bg-gray-200">${task.total}</span>
        `;
        taskContainer.appendChild(div);
    });

    totalTasksElement.textContent = `Total Tasks: ${filteredTasks.length}`;
}

function selectCategory(category) {
    selectedCategory = category;
    showAlert(`${category.name} selected!`);
}

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
            total: 1, 
            color: selectedCategory.color,
            date: new Date().toISOString()
        };
        tasks.push(newTask);
        categories.find(cat => cat.name === selectedCategory.name).tasks++;
        saveToLocalStorage();
        renderTasks();
        renderCategories();
    }
}

function filterTasks() {
    const filterValue = filterDropdown.value;
    const now = new Date();
    let filteredTasks = tasks.filter(task => {
        const taskDate = new Date(task.date);
        switch (filterValue) {
            case "today":
                return taskDate.toDateString() === now.toDateString();
            case "yesterday":
                return taskDate.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString();
            case "last_week":
                return taskDate >= new Date(now.setDate(now.getDate() - 7));
            case "last_month":
                return taskDate.getMonth() === now.getMonth() - 1;
            case "last_year":
                return taskDate.getFullYear() === now.getFullYear() - 1;
            default:
                return true;
        }
    });
    renderTasks(filteredTasks);
}

searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    const filteredTasks = tasks.filter(task => 
        task.name.toLowerCase().includes(query) || 
        task.category.toLowerCase().includes(query)
    );
    renderTasks(filteredTasks);
});

document.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    renderTasks();
});
