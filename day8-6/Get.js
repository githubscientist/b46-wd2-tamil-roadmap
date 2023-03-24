class Student {
    // special method which gets called when we create an object
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    isEligible() {
        if (this.age >= 18) {
            return 'Eligible';
        } else {
            return 'Not Eligible';
        }
    }

    set Name(name) {
        this.name = name;
    }

    get Name() {
        return 'Ms.' + this.name;
    }

    getName() {
        return this.name;
    }
}

let student = new Student('alice', 25);

// student.setName('joe');

// student.name = 'joe';

student.Name = 'joe';

// let name = student.Name;

// console.log(name);

console.log(student.getName());