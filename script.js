function toggleBackgroundAnimation() {
  document.body.classList.toggle('animate-bg');
}

function addTask() {
  var taskName = document.getElementById("task-name").value;
  var deadline = document.getElementById("task-deadline").value;
  var time = document.getElementById("task-time").value;

  if (taskName.trim() === "" || deadline.trim() === "" || time.trim() === "") {
      alert("Please enter the task name, deadline, and time.");
      return;
  }

  var priority = document.getElementById("task-priority").value;
  var labels = document.getElementById("task-labels").value.split(",");

  var taskItem = document.createElement("li");
  taskItem.className = "task";
  taskItem.innerHTML = `
    <label>Task: ${taskName}</label><br>
    <label>Deadline: ${deadline}</label><br>
    <label>Time: ${time}</label><br> <!-- Display time -->
    <label>Priority: ${priority}</label><br>
    <label>Labels: ${labels.join(", ")}</label><br>
    <div class="button-group">
      <button class="delete" onclick="deleteTask(this)">Delete</button>
      <button class="complete" onclick="completeTask(this)">Mark As Completed</button>
    </div>
  `;

  document.getElementById("task-list").appendChild(taskItem);
}

document.getElementById("task-priority").addEventListener("input", function() {
  var priorityTextbox = document.getElementById("priority-textbox");
  priorityTextbox.value = this.value;
});


const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
  e.preventDefault;
  button.classList.add("animate");
  setTimeout(() => {
      button.classList.remove("animate");
  }, 600);
});

function deleteTask(button) {
  var taskItem = button.closest(".task");
  taskItem.remove();
}

function completeTask(button) {
  var taskItem = button.closest(".task");
  taskItem.classList.add("completed");
  var buttonGroup = taskItem.querySelector(".button-group");
  buttonGroup.innerHTML = '<p class="completed-text">COMPLETED!!! <span class="tick-mark">&#10004;</span></p>';
}
