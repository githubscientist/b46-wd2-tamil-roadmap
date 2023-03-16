// check and print whether the number is a positive number

// if statement

// let number = 12;

// if (number > 0) {
//     console.log(`${number} is positive`);
// }

// // check and print whether the number is a positive number or not

// if...else statement
// let number = -5;

// if (number > 0) {
//     console.log(number, 'is a positive number');
// } else {
//     console.log(number, 'is not a positive number');
// }


// check and print whether the number is a positive number or negative number or zero
// nested if...else statements
// let number = 0;

// if (number > 0) {
//     console.log(number, 'is a positive number');
// } else {
//     // number is not a positive number
//     // number is zero
//     // or number is negative
//     if (number < 0) {
//         console.log(number, 'is a negative number');
//     } else {
//         console.log(number, 'is a zero');
//     }
// }

// multiple if...else statements

// let number = 17;

// if (number > 0) {
//     console.log(number, 'is a positive number');
// } else if(number < 0) {
//     console.log(number, 'is a negative number');
// } else {
//     console.log(number, 'is a zero');
// }

// switch...case statements
// switch (10) {
//     case 1:
//         console.log('one');
//         break;
//     case 2:
//         console.log('two');
//         break;
//     default:
//         console.log('other than one and two');
//         break;
// }

// using switch...case statements, check and print whether the number is a positive 
// or negative or zero

// let number = 0;

// switch (true) {
//     case number > 0:
//         console.log(number, 'is a positive number');
//         break;
//     case number < 0:
//         console.log(number, 'is a negative number');
//         break;
//     case number == 0:
//         console.log(number, 'is a zero');
//         break;
// }

// let number = -10;

// switch (number > 0) {
//     case true:
//         console.log(number, 'is a positive number');
//         break;
//     case false:
//         switch (number < 0) {
//             case true:
//                 console.log(number, 'is a negative number');
//                 break;
//             case false:
//                 console.log(number, 'is a zero');
//                 break;
//         }
//         break;
// }

// ternary operator or conditional operator
// ? :

let number = 10;

number > 0 ? console.log(number, 'is a positive number') : number < 0 ? console.log(number, 'is a negative number') : console.log(number, 'is a zero');