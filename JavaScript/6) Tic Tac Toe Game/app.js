// Conditions

// comparison operators     === equals to , > greater than,  < less than,  <= less than or equals to, >= greater than or equals to !== not equals to


// var childAge = +prompt('Enter a child age ?') // ctrl alt l

// if (childAge < 9) {
//     console.log('You can get admission')
// } else {
//     console.log('You child is over age')
// }


//  bache ki umar hath sal hun ya isse ziada bhi hun wo admission le sakta hain

// >= badi hun ya barabar hun condition se

// if (childAge !== 0) {
//     console.log('he can join the school')
// }
//  else {
//     console.log('Your child cannot join us')
// }



var box1 = document.getElementById('box-1');
var box2 = document.getElementById('box-2');
var box3 = document.getElementById('box-3');
var box4 = document.getElementById('box-4');
var box5 = document.getElementById('box-5');
var box6 = document.getElementById('box-6');
var box7 = document.getElementById('box-7');
var box8 = document.getElementById('box-8');
var box9 = document.getElementById('box-9');



var count = 0;
function game(parameter1) {
    var wordShow = count % 2;
    var word;
    if (wordShow === 0) {
        word = "o"
    } else {
        word = "x"
    }

    if (parameter1 === '1') {
        box1.innerHTML = word
        count++
    }
    else if (parameter1 === '2') {
        box2.innerHTML = word
        count++
    }
    else if (parameter1 === '3') {
        box3.innerHTML = word
        count++
    }
    else if (parameter1 === '4') {
        box4.innerHTML = word
        count++
    }
    else if (parameter1 === '5') {
        box5.innerHTML = word
        count++
    }
    else if (parameter1 === '6') {
        box6.innerHTML = word
        count++
    }
    else if (parameter1 === '7') {
        box7.innerHTML = word
        count++
    }
    else if (parameter1 === '8') {
        box8.innerHTML = word
        count++
    }
    else if (parameter1 === '9') {
        box9.innerHTML = word
        count++
    }
}