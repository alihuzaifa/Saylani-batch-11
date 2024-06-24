// var inputEl = document.getElementById("todo")
// var btn = document.getElementById("btn");
// var list = document.querySelector(".list");



// function renderTodos(array) {
//     list.innerHTML = ""
//     for (var index = 0; index < array.length; index++) {
//         var task = array[index].task;
//         list.innerHTML += `<div class="list-item">
//             <li>${task}</li>
//             <div>
//                 <button onclick="deleteTodo(${index})">Delete</button> <button>Edit</button>
//             </div>
//         </div>`
//     }
// }

// function deleteTodo(index) {
//     var todos = [];
//     var getTodos = localStorage.getItem('todos');
//     if (getTodos) {
//         var parseTodos = JSON.parse(getTodos);
//         todos = parseTodos
//     }
//     todos.splice(index, 1);
//     localStorage.setItem("todos", JSON.stringify(todos));
//     renderTodos(todos)
// }

// function addTask(e) {
//     e.preventDefault()
//     if (inputEl.value === "") {
//         alert("Please fill the todo")
//     } else {
//         var todos = [];

//         var getTodos = localStorage.getItem('todos');
//         if (getTodos) {
//             var parseTodos = JSON.parse(getTodos);
//             todos = parseTodos
//         }
//         var obj = {
//             task: inputEl.value,
//             id: new Date().getTime()
//         }
//         todos.push(obj)
//         localStorage.setItem("todos", JSON.stringify(todos))
//         inputEl.value = ""
//         renderTodos(todos)
//     }
// }
// btn.addEventListener("click", addTask)

// // var storage = [1,2,3,4,5,6,7];
// // storage = 1000;


// var todos = [];
// var getTodos = localStorage.getItem('todos');
// if (getTodos) {
//     var parseTodos = JSON.parse(getTodos);
//     todos = parseTodos
// }
// renderTodos(todos)


// var name = "Ali HUzaifa"


// console.log(`My Name is ` + name + name +
//     "                                 "
//     + name)
// console.log(`My Name is ${name} ${name}

//     ${name}                           ${name}`)

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


// Edit Function 
// task id and task name will pass to the function
// show the task in input value inputEl
// change the button name from add task to update task




var obj = {
    name: "Ali Huzaifa",
    gender: "Male",
    age: 21,
    degree: "TBD"
}


var allValues = []
for (var key in obj) {
    var value = obj[key]
    allValues.push(value)
}
console.log(allValues)


// var isGender = "genders" in obj
// console.log(isGender)