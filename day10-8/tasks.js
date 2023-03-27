// ((array1, array2) => {
//     // let middle = array1.length;
//     // first approach
//     let totalArray = array1.concat(array2).sort((a, b) => a - b);

//     console.log((totalArray[middle - 1] + totalArray[middle])/2);
// })([1, 2, 3, 4, 5], [1, 2, 3 ,4, 5]);

// // [1, 2, 2, 3, 3, 4, 4, 5, 5, 6]

// let numbers = [4, 2, 5, 1, 3, 11, 13, 21, 22];

// // in-place
// numbers.sort((a, b) => {
//     return b - a;
// });

// console.log(numbers);

// function isSame(keys1, keys2) {
//     for (let key of keys1) {
//         if (!keys2.includes(key)) return false;
//     }

//     for (let key of keys2) {
//         if (!keys1.includes(key)) return false;
//     }

//     return true;
// }

// let obj1 = { name: 'person 1', age: 12 };
// let obj2 = { age: 12, name: 'person 1' };

// // console.log(obj1);
// // console.log(obj2);

// if (isSame(Object.keys(obj1), Object.keys(obj2))) {
//     console.log('same keys');
// } else {
//     console.log('different keys');
// }

// function findLength(array) {
//     // let length = 0;
//     // for (let value of array) {
//     //     length++;
//     // }
//     // return length;
//     let length = 0;
//     for (let index = 0; array[index] != undefined; index++){
//         length++;
//     }
//     return length;
// }

// let array = [1, 2, 3, 4, 5, 6, 7];

// let lengthOfArray = findLength(array);

// console.log(lengthOfArray);

// const friends = [
//     "Mari",
//     "MaryJane",
//     "CaptianAmerica",
//     "Munnabai",
//     "Jeff",
//     "AAK chandran"
// ];

// function areFriends(friends, friend) {
//     // return friends.includes(friend);

//     let isFriend = false;

//     for (let name of friends) {
//         if (name == friend) isFriend = true;
//     }
//     return isFriend;
// }

// console.log(areFriends(friends, 'Mari'));

const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];

const gender = [
    "Female",
    "Female",
    "Male",
    "Female",
    "Male",
    "Male"
];

for (let index = 0; index < friends.length; index++){
    if (gender[index] == "Male") {
        console.log("Mr." + friends[index])
    } else {
        console.log("Ms." + friends[index]);
    }
}