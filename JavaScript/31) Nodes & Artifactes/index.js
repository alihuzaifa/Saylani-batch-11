// var pElement = document.getElementsByTagName('p');
// document.childNodes[1].childNodes[0].childNodes[5].innerHTML = "HTML & CSS"

var btn = document.getElementById('btn');
var image = document.getElementById('image');
var count = 0;
btn.addEventListener("click", function () {
    if (count % 2 === 0) {
        image.src = "images/on.jpg"
        btn.innerHTML = "Off"
        count++
    } else {
        image.src = "images/off.jpg"
        btn.innerHTML = "On"
        count++
    }
})