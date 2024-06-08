// var pElement = document.getElementsByTagName('p');
// document.childNodes[1].childNodes[0].childNodes[5].innerHTML = "HTML & CSS"

// var btn = document.getElementById('btn');
// var image = document.getElementById('image');
// var count = 0;
// btn.addEventListener("click", function () {
//     if (count % 2 === 0) {
//         image.src = "images/on.jpg"
//         btn.innerHTML = "Off"
//         count++
//     } else {
//         image.src = "images/off.jpg"
//         btn.innerHTML = "On"
//         count++
//     }
// })








































// Traffic Light
// First 50 seconds red light will show; by default
// Second last 10 seconds yellow light
// Third then 1 minute green light




// var count = 1;
// setInterval(function () {
//     if (count <= 50) {
//         console.log("red Light")
//         count++
//     } else if (count > 50 && count <= 60) {
//         console.log("Yellow Light")
//         count++
//     } else if (count > 60 && count <= 120) {
//         console.log("Green Light")
//         count++
//     } else {
//         count = 1;
//         alert("Repeat")
//         console.log(count)
//     }

// }, 1000);







// console.log(document)
// console.log([1, 2, 3, 4, 5])



// var parentEl = document.getElementById("parent");
// console.log(parentEl.lastChild)






// var siblingEl = document.getElementById("brother");
// console.log(siblingEl.nextElementSibling)






function powerBy(number, power) {
    // if (power < 1) return number
    return number ** power;
}
var calculation1 = powerBy(10, 5)
console.log(calculation1)







