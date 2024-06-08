// var buttonEl = document.getElementById('btn');
// var inputEl = document.getElementById('inputEl');
// var listEl = document.getElementById('list');

// buttonEl.addEventListener("click", function () {
//     var liElement = document.createElement("li");
//     liElement.setAttribute("class", "liElement")
//     liElement.innerHTML = inputEl.value;
//     listEl.appendChild(liElement)
//     inputEl.value = ""
// })



// var pElement = document.createElement("p");
// pElement.setAttribute("id", "unique")
// console.log(pElement)






// Factorial Number
// number 5

function factorial(number) {
    var answer = 1;
    for (var index = number; index > 0; index--) {
        answer = answer * index;
    }
    return answer
}
var userNo = +prompt("Enter a number")
var answer = factorial(userNo)
console.log(answer)