// var fruits = ["Apple", "Banana", "Guava"];
// fruits.splice(0, 2, "Watermelon")
// console.log(fruits)


// initialization , condition , updation
// var fruits = ["Apple", "Banana", "Guava", "Watermelon"];
// for (var i = 0; i < fruits.length; i = i + 1) {
//     console.log(fruits[i])
// }

var cleanCities = ["Karachi", "Lahore", "Multan", "Islamabad"];
var userFavCity = prompt("Enter your favourite city");
var isCityExist = false;
for (let index = 0; index < cleanCities.length; index++) {
    var currentCity = cleanCities[index];
    if (currentCity === userFavCity) {
        isCityExist = true;
        break
    }
}


if (isCityExist === true) {
    console.log("Your city is cleaned")
} else {
    console.log("Your city is not cleaned")
}