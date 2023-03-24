class Students {
    constructor() {
        this.students = [];
    }
}

// define a template/class for the Student
class Student {
    // special method which gets called when we create an object
    constructor(name, age, place, course) {
        this.name = name;
        this.age = age;
        this.place = place;
        this.course = course;
    }

    isEligible() {
        if (this.age >= 18) {
            return 'Eligible';
        } else {
            return 'Not Eligible';
        }
    }
    
}

// let student101 = new Student('alice', 25, 'chennai', 'FSD');
// let student102 = new Student('prince', 20, 'cbe', 'frontend');
// let student103 = new Student('joe', 17, 'madurai', 'backend');

// let students = [student101, student102, student103];

// console.log(students[2]);

// console.log(student103.isEligible());

// for (let index = 0; index < students.length; index++){
//     console.log(students[index].name, students[index].isEligible());
// }

// students.push(new Student('sathish', 26, 'chennai', 'zen'));

// console.log(students);

let parttimeStudents = new Students();

parttimeStudents.students.push(new Student('alice', 25, 'chennai', 'FSD'));
parttimeStudents.students.push(new Student('alice', 25, 'chennai', 'FSD'));

console.log(parttimeStudents);

let fulltimeStudents = new Students();

fulltimeStudents.students.push(new Student('joe', 17, 'madurai', 'backend'));

console.log(fulltimeStudents);