// var shoppingAmount = prompt("Enter your shopping amount");
// var convertedAmount = parseFloat(shoppingAmount)
// var convertedAmount = parseInt(shoppingAmount)
// var tax = 100;
// var totalAmount = shoppingAmount + tax;
// console.log(typeof convertedAmount)


// // Exercises
// // var amount = "22" + 29;
// // var amount = "22" - 29;
// var amount = (("22" - 8) - 12 + 5)
// // bodmas 14  -7

// console.log(amount)


// var gstTax = prompt("Enter GST Tax")
// var convertedIntoNumber = Number(gstTax)
// var convertedIntoNumber2 = parseFloat(gstTax)
// console.time()
// console.log(convertedIntoNumber)
// console.log(convertedIntoNumber2)
// console.timeEnd()
// 10.2


// var number = 100.12;
// console.log(number.toString())



// var amount = 10000 / 10.78 * 5.9 * 2
// console.log(amount.toFixed(5))







// setInterval
// setTimeout

// var value = 0;
// function greet() {
//     console.log(value)
//     value++
// }
// var timerId = setInterval(greet, 1000)
// function stopTimer() {
//     if (value === 5) {
//         return clearInterval(timerId)
//     }
// }
// // if (value === 5) {
// // }
// stopTimer()




// program to stop the setInterval() method after five times

var value = 0;

var timerId = setInterval(function () {
    value++
    console.log(value);
    if (value === 5) {
        clearInterval(timerId)
    }
}, 1000)




