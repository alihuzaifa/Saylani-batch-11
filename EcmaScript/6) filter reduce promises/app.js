// const genders = ["male", "female", "others", "male", "female", "male"];
// const filterList = genders.filter((item) => {
//     return item === "male"

//     // if (item === "male") {
//     //     return item
//     // }
// })


// const filterList = genders.filter((item) => item !== "male" && item !== "female")
// console.log(filterList)






// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sum = numbers.reduce((acc, value) => {
//     // console.log("acc", acc)

//     return acc + value

//     // previous +=new

// }, 0) //INITIAL VALUE OR STARTING VALUE
// console.log(sum)






















// setTimeout(() => {
//     console.log("Hello World")
// }, 10);



// var num = 1




// function doAsynchronousTask(callBack) {
//     setTimeout(() => {
//         let success = false;
//         if (success) {
//             callBack(null, ["Apple", "Mango"])
//         } else {
//             callBack("Error", [])
//         }
//     }, 2000);
// }
// doAsynchronousTask((error, result) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(result)
//     }
// })


// function fetchUserData(callback) {
// setTimeout(() => {
//     callback(null, { userId: 1 });
// }, 1000);
// }

// function fetchUserPosts(userId, callback) {
//     setTimeout(() => {
//         callback(null, [{ postId: 101 }]);
//     }, 1000);
// }

// function fetchPostComments(postId, callback) {
//     setTimeout(() => {
//         callback(null, ["Comment 1", "Comment 2"]);
//     }, 1000);
// }

// // Using nested callbacks (callback hell)
// fetchUserData((error, result) => {
//     if (error) {
//         console.log("Error in Fetching the user data")
//     } else {
//         fetchUserPosts(1, (error2, result2) => {
//             if (error2) {
//                 console.log("Error in Fetching the user posts")
//             } else {
//                 fetchPostComments(10, (error3, result3) => {
//                     if (error3) {
//                         console.log("Error in Fetching the user posts Comments")
//                     } else {
//                         console.log(result3)
//                     }
//                 })
//             }
//         })
//     }

// })

// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ userId: 1 })
//         }, 1000);
//     })
// }


// function fetchUserPosts(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Error Occured in database")
//         }, 1000);
//     })
// }

// function fetchPostComments(postId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(["Comment 1", "Comment 2"])
//         }, 1000);
//     })
// }

// fetchUserData()
//     .then((response) => fetchUserPosts(response?.userId))
//     .then((response2) => fetchPostComments(response2[0]?.postId))
//     .then((response3) => console.log(response3))
//     .catch((error) => console.log("error", error))






// const getUsers = () => {
//     return fetch(`https://jsonplaceholder.typicode.com/users`).then((response) => {
//         response.json().then((data) => console.log("data", data))
//     })
// }
// const getData = getUsers()
// console.log(getData)


// async function getData() {
//     try {
//         const getData = await fetch(`https://jsonplaceholder.typicode.com/users`)
//         return await getData.json()
//     } catch (error) {

//     }
// }
// const data = await getData();
// console.log(data)



// Math.pow(2,3) 2*2*2
// let base = 4;
// let power = 3;
// let result = base ** power;
// console.log(result)




// let age = 3;
// // if (age >= 18) {
// //     console.log("You can drive a car")
// // } else {
// //     console.log("You can not drive a car")
// // }
// let result = age >= 18 ? "You can drive a car" : age === 3 ? "First go to school" : "You can not drive a car"
// console.log(result)











// let obj = {
//     name: "Ali"
// }
// let obj = null; 
// const array = [{name:"Ali"}]
// console.log(array[0]?.name)


