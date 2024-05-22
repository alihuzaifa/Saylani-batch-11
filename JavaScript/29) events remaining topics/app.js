// // var user = document.getElementById('user-name');
// var btn = document.getElementById('btn');


// // function search1() {
// //     console.log("Function 1")

// // }
























// btn.addEventListener("click", function () {
//     console.log("Hello World 1")
// })
// btn.addEventListener("click", function () {
//     console.log("Hello World 2")
// })
// btn.addEventListener("click", function () {
//     console.log("Hello World 3")
// })

// function search2() {
//     console.log("Function 2")

// }







var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

// ali 58
// Sami 73



// Ali 90
// Sami 89
// Sami 73

for (let index = 0; index < students.length; index++) {
    var element = students[index]
    var otherElement = scores[scores.length - index - 1]
    console.log(element, otherElement)
}














