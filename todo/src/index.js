document.addEventListener("DOMContentLoaded", () => {


    const categories = [
        {name: "Design", task: 5, color:"bg-pink-500"},
        {name: "Code Think", task: 5, color:"Meeting"},
        {name: "Code Think", task: 5, color:"Meeting"},
    ];

    const categoryContainer = document.getElementById('categories')

    function renderCategories(){
        categoryContainer.innerHTML = "";
        categories.forEach(category => {
        const li = document.createElement('div');
        li.textContent = category.name;
        li.className = "p-3 border rounded shadow-md"
        categoryContainer.appendChild(li)

        })
    }
    renderCategories()
})