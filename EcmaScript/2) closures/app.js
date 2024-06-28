// var number = 10;
// let number2 = 10;
// const number3 = 10;
// console.log(number)
// console.log(number2)
// console.log(number3)

// Variable Scoping

// 1 Global Scope
// 2 Function Scope
// 3 Block Scope  { ... }
// 4 Lexical Scope


// Example 1
// var globalVariable = 100;
// console.log(globalVariable)


// if (true) {
//     console.log(globalVariable)
// }

// function global() {
//     console.log(globalVariable)
// }
// global()


// Example 2
// function functionScope() {
//     var functionScopeVariable = 100;
//     console.log(functionScopeVariable)
// }
// functionScope()
// console.log(functionScopeVariable)


// Example 3 BlockScope
// if (true) {
//     var blockScopeVariable = 100;
//     console.log(blockScopeVariable)
// }
// if{}
// for{}
// while{}
// console.log(blockScopeVariable)



// function outerFunction() {
//     var outerVariable = 100;

//     function innerFunction() {
//         var innerVariable = 200;
//         console.log(outerVariable)
//         console.log(innerVariable)
//     }
//     innerFunction()
//     console.log(outerVariable)
//     console.log(innerVariable)
// }
// outerFunction()

// foo()
// function foo() {
//     console.log("Function Has Called")
// }
// foo()
// console.log(globalValue) // undefined
// var globalValue = 10;
// console.log(globalValue)

















// function add(a, b) {
//     return a + b
// }
// const sum = add(1, 8);
// console.log(sum)

// const sum2 = (a, b) => a + b // 
// const answer = sum2(1, 29)
// console.log(answer)



// function outer() {
//     var outerValue = "Hello World";
//     return () => {
//         console.log(outerValue)
//         return "Hello World 2"
//     }
// }
// const answer = outer();
// console.log(answer())


// const outerCounter = () => {
//     var count = 0;
//     return () => count++
// }
// const answer = outerCounter();

// const output1 = answer()
// const output2 = answer()
// const output3 = answer()

// console.log(output1)
// console.log(output2)
// console.log(output3)





// function outerFunction() {
//     let outerVar = 'I am outside!';
//     function innerFunction() {
//         console.log(outerVar);
//     }
//     innerFunction();
// }
// outerFunction()


// const parentFunc = () => {
//     var parentWorth = 100;
//     return () => parentWorth += 100
// }

// const result = parentFunc(); // destroy parent function 100
// const output1 = result() // 200
// const output2 = result() // 300
// const output3 = result() // 400
// console.log(output1, output2, output3)



// var firstName = "Ali";
// var lastName = "Huzaifa";
// console.log(`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, itaque ipsum. Esse, corrupti. Ullam 
//     accusantium, vero officiis sit quia, sequi eum obcaecati a ab aliquam vitae molestias praesentium id esse! ${firstName} ${lastName}`)
// console.log("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, itaque ipsum. Esse, corrupti. Ullam accusantium, vero officiis sit quia, sequi eum obcaecati a ab aliquam vitae molestias praesentium id esse! " + firstName + " " + lastName)


// var array = [1, 2, 3, 4, 5, 6, 7];
// console.log(array[0])


// const array = [1, 2, 3, 4, 5, 6, 7];
// const [firstNum, , , , , , num7] = array;
// console.log(num7)
// const numbers = [1, 2, 3, 4, 5];
// const [a, b, c] = numbers
// console.log(a)
// console.log(b)

// const obj = {
//     name: "Sumair",
//     age: 17
// }
// const { name, age } = obj
// console.log(name)
// console.log(age)



// const greet = (userName = "Ali Huzaifa") => {
//     console.log(`Hello ${userName}`)
// }
// greet("Nadir")
// greet()


const sum = (...values) => {
    var answer = 0;
    for (let index = 0; index < values.length; index++) {
        answer += values[index]
    }
    return answer
}
var answer = sum(1, 2, 3, 4, 5, 6, 7, 8, 457458, 486486)
console.log(answer)
