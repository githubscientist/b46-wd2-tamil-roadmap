// create a prototype object
// template
let Student = {
    print: function () {
        console.log(`Student Name: ${this.name} and Student Age: ${this.age}`);
    }
};

// create a object using the prototype
let student101 = Object.create(Student);

student101.name = 'alice';
student101.age = 25;

// console.log(student101);

student101.print();

// let student102 = Object.create(Student);

// student102.name = 'joe';
// student102.age = 20;

// student102.print();


// Student.sayHello = function () {
//     console.log(`Hi, ${this.name}`);
// }

// student101.sayHello();
// student102.sayHello();

