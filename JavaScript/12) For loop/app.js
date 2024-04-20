
// starting point, end point , loop iteration condition
//  0 10 20 30     100

var userNumber = +prompt("Please provide me a table number");
var tableLength = +prompt("Please provide me a table length");

for (var i = 1; i <= tableLength; i++) {
    var tableStatement = userNumber + " x " + i + " = " + (userNumber * i)
    console.log(tableStatement)
}
