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




function doAsynchronousTask(callBack) {
    setTimeout(() => {
        let success = false;
        if (success) {
            callBack(null, ["Your Task has been completed"])
        } else {
            callBack("Error", null)
        }
    }, 2000);
}
doAsynchronousTask((error, result) => {
    if (error) {
        console.log("Error Occured")
    } else {
        console.log("Successfully got data", result)
    }
})