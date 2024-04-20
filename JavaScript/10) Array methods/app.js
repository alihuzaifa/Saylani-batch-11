// var studentNames = ["Ali", "Aslam", "Nadir"];
// studentNames.push("Bilal", "Asjad", "Irfan")
// console.log(studentNames)
// studentNames.pop()

// studentNames.shift()
// studentNames.unshift("Zubair", "Zakir")
// console.log(studentNames)

// push pop shift unshift     insert-last, delete-last, delete-first ,insert-first 


// var shoppingList = [];
// shoppingList.push("Milk", "Bread", "Egg", "Cheese");
// var askAboutCheese = prompt('it is necessary to buy cheese or not?');
// if (askAboutCheese === "no") {
//     shoppingList.pop()
// }
// var askAboutApples = prompt('Apple is required or not');
// if (askAboutApples === "yes") {
//     shoppingList.unshift("Apples")
// }
// console.log(shoppingList);


var fruits = ["Apple", "Banana", "Guava"];
fruits.splice(0, 1, "Mango", "Watermelon") // index , delete , 
console.log(fruits);