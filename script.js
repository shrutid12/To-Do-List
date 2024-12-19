const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add a new task
function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something");
    } else {
        // Create a new list item
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Create a delete button
        const span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for ×
        li.appendChild(span);

        // Append the task to the list
        listContainer.appendChild(li);

        // Save data to localStorage
        saveData();
    }

    // Clear the input box
    inputBox.value = "";
}

// Handle click events for marking tasks or deleting them
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save the updated state
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save the updated state
    }
});

// Save data to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load tasks from localStorage
function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

// Show saved tasks on page load
showTask();
