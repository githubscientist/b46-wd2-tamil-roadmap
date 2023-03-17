// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers[4]);

// console.log(numbers.length);

// let lastValueIndex = numbers.length - 1;

// console.log(numbers[lastValueIndex]);


// console.log(numbers[numbers.length - 1]);

// for (let index = 0; index<numbers.length; index++){
//     console.log(numbers[index]);
// }

// console.log(numbers.join(' '));

// tasks

// 1. create an empty array called myArray with initial values 1, 2, 3, 4, 5
// let myArray = [1, 2, 3, 4, 5];

// 2. change the value at index 2 to 6
// myArray[2] = 6;
// console.log(myArray);

// 3. add a new element to the end of the array
// myArray[5] = 7;
// console.log(myArray);

// 4. calculate the length of the array
// console.log(myArray.length);

// 5. loop through the array and print each element
// for (let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);
// }

// 6. loop through the array and print the product of 2 of each element

// for (let i = 0; i < myArray.length; i++){
//     myArray[i] = myArray[i] * 2;
// }

// console.log(myArray);

// let myArray = [1, 2, 3, 4, 5];

// let i = 0;
// while ( i < myArray.length){
//     myArray[i] = myArray[i] * 2;
//     i++;
// }

// console.log(myArray);

// let myArray = [1, 2, 3, 4, 5];

// let i = 0;
// do {
//     myArray[i] = myArray[i] * 2;
//     i++;
// } while (i < myArray.length);

// console.log(myArray);

// for...of loop

// let myArray = [1, 2, 3, 4, 5];

// for (let number of myArray) {
//     console.log(number);
// }


// for...in loop

// for (let index in myArray) {
//     console.log(myArray[index]);
// }

// let word = 'apple';

// for (let char of word) {
//     console.log(char);
// }

// for (let index in word) {
//     console.log(index, ':', word[index]);
// }

// let array = [1, 2, 3, 4, 5];

// array.forEach((number, index, array) => {
//     console.log(number, index, array[index]); 
// });