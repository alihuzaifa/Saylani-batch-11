// var pElement = document.getElementById('para');
// // console.log(pElement.alt)
// // console.log(pElement.getAttribute("alt"))
// var text = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro id, corporis iste perspiciatis quisquam fugiat. Repellat quo corporis, quos dolorem, ducimus quisquam eaque voluptas, nam dolore id aperiam ad deserunt.')
// pElement.appendChild(text)

// var para = document.querySelector("p")
// var para = document.querySelectorAll("p")
// console.log(para[0])

// var studentNames = [];
// var studentAges = [];
// var studentQual = [];

// var name = "Ali"
// var age = 20;
// var qualification = "Matric";

// studentNames.push(name)
// studentAges.push(age)
// studentQual.push(qualification)


// var num = 1;
// num = 5;


// var human = {
//     name: 'Ali Huzaifa',
//     age: 21,
//     qualification: "Intermediate",
//     eyes: 2,
//     hairColor: 'black',
//     legs: 2,
//     hand: 2,
//     hobbies: ["Cricket", "Swimming", "Climbing Mountains"],
//     power: function () {
//         alert("Power")
//         return 10;
//     }
// }

// human.name = "Zeeshan";
// human.hobbies = [];


// var date = new Date()
// console.log(date.getMonth())
// console.log(human.power())


// var array = [1, 2, 3, 4, 5];
// array.push(10)


// var obj = {};

// obj.name = "Ishaq";
// obj.age = 30;

// obj.name = "Zubair";

// console.log(obj)












// Counting Show in console
// 2 prompt from user
// 1 10  ->  10 100

// var start = +prompt('Enter Start Number');
// var end = +prompt('Enter End Number');
// for (var i = start; i <= end; i++) {
//     console.log(i * 10)
// }
















// var userName = prompt("Enter user name");
// // var userNumber = +prompt("Enter user phone number");
// // var userCnic = prompt("Enter user cnic");
// // var amount = +prompt("Enter user amount");
// var obj = {
//     name: userName,
//     // number: userNumber,
//     // cnic: userCnic,
//     // amount: amount
// }


// if (userName === "") {
//     alert("Empty Value")
// }
// if (userName === null) {
//     alert("Empty Value")
// }

// !check check that data should not be an empty string or null or undefined
// if (!userName) {
//     alert("Empty Value")
// }



// var human = {
//     name: "Ali",
//     phoneNumber: "03111260357",
//     hobbies: []
// }

function addHobby(name) {
    human.hobbies.push(name)
}
// console.log(human.hobbies)


// human.hobbies.push("Cricket")
// console.log(human.hobbies)

// human.hobbies.push("Football")
// console.log(human.hobbies)

// human.hobbies.push("Wrestling")
// console.log(human.hobbies)

// Constructor Function
// function MakeObject(name, age) {
//     this.userName = name;
//     this.age = age;
// }


// var obj1 = new MakeObject("Ali Huzaifa", 21)
// // var obj2 = {
// //     userName: "Ali Huzaifa",
// //     age: 21
// // }
// console.log(obj1)
// // console.log(obj2)


function square(number) {
    return number * number
}
var squareOf25 = square(25);
console.log(squareOf25)

function hypo(base, per) { }