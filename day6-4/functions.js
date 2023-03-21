// hoisting

// sayHello(); 

// function sayHello() {
//     console.log('hello');
//     console.log('world');
// }

// console.log(x);

// var x;

// // function definition
// function sayHello() {
//     console.log('hello');
// }

// // function call
// sayHello();
// sayHello();

// function function2() {
//     function1();
//     console.log('from function 2');
// }


// function function1() {
//     function2();
//     console.log('from function 1');
//     function2();
// }
// console.log('from the main block before function1 call');
// function1();
// console.log('from the main block after function1 call');

/*

    function1()
        - function2()
            - function1()
                - function2() 
                    - function1()
                        - function2()
                            - 
                        - console.log x
                        - function2() x
                    - console.log x
                - console.log x
                - function2() x
            - console.log('from function 2') x
        - console.log('from function 1') x
        - function2() x
            
        
*/

// function sayHi() {
//     sayHello();
//     console.log('hi');
// }

// function sayHello() {
//     console.log('hello');
// }

// sayHi();
// sayHello();
// sayHi();

// function sayHello(personName) {
//     console.log('hello', personName);
// }

// sayHello('krish');

// single argument with a number

// function print(number) {
//     console.log(number);
// }

// // print(5);
// // print(true);
// // print('krish');
// // print([1, 2, 3, 4, 5]);

// let krish = 5;

// print(krish);

// function add(number1, number2) {
//     console.log(number1 + number2);
// }

// add(434, 123);
// add(34, 6);

// add three numbers
// 5, 6, 7

// add('10', '5');

// let guvi = 4, codekata = 8;

// add('guvi', 'codekata');

// function add(number1, number2) {
//     return number1 + number2;
// }

// function sub(number1, number2) {
//     return number1 - number2;
// }

// // console.log(add(5, 6));

// let firstNumber = 15;
// let secondNumber = 5;

// let sum = add(firstNumber, secondNumber);
// let diff = sub(firstNumber, secondNumber);

// console.log(sum, diff);

// function add(number2, number1) {
//     return number1 + number2;
// }

// console.log(add(5, 6));
// var name = 'krish';
// var salary = 12000;

// function increment(amount) {
//     salary = salary + amount;
// }

// increment(5000);

// console.log(salary, name);

// function add(num1, num2) {
//     return num1 + num2;
// }

// function sub(num1, num2) {
//     return num1 - num2;
// }

// // add three numbers
// // 5, 6, 7
// console.log(sub(add(5, 6),7));

// function calc(num1, num2, type) {
//     if (type == 'add') {
//         return num1 + num2;
//     } else if (type == 'sub') {
//         return num1 - num2;
//     }
// }

// console.log(calc(calc(5, 6, 'add'), 7, 'sub'));

// console.log(Math.round(17.4));
// user-defined function
// function append(array, value) {
//     array[array.length] = value; 
// }

// let array = [1, 2, 3, 4];

// // // library function
// // // array.push(5);
// append(array, 5);
// // append(array, 6);

// console.log(array);

// array[5] = 6;

// console.log(array);

// console.log('12', typeof ('12'));

// console.log(parseInt('12'), typeof (parseInt('12')));

// console.log(parseInt('23'));

// let person = {
//     name: 'krish',
//     age: 25
// };

// // javascript object to JSON string
// console.log(JSON.stringify(person));

// // console.log(person);
// // console.log(typeof (person));

// let json = `{
//     "name": "krish",
//     "age": 25
// }`;

// // valid JSON string to javascript object
// let jObject = JSON.parse(json);

// // console.log(Object.values(jObject));

// let values = ['1', '2', '3', '4'];

// // values[0] = parseInt(values[0]);

// for (let index = 0; index < values.length; index++){
//     values[index] = parseInt(values[index]);
// }

// console.log(values);