// console.log("Hello World")

/* TOPICS That we will cover in this
1 String Type
2 Number Type
3 Object Type
4 Array Type
5 Literal Type
6 Function Type
7 Tupple Type
*/


// let myName : string;
// // myName = "Ali Huzaifa"
// myName = "100";
// console.log(myName)


// let rollNumber : number = 100;
// rollNumber = 100;
// console.log(rollNumber)


// let human: object;
// human = { a: "a", b: "b" }
// console.log(human)

// type Human = {
//     name: string;
//     age: number;
//     education: string;
// }

// let human: Human;
// human = {
//     name: "Ali",
//     age: 20,
//     education: "Bscs",
// }
// console.log(human)


// let fruits : string[] = ["Banana", "Apple", "Mango"];
// console.log(fruits)

// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers)


// let humans :Human[]  = [
//     {
//         name: "Ali",
//         age: 20,
//         education: "Bscs",
//     },
//     {
//         name: "Ali",
//         age: 20,
//         education: "Bscs",
//     },
//     {
//         name: "Ali",
//         age: 20,
//         education: "Bscs",
//     },
//     {
//         name: "Ali",
//         age: 20,
//         education: "Bscs",
//     },
//     {
//         name: "Ali",
//         age: 20,
//         education: "Bscs",
//     },
// ]
// console.log(humans)


// let mixArray: (string | number)[] = ["Ali", 123, "Ali"]

// 5) Literal types TypeScript mein aise values hote hain jo bilkul specific hote hain. In values ko hum explicitly declare karte hain. Ye values exact aur specific hoti hain, jaise ki ek particular string, number, ya boolean value.

// let foundation: "Saylani" | "Jdc";
// foundation = "Saylani";
// console.log(foundation)



// function sum(num1: number, num2: number): number {
//     return num1 + num2
//     // return "Hello World"
// }
// const result = sum(10, 20);
// console.log(result)


// 7) Tupple Type :Tuples TypeScript mein ek tarah ka data structure hai jo kisi specific order mein elements ko store karta hai. Har element ko uski position ke hisab se identify kiya jata hai.
// Tuples declare karne ke liye, aap [ ] brackets mein elements ke types ko likhte hain:

// let tuppleArray: [string, number];
// tuppleArray = ["Ali", 1];
// console.log(tuppleArray)

// Jab hum HTML se kisi element ko TypeScript mein target karte hain, tab us element ki type initially pata nahi hoti. Isliye hum type casting karte hain (<HTMLButtonElement>) taaki hum TypeScript ko bata sakein ki wo element kis type ka hai, jaise ki button ya input.



// let specialEl = document.querySelector('.special') as HTMLInputElement;
// let specialEl = <HTMLInputElement>document.querySelector('.special');
// specialEl.value = "Ali Huzaifa"
// console.log(specialEl)


let myName: string = "123";
console.log(myName)