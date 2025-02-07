
document.addEventListener("DOMContentLoaded", function () {
    generateCalendar();
    const monthSelect = document.getElementById("month");
    for (let i = 0; i < 12; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = new Date(2024, i).toLocaleString('default', { month: 'long' });
        monthSelect.appendChild(option);
    }
});
function generateCalendar() {
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const calendarBody = document.getElementById("calendar-body");
    calendarBody.innerHTML = "";
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let row = document.createElement("tr");
    for (let i = 0; i < firstDay; i++) {
        let cell = document.createElement("td");
        row.appendChild(cell);
    }
    for (let day = 1; day <= daysInMonth; day++) {
        let cell = document.createElement("td");
        cell.textContent = day;
        cell.setAttribute("data-day", day);
        cell.addEventListener("click", () => highlightDay(day));
        row.appendChild(cell);
        if ((firstDay + day) % 7 === 0 || day === daysInMonth) {
            calendarBody.appendChild(row);
            row = document.createElement("tr");
        }
    }
}
function addEvent() {
    const day = parseInt(document.getElementById("event-day").value);
    const eventText = document.getElementById("event-text").value;
    if (!day || !eventText) return alert("Please enter both day and event name!");
    let cells = document.querySelectorAll("td[data-day]");
    cells.forEach(cell => {
        if (parseInt(cell.getAttribute("data-day")) === day) {
            cell.classList.add("event");
            cell.textContent = `${day} 📅 ${eventText}`;
        }
    });
    document.getElementById("event-day").value = "";
    document.getElementById("event-text").value = "";
}
function highlightDay(day) {
    let cells = document.querySelectorAll("td[data-day]");
    cells.forEach(cell => {
        cell.classList.remove("selected");
        if (parseInt(cell.getAttribute("data-day")) === day) {
            cell.classList.add("selected");
        }
    });
}
