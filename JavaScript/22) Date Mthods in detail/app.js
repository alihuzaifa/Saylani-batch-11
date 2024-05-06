// var count = 0;
// function timer() {
//     console.log(count)
//     if (count === 5) {
//         clearInterval(timerId)
//     } else {
//         count++
//     }
// }
// var timerId = setInterval(timer, 1000)

// function call() {
//     alert("Function has been called")
//     clearTimeout(timerId)
// }
// var timerId = setTimeout(call, 1000);


// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var currentDate = new Date();
// var currentDay = currentDate.getDay()
// var currentMonth = currentDate.getMonth()
// var date = currentDate.getDate()
// var year = currentDate.getFullYear()
// var hours = currentDate.getHours()
// var minutes = currentDate.getMinutes()
// var seconds = currentDate.getSeconds()
// var milliSeconds = currentDate.getMilliseconds()
// var time = currentDate.getTime()
// console.log(time)














var currentDate = new Date();
var customizedDate = new Date("June 29, 2035");
var dateDifference = customizedDate.getTime() - currentDate.getTime();
var timeDifference = dateDifference / 1000 / 60 / 60 / 24;
console.log(Math.floor(timeDifference))