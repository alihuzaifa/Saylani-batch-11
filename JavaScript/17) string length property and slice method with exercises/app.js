// var dummyText = "a quick brown fox jumps over the lazy dog";
// var available = false;

// for (let index = 0; index < dummyText.length; index++) {
//     var checkingSpace = dummyText.slice(index, index + 3);
//     if (checkingSpace === "and") {
//         available = true
//     }
// }
// if (available === true) {
//     alert("Your text contain and character")
// } else {
//     alert("Your text do not contain and character")

// }



// var dummyText = "The New Yorker magazine doesn't allow the phrase.They say it should World War II magazine doesn't allow the phrase World War II.They say it should World War II magazine doesn't allow the phrase World War II.They say it should World War II magazine doesn't allow the phrase World War II.They say it should World War II magazine doesn't allow the phrase World War II.They say it should World War II"; 


// var count = 0;
// for (let index = 0; index < dummyText.length; index++) {
//     var checkingText = dummyText.slice(index, index + 12);
//     if (checkingText === "World War II") {
//         count++
//     }
// }
// alert("your text contain " + count + " World War II" + " words in a sentence");



var dummyText = "The New Yorker magazine doesn't allow the phrase.They say it should World War II magazine doesn't allow the phrase World War II.They say it should World War II magazine doesn't allow the phrase World War II.They say it should World War II magazine doesn't allow the phrase World War II.They say it should World War II magazine doesn't allow the phrase World War II.They say it should World War II";
for (let index = 0; index < dummyText.length; index++) {
    var checkingText = dummyText.slice(index, index + 12);
    if (checkingText === "World War II") {
        console.log("index", index)
        var previousText = dummyText.slice(0, index);
        // console.log("previousText", previousText)
        // dummyText = previousText + " The Second World War"
    }

}
// console.log("dummyText", dummyText)