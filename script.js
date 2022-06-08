let list = document.getElementById("task-list");
let todoList;

function deleteTask(obj){
    obj.parentNode.remove();
    toLocal();
}
function insert() {
    let task = document.getElementById("input-task").value;
    let input = `<li class="list_item">
            <input type="checkbox" id="box" onchange="toggleTask(this)">
            <span class="task" id="text">${task}</span>
            <button class="delete-btn" onclick = "deleteTask(this)">x</button>
        </li>`;
    list.insertAdjacentHTML("beforeend", input);
    toLocal();
}
function toggleTask(element) {
    let span = element.parentElement.querySelector(".task");
    if (element.checked) {
        span.classList.add("checked");
        toLocal();
    } else {
        span.classList.remove("checked");
        toLocal();
    }
}



function toLocal() {
    todoList = list.innerHTML;
    localStorage.setItem("todoList", todoList);
}
if (localStorage.getItem("todoList")) {
    list.innerHTML = localStorage.getItem("todoList");
}