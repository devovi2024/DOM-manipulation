document.addEventListener("DOMContentLoaded", () => {


    const categories = [
        {name: "Design", task: 5, color:"bg-pink-500"},
        {name: "Code Think", task: 5, color:"Meeting"},
        {name: "Code Think", task: 5, color:"Meeting"},
    ];

    const tasks = [];
    let selectedCategory = null;

    const categoryContainer = document.getElementById('categories');
    const taskContainer = document.getElementById("taskList");
    const addTaskButton = document.getElementById("assTaskBtn");


    function renderCategories() {
        categoryContainer.innerHTML = "";
        categories.forEach(category => {
            const div = document.createElement("div");
            div.className = `${categories.color} p-4 rounded-xl text-center cursor-pointer`;
            div.innerHTML = `
                <p class="text-sm font-semibold">${category.name}</p>
            `
            categoryContainer.appendChild(div)
        })
    }
    renderCategories()
})