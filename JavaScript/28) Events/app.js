// alert("Hello World")
// var el = document.getElementById("special")

// function greet() {
//     alert("Hello")
// }


var userQuery = prompt("Enter your question");
var count = 0;

while (userQuery === "Counting" && count < 11) {
    console.log(count)
    count++
}
if (userQuery === "Reverse Counting") {
    count = 10
}
while (userQuery === "Reverse Counting" && count > 0) {
    console.log(count)
    count--
}
while (userQuery === "Even" && count <= 20) {
    console.log(count)
    count = count + 2
}
while (userQuery === "Odd" && count < 20) {
    console.log(count + 1)
    count = count + 2
}
while (userQuery === "Series" && count <= 20) {
    console.log(count + " k")
    count = count + 2
}