// let array = [1, 2, 3, 4, 5];

// to square each element in the array
// without map method
// for (let index = 0; index < array.length; index++){
//     array[index] = array[index] ** 2;
// }

// console.log(array);

// using map method
// console.log(array.map((number) => {
//     return number**2;
// }));

// let mapper = (num) => {
//     return num**2;
// }

// let mapper = function(num){
//     return num**2;
// }

// function mapper(num){
//     return num**2;
// }

// array = array.map(mapper);

// console.log(array);

// let mapper = (fruit) => {
//     return fruit[0].toUpperCase() + fruit.slice(1, );
// }

// let fruits = ['apple', 'orange', 'banana', 'cherry'];

// console.log(fruits.map(mapper));

// let array = [1, 2, 3, 4, 5];

// array.map((item, index, array) => {
//     console.log(item, index, array, array[index]);
// });

// let array = [1, 2, 3, 4, 5];
// array = array.map((number) => number ** 3);

// console.log(array);

// function mapper(fruit) {
//     if (fruit == 'banana') {
//         return fruit[0].toUpperCase() + fruit.slice(1,);
//     } else {
//         return fruit;
//     }
// }

// function mapper(fruit, index, fruits) {
//     // console.log(fruit, index, fruits[index]);
//     if (index == 2) {
//         return fruit[0].toUpperCase() + fruit.slice(1,);
//     } else {
//         return fruit;
//     }
// }

// function mapper(fruit, index, fruits) {
//     if ((index+1) % 2 != 0) {
//         return fruit.toUpperCase();
//     } else {
//         return fruits[index];
//     }
// }

// let fruits = ['apple', 'orange', 'banana', 'cherry', 'berries', 'watermelon', 'grapes'];

// fruits = fruits.map(mapper);

// console.log(fruits);


// let numbers = ['1', '2', '3', '4', '5'];

// // numbers = numbers.map((number) => parseInt(number));
// numbers = numbers.map((number) => {
//     return parseInt(number)
// });

// console.log(numbers);

let sentence = 'guvi geek';

sentence.split('').map((char) => {
    // switch (char) {
    //     case 'a':
    //     case 'e':
    //     case 'i':
    //     case 'o':
    //     case 'u':
    //     case ' ':
    //         break;
    //     default:
    //         console.log(char);
    // }

    let vowels = ['a', 'e', 'i', 'o', 'u', ' '];
    if (!vowels.includes(char)) {
        console.log(char);
    }
});