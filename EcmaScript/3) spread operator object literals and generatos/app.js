import { person, quizQuestions } from "./config.js";
// import { person } from "./config.js"
// const numbers = [1, 2, 3, 4, 5, 6, 8];
// numbers.push(9, 10, 11, 12, 13)
// const answer = [...numbers, 9, 10, 11, 12]
// console.log([...numbers, 9, 10, 11, 12])






// const STUDENTS_ROLLNUMBER = [1, 2, 3, 4, 5, 6, 7, 8];
// const STUDENTS_ROLLNUMBER2 = [9, 10, 11, 12, 13];
// const answer = [...STUDENTS_ROLLNUMBER, ...STUDENTS_ROLLNUMBER2]
// // console.log(answer)
// // console.log(STUDENTS_ROLLNUMBER.concat(STUDENTS_ROLLNUMBER2))
// // console.log(STUDENTS_ROLLNUMBER.concat(STUDENTS_ROLLNUMBER2))



// const ALLNUMBERS = [];
// for (let index = 0; index < STUDENTS_ROLLNUMBER.length; index++) {
//     const element = STUDENTS_ROLLNUMBER[index];
//     ALLNUMBERS.push(element)
// }
// for (let index = 0; index < STUDENTS_ROLLNUMBER2.length; index++) {
//     const element = STUDENTS_ROLLNUMBER2[index];
//     ALLNUMBERS.push(element)
// }
// console.log(ALLNUMBERS)


// const obj = {
//     name: "Ali",
//     age: 27,
//     gender: "male"
// }
// const answer = { ...obj, age: 30 }
// console.log(answer)


// const name = "Ali";
// const age = 27;
// const gender = "Male";
// const obj = { name, age, gender }
// console.log({ ...obj, name: "Nadir" })


let questionCounter = 0;
let userScore = 0;
questionCounter++



const answer = quizQuestions[questionCounter].answer
console.log(quizQuestions[questionCounter].options) // for loop option onClick(item)
const match = "<ul>" === answer;
if (match) {
    // localStorage
    userScore++
}
console.log(match)