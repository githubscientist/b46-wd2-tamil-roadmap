// define a object prototype
let StudentProto = {
    print: function () {
        console.log(`Student Name: ${this.name} and Student Age: ${this.age}`);
    }
};

// define a constructor
function Student(name, age) {
    this.name = name;
    this.age = age;
}

// set the prototype of the StudentProto as Student
Student.prototype = StudentProto;

// create a new object
let student101 = new Student('alice', 25);

console.log(student101);
student101.print();