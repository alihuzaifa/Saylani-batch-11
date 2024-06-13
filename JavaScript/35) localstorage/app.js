var inputEl = document.getElementById("todo")
var btn = document.getElementById("btn");
var list = document.querySelector(".list")
function renderTodos(array) {
    list.innerHTML = ""
    for (var index = 0; index < array.length; index++) {
        var task = array[index].task
        list.innerHTML += `<div class="list-item">
            <li>${task}</li>
            <div>
                <button>Delete</button> <button>Edit</button>
            </div>
        </div>`
    }
}

function addTask(e) {
    e.preventDefault()
    if (inputEl.value === "") {
        alert("Please fill the todo")
    } else {
        var todos = [];

        var getTodos = localStorage.getItem('todos');
        if (getTodos) {
            var parseTodos = JSON.parse(getTodos);
            todos = parseTodos
        }
        var obj = {
            task: inputEl.value,
            id: new Date().getTime()
        }
        todos.push(obj)
        localStorage.setItem("todos", JSON.stringify(todos))
        inputEl.value = ""
        renderTodos(todos)
    }
}
btn.addEventListener("click", addTask)



// (data)
// var numbers = []
// numbers = [5, 6, 7, 8, 9, 10]


// var count = 0;
// var numbers = [1, 2, 3, 4, 5];
// for (var index = 0; index < numbers.length; index++) {
//     // count += count + numbers[index]
//     count += numbers[index]
// }
// console.log(count)