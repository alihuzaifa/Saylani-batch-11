// var btn = document.getElementById("btn");

// function greet() {
//     alert("Hello World")
// }

// // btn.addEventListener("click", greet)
// btn.addEventListener("click", function () {
//     alert("Hello World")
// })


// var list = document.getElementById("list");
// var btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//     list.innerHTML = `<li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, fugiat!</li>
//    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, fugiat!</li>
//    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, fugiat!</li>`
// })

// var number = 5;
// number = 100;
// console.log(number)



// var heading = document.getElementById("heading");
// var btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//     heading.className = heading.className + " bg"
// })

// var userYear = +prompt("Enter your birth year?");
// var birthDate = new Date();
// birthDate.setFullYear(userYear)
// var today = new Date();

// var convertBirthDateInMilliSecond = birthDate.getTime()
// var convertTodayInMilliSecond = today.getTime()
// var hours = convertTodayInMilliSecond - convertBirthDateInMilliSecond;

// console.log(hours)



// var heading = document.getElementById("heading");
// var btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//     heading.className = heading.className + " d-flex justify-content-center align-items-center"
//     // heading.style.border = "0px"
//     // heading.style.backgroundColor = "red"
// })
// pElement[1].style.backgroundColor = "red"
// pElement[1].style.color = "white"

// var pElements = document.getElementsByTagName("p");
// var uniqueElement;
// for (var index = 0; index < pElements.length; index++) {
//     var element = pElements[index];
//     if (element.id === "unique") {
//         uniqueElement = element
//         break;
//     }
// }
// console.log(uniqueElement)



// var e = document.getElementById("unique");
// var paragraphs = e.getElementsByTagName("p");
// console.log(paragraphs)



// var userYear = +prompt("Enter your birth year?");
// var birthDate = new Date();
// birthDate.setFullYear(userYear)
// var today = new Date();
// var birthMilliSecond = birthDate.getTime()
// var todayMilliSecond = today.getTime()
// var hours = todayMilliSecond - birthMilliSecond;
// console.log(hours)






var userYear = +prompt("Enter your birth year?");
var now = new Date().getTime();
var birth = new Date().setFullYear(userYear)
var birthHours = (now - birth) / 1000 / 60 / 60;
console.log("You Have Spend " + birthHours + " hours in this world")