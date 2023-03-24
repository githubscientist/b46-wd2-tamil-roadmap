// let array = [1, 2, 3, 4, 5];

// array.forEach((value, index, array) => {
//     console.log(value**2, index, array, array[index]);
// });

// ((array) => {
//     for (let value of array) {
//         if (value % 2 != 0) {
//             console.log(value);
//         }
//     }
// })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);



((array) => {
    for (let value of array) {
        let factors = 0;

        for (let divisor = 2; divisor < value; divisor++){
            if (value % divisor == 0) {
                factors++;
            }
        }

        if (factors == 0 && value!=1) {
            console.log(`${value} is a prime`);
        } else {
            console.log(`${value} is not a prime`);
        }
    }
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);