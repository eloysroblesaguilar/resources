alert('is this working?');
//
// function isOdd(x) {
//     return(x % 2 !==0);
// }
// console.log(isOdd(3));
// console.log(isOdd(2));
//
// function isEven(x) {
//     return (x % 2 == 0);
// }
// console.log(isEven(3));
// console.log(isEven(2));
//
// function identity(x) {
//     return x
// }
// console.log(identity('i love js'));
// console.log(identity(4));
//
// function isFive(x) {
//     return(x == 5);
// }
// console.log(isFive(5));
// console.log(isFive(4));
//
// function addFive (x) {
//     return(x + 5);
// }
// console.log(addFive(5));
// console.log(addFive(9));
//
// function isMultipleOfFive (x) {
//     return (x % 5 == 0);
// }
// console.log(isMultipleOfFive(15));
// console.log(isMultipleOfFive(11));
//
// function isThree (x) {
//     return (x == 3)
// }
// console.log(isThree(3));
// console.log(isThree(4));
//
// function isMultipleOfThree(x) {
//     return (x % 3 == 0);
// }
// console.log(isMultipleOfThree(9));
// console.log(isMultipleOfThree(10));
//
// function isMultipleOfThreeAndFive(x) {
//     return (x % 3 == 0 && x % 5 == 0);
// }
// console.log(isMultipleOfThreeAndFive(15));
// console.log(isMultipleOfThreeAndFive(12));
//
// function isMultipleOf(target, n) {
//     return (target % n == 0);
// }
// console.log(isMultipleOf(12, 3));
// console.log(isMultipleOf(12, 5));
//
// function isTrue(boolean) {
//     return (boolean == true);
// }
// console.log(isTrue(true));
// console.log(isTrue(false));
//
// function isFalse(boolean) {
//     return (boolean == false);
// }
// console.log(isFalse(false));
// console.log(isFalse(true));
//
// function isTruthy(x) {
//     return (x == true);
// }
// console.log(isTruthy(1));
// console.log(isTruthy(0));
//
// function isFalsy(x) {
//     return (x == false);
// }
// console.log(isFalsy(''));
// console.log(isFalsy('pog'));
// function seven(x) {
//     return 7;
// }
//
// console.log(seven());
//
// if (false){
//     console.log('I am seen');
// } else {
//     console.log('What about me?');
// }
//
// var hadBreakfast = Boolean(Math.round(Math.random()));
// var hadBreakfastMessage = (hadBreakfast) ? "Yummy yummy I have breakfast in my tummy" : "Get in my belly pls I need some breakfast.";
//
// console.log(hadBreakfastMessage);
//

// /** Write a function called 'typeCheck' that takes an input and returns a string of the data type entered.
//  *  If the data type is a string, return the string "Haha, it's a string of string!"
//
// Tests:
//  typeCheck('')
// typeCheck(isNaN());
// typeCheck(!false * 3);
// typeCheck(4 + '4'); */
//
// function typeCheck (input) {
//     if (typeof input === 'string') {
//         return "Haha, it's a string of a string!";
//     } else {
//         return typeof (input);
//     }
// }
//
// console.log(typeCheck(''));
// console.log(typeCheck(isNaN()));
// console.log(typeCheck(!false * 3));
// console.log(typeCheck(4 + '4'));
//
//
//
//
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0 ) {
//         console.log('FizzBuzz');
//     } else if (i % 3 == 0 ) {
//         console.log('Fizz');
//     } else if (i % 5 == 0) {
//         console.log('Buzz')
//     } else {
//         console.log(i);
//     }
// }
//
//
// function secondToLast (arr) {
//     return arr[arr.length - 2];
// }
/** Write a function named 'moveToEnd' that takes in an array, and returns the array with the original first index moved to the last index of the array.

 Example:
 moveToEnd([1, 2, 3, 4])          // returns [2, 3, 4, 1];
 moveToEnd(['roll', 'rock', 'and']  // returns ['rock', 'and', 'roll']; **/

function moveToEnd(arr) {
    return arr.push(arr.shift());
}

var yamper = {
    name: 'Yamper',
    number: 835,
    evolution: 'Boltund',
    category: 'Puppy',
    abilities: ['Ball Fetch', 'Rattled'],
    weight: '29.8 lbs',
    height: '1\'00"',
    type: 'Electric',
    weaknesses: 'Ground',
    movesLearned: ['Wild Charge', 'Play Rough', 'Crunch', 'Electro Ball']
}


// var circle = {
//     radius: 36
// }
//
// function areaOfCircle (object) {
//     return Math.PI * (object.radius * object.radius);
// }
//
// console.log(areaOfCircle(circle));
//
// console.log(parseInt(Math.PI * ( circle.radius * circle.radius )));

var groceries = [
    {
        name: "carrots",
        quantity: 5
    }, {
        name: "yams",
        quantity: 50
    }, {
        name: "oranges",
        quantity: 9
    }, {
        name: "onions",
        quantity: 2
    }, {
        name: "cucumbers",
        quantity: 6
    }, {
        name: "potatoes",
        quantity: 8
    }
];


function sortByName (arr) {
    arr.sort((a, b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb ) {
            return 1;
        }
        return 0;

    });
}
var products = [
    {
        name: 'Playstation 5',
        price: 599.99
    }, {
        name: 'Logitech Wireless Mouse',
        price: 23.99
    }, {
        name: 'Macbook Pro',
        price: 1099.99
    }, {
        name: 'GoPro HERO10',
        price: 399.99
    }, {
        name: '12" & 6" Metal Ruler Set',
        price: 5.99
    }]

sortByName(products);

console.log(products);