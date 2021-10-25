// /* Declare the function 'myFunc' */
// function myFunc(theObject) {
//     theObject.brand = "Toyota";
//     theObject.model = "Corolla";
// }
//
// /*
//  * Declare variable 'mycar';
//  * create and initialize a new Object;
//  * assign reference to it to 'mycar'
//  */
// var mycar = {
//     brand: "Honda",
//     model: "Accord",
//     year: 1998
// };
//
// /* Logs 'Honda' */
// console.log(mycar.brand);
//
// /* Logs 'Accord' */
// console.log(mycar.model)
//
// /* Pass object reference to the function */
// myFunc(mycar);
//
// /*
//  * Logs 'Toyota' as the value of the 'brand' property
//  * of the object, as changed to by the function.
//  */
// console.log(mycar.brand);
// console.log(mycar.model);
//
// for (var i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }
//
// for (var i = 0, j = 9; i < 10; i++, j--) {
//     console.log('for loop iteration #' + i + ', j = ' + j);
// }
//
// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }

'use strict';

for (var i = 1; i < 100; i++) {

    if (i % 2 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }

    console.log('Here is a lovely even number: ' + i);
}