import data from "./data.js";
var questionEl = document.querySelector('.question')
var listEl = document.querySelector('.list')
var buttonEl = document.getElementById('btn')

// function* generatorFunc() {
//     yield 1 // Home
//     yield [1, 2, 3, 4, 5, 6, 7, 8] // About
//     yield 3
//     yield 4
//     yield 5
// }
// const callFunc = generatorFunc();
// console.log(callFunc.next())
// console.log(callFunc.next())













// var array = [
//     { name: "Ali", age: 10 },
//     { name: "Aslam", age: 10 },
// ];
// // const updatedArray = array.map((item) => item + 10)
// const updatedArray = array.map((obj) => {
//     return { ...obj, gender: "Male" }
// })
// console.log(updatedArray)
// const answer = []
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     answer.push(element * 5)
// }
// console.log(answer)



// var colors = ["red", "green", "orange"];
// var getData = colors[Symbol.iterator]();
// console.log(getData.next())
// console.log(getData.next())
// console.log(getData.next())
// console.log(getData.next())



var count = 0;
const renderQuestion = () => {
    var question = data[count].question
    var options = data[count].options;
    questionEl.innerHTML = `Q ${count + 1}) ${question}`;
    listEl.innerHTML = ""
    for (let index = 0; index < options.length; index++) {
        const item = options[index]
        const div = document.createElement('div');
        div.className = "list";
        div.textContent = `${index + 1}. ${item}`;
        listEl.appendChild(div)
    }
}
renderQuestion()
buttonEl.addEventListener("click", () => {
    if (count < data.length - 1) {
        count++
        renderQuestion()
    }
})

