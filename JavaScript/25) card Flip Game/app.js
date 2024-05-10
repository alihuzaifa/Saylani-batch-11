
// if (userDish === "Biryani") {
//     alert("Here is your Biryani")
// }
// else if (userDish === "Biryani") {
//     alert("Here is your Kheer")
// }
// else if (userDish === "Biryani") {
//     alert("Here is your Bottle")
// }

// var userDish = "Not";
// switch (userDish) {

//     case "Everything":
//         alert("Here is your Biryani")

//     case "Everything":
//         alert("Here is your Kheer")

//     case "Everything":
//         alert("Here is your Bottle")

//     default:
//         alert("Just Biryani")
// }







// var grade = "E"
// switch (grade) {

//     case "A":
//         alert("You Got A Grade")
//         break

//     case "B":
//         alert("You Got B Grade")
//         break

//     case "C":
//         alert("You Got C Grade")
//         break

//     case "D":
//         alert("You Got D Grade")
//         break

//     case "E":
//         alert("You Got E Grade")

//     default:
//         alert("You Failed")

// }

// function add(){

// }

// console.log(typeof add)



var image1 = document.getElementById("card1")
var image2 = document.getElementById("card2")
var image3 = document.getElementById("card3")
function game(param) {
    var randomNumber = Math.ceil(Math.random() * 3);
    if (param === 1 && randomNumber === 1) {
        image1.src = "images/a.png"
       
    }
    else if (param === 1 && randomNumber === 2) {
        image1.src = "images/king.jpg"
    }
    else if (param === 1 && randomNumber === 3) {
        image1.src = "images/joker.jpg"
    }
    // else if (param === 2 && randomNumber === 2) {
    //     image2.src = "images/king.jpg"
    //     // alert("You Win")
    // }
    // else {
    //     image3.src = "images/joker.jpg"
    //     // alert("You Loss")
    // }
}