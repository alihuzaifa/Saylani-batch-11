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


const outerCounter = () => {
    var count = 0;
    return () => count++
}
const answer = outerCounter();

const output1 = answer()
const output2 = answer()
const output3 = answer()

console.log(output1)
console.log(output2)
console.log(output3)