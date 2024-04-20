// var fruits = ["Apple", "Banana", "Mango"];
// var userFavFruit = prompt("Enter Your Favourite Fruit");
// var isFruitAvailable = false;
// for (var i = 0; i < fruits.length; i++) {
//     if (fruits[i] === userFavFruit) {
//         isFruitAvailable = true;
//         break
//     }
// }
// if (isFruitAvailable === true) {
//     console.log(userFavFruit + " is available")
// } else {
//     console.log(userFavFruit + " is not available")
// }

var firstNames = ["Ali", "Bilal", "Mudassir"];
var lastNames = ["Huzaifa", "Ansari", "Khan"];
var completeNames = ["Ali Huzaifa", "Ali Ansari", "Ali Khan", "Bilal Huzaifa", "Bilal Ansari", "Bilal Khan"];
var finalNames = [];
for (var firstNameIndex = 0; firstNameIndex < firstNames.length; firstNameIndex++) {
    for (var lastNameIndex = 0; lastNameIndex < lastNames.length; lastNameIndex++) {
        finalNames.push(firstNames[firstNameIndex] + " " + lastNames[lastNameIndex])
    }
}

//  firstNames 0  lastNames loop will iterate completely
//  firstNames 1  lastNames loop will iterate completely
//  firstNames 2  lastNames loop will iterate completely
console.log(finalNames)