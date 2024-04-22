// var text = "a quick brown a fox jumps over the a lazy dog";
// var count = 0;
// for (let index = 0; index < text.length; index++) {
//     var copyText = text.slice(index, index + 2);
//      if (copyText === "a ") {
//         // count = count + 1
//         count++
//     }
// }
// console.log(count)


// var text = "and quick brown and fox jumps over the and lazy dog"; // &
// for (let index = 0; index < text.length; index++) {
//     var copyText = text.slice(index, index + 3);
//     if (copyText === "and") {
//         var allPreviousText = text.slice(0, index);
//         var changingWord = "&";
//         var lastIndex = index + 3;
//         var nextText = text.slice(lastIndex);
//         text = allPreviousText + " & " + nextText;
//     }
// }



// var text = "and quick brown and fox jumps over the and lazy dog";
// console.log(text.indexOf("quick"))


// var text = "To be or not to be.";
// console.log(text.lastIndexOf("be"))



// var text = "To be or not to be.";
// // console.log(text.slice(0, 1))
// var fruits = ["apple", "banana"]
// console.log(fruits[0])
// console.log(text.charAt(0))


var text = "World War II quick brown World War II fox jumps over the World War II lazy dog"
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
// }
console.log(text.replace(/World War II/g, "the Second World War"))






