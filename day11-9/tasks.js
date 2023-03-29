// let isOdd = (array) => {
//     for (let value of array) {
//         if (value % 2 != 0) {
//             console.log(value);
//         }
//     }
// }
    
// isOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

class Circle {
    constructor(radius = 1.0, color = 'red') {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    toString() {
        return `[${this.radius}, ${this.color}]`;
    }

}

let circle = new Circle(); // default constructor
let circle1 = new Circle(4.5); // parametrized constructor, radius
let circle2 = new Circle(5.5, 'blue'); // radius, color

console.log(circle1.toString());

