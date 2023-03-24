class Student {
    setName(name) {
        this.name = name;
    }
}

let student101 = new Student();

student101.setName('alice');

console.log(student101);

let student102 = new Student();
student102.setName('joe');

console.log(student102);