// var userAge = +prompt("Enter your age");
// if (userAge > 19) {
//     for (let index = 0; index < 3; index++) {
//         console.log("Loop Iteration " + index)
//     }
// }
// var count = 10;
// while (count < 10) {
//     console.log("Hello In The Loop " + count)
//     count++
// }



var userNum = +prompt("Enter a number");
var i = 0;
while (i <= userNum) {
    if (i % 2 === 0) {
        console.log("Even Number " + i)
    }
    i++
}