// 1. Filter Tasks Based on Time Range
function filterTasks() {
    const filterValue = document.getElementById("filterDropdown").value;
    const now = new Date();
    let filteredTasks = [];

    filteredTasks = tasks.filter(task => {
        const taskDate = new Date(task.date);

        switch (filterValue) {
            case "today":
                return isSameDay(taskDate, now);
            case "yesterday":
                const yesterday = new Date(now);
                yesterday.setDate(now.getDate() - 1);
                return isSameDay(taskDate, yesterday);
            case "last_week":
                return isWithinLastDays(taskDate, 7);
            case "last_month":
                return isWithinLastDays(taskDate, 30);
            case "last_year":
                return isWithinLastDays(taskDate, 365);
            default:
                return true;
        }
    });

    renderFilteredTasks(filteredTasks);
}

// 2. Helper Functions
function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
}

function isWithinLastDays(date, days) {
    const now = new Date();
    const pastDate = new Date();
    pastDate.setDate(now.getDate() - days);
    return date >= pastDate && date <= now;
}

// 3. Event Listener
const filterDropdown = document.getElementById("filterDropdown");
filterDropdown.addEventListener("change", filterTasks);

// Initial Filtering
filterTasks();