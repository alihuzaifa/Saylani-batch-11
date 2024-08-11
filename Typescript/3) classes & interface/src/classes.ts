// Classes

// class Human {

//     // parent

//     userName: string;
//     userAge: number;
//     constructor(name: string, age: number) {
//         this.userName = name;
//         this.userAge = age;
//     }
// }

// const man1 = new Human("Ali Huzaifa", 21);
// console.log(man1)


// class Human {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Student extends Human {
//     rollNum: number;
//     constructor(name: string, age: number, rollNum: number) {
//         super(name, age);
//         this.rollNum = rollNum;
//     }
// }
// const newStudent = new Student("Noman", 21, 278979);
// console.log(newStudent)



// class Human {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }


// class Human {
//     constructor(public name: string, public age: number) { 

//     }
// }
// const human1 = new Human("Ali", 16)
// console.log(human1)





// class Human {
//     private age: number;
//     private organizatioName: string;
//     constructor() {
//         this.age = 60;
//         this.organizatioName = "Saylani";
//     }
// }
// const zeekomo = new Human()
// console.log(zeekomo)

// class Car {
//     protected name: string = "";
// }
// class FavouriteCar extends Car {
//     constructor(protected carName: string, public fuelInTakeName: string) {
//         super();
//     }
// }
// const myCar = new FavouriteCar("Toyota", "Petrol");
// console.log(myCar)

// const uniqueName = "Ali Huzaia";
// const obj = {
//     uniqueName
// }
// console.log(obj)

// class Animals {
//     private animalCount: number[] = [];

//     get getAnimalCount() {
//         return this.animalCount
//     }

//     set setAnimalCount(counts: number[]) {
//         for (const iterator of counts) {
//             if (!iterator) return
//         }
//         this.animalCount = counts
//     }
// }
// const animalsCountSum = new Animals()
// animalsCountSum.setAnimalCount = [1, 2, 3, 4];
// animalsCountSum.setAnimalCount = [5, 6, 7, 8];
// console.log("animalsCountSum", animalsCountSum);

// abstract class ATM {
//     abstract pin(): number;
// }
// class Bank extends ATM {
//     pin(): number {
//         return 12345
//     }
//     constructor(public name: string) {
//         super()
//     }
// }
// const bank = new Bank("Meezan")
// console.log(bank);


// class Calculator {
//     static add(a: number, b: number): number {
//         return a + b;
//     }
//     static sub(a: number, b: number): number {
//         return a - b;
//     }
//     static multiply(a: number, b: number): number {
//         return a * b;
//     }
//     static divide(a: number, b: number): number {
//         return a / b;
//     }
// }

// const sum = Calculator.add(10, 20);
// console.log(sum)


// let unknown: string | number;
// unknown = "10";
// console.log(unknown)




// type objType1 = { name: string };
// type objType2 = { age: number };
// type Combined = objType1 & objType2;
// let obj: Combined = {
//     name: "Ali Huzaifa",
//     age: 100
// };
// console.log(obj);


// let unknown2: "male" | "female";


// function special(value: number | string) {
//     if (typeof value === "string") {
//         return value.toUpperCase()
//     } else {
//         return value.toFixed(2)

//     }
// }
// const check = special('helloworld')
// const check2 = special(10.23753835835385835833563873);
// console.log(check, check2)
// type User = { name: string }
// type User = { age: number }



// type User2 = {}

// interface User {
//     name: string;
//     age: number
// }
// type User2 = {
//     name: string;
//     age: number
// }
// class Person implements User2 {
//     name: string;
//     age: number;
//     constructor(userName: string, userAge: number) {
//         this.name = userName;
//         this.age = userAge
//     }
// }
// const user1 = new Person("Ali Huzaifa", 22);
// console.log(user1)


// type Obj1 = { name: string, age: number }
// interface Obj1 { userName: string, userAge: number }

// let obj: Obj1 = {
//     userName: "Ali Huzaifa",
//     userAge: 21,
//     gender: "Male"
// }


// type User = { name: string }
// type User = { age: string }
interface User { name: string }
interface User { age: number }
const obj: User = {
    name: "Ali", age: 22
}
console.log(obj)