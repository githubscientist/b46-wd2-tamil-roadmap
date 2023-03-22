// I need the values from the array in different variables / separate variables
// let numbers = [5, 6, 7, 8, 9, 10];

// let a = numbers[0];
// let b = numbers.slice(1, 4);
// let c = numbers.slice(4, );

// console.log(a);

// // array destructuring
// let [a, b, c] = [5, 6, 7, 8, 9, 10];

// console.log(c);

// rest operator
// I need first two values from the array in a and b variables
// I need all the rest of the values other than first two values in a variable
// let [a, b, ...c] = [5, 6, 7, 8, 9, 10];

// console.log(c);


// let numbers = [1, 2, 3];

// let [a, b, c] = numbers;

// console.log(a, b, c);

// object destructuring
// let person = {
//     name: 'krish',
//     age: 25
// };

// let { name, age } = person;
// console.log(name, age);

// console.log(person.name, person.age);

// let { name, age } = { name: 'krish', age: 25 };

// console.log(name);
// console.log(age);

// let { name: personName, age: personAge } = { name: 'krish', age: 25 };

// console.log(personName);
// console.log(personAge);

// // rest operator
// function add(...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         sum = sum + numbers[i];
//     }
//     return sum;
// }

// console.log(add(5, 6, 7));

// spread operator
// let numbers = [1, 2, 3, 4];

// console.log(...numbers);

// let extraNumbers = [...numbers, 5, 6];
// let moreNumbers = [...numbers, 7, 8, 9, ...extraNumbers];

// console.log(moreNumbers);

// let str = 'hello';

// // spread
// let chars = [...str];

// console.log(chars);

// let person = {
//     name: 'alice',
//     age: 25
// };

// let contact = {
//     ...person,
//     mobile: 9876543210
// };

// console.log(contact);