// for (var index = 0; index < 5; index++) {
//     var element = array[index];

// }


// for (var index = 0; index <  array.length; index++) {
//     var element = array[index];

// }


// var index = 0;
// while (index < superHeroes.length) {
//     console.log("Super Heroes ", superHeroes[index]);
//     index++
// }


// var index = 0;
// do {
//     console.log(index)
//     index++
// } while (index > 5);

// var numbers = [10, 220, 32, 321, 4, 43];
// var result = 0;
// for (var index = 0; index < numbers.length; index++) {

//     if (numbers[index] > result) {
//         result = numbers[index]
//     }

// }
// console.log(result)

// var userNum = 5;
// 0 + 1 =1;
// 1 + 1 =2
// 2 + 2 =4
// 3 + 4 = 7
// 4 + 7 = 11
// 5 + 11 = 16

0, 1
// So, the Fibonacci sequence starts as follows: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], ... and so on, with each subsequent number being the sum of the two preceding ones.
[0, 1, 1, 2, 3, 5]

var userNum = +prompt("Enter your number");
var result = [0, 1]
for (var index = 2; index <= userNum; index++) {
    var firstValue = result[index - 1];
    var secondValue = result[index - 2];
    result.push(firstValue + secondValue)
}
console.log("result", result)
