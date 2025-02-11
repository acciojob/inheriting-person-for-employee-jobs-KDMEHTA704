// Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Greet method for Person
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

// Employee class inheriting from Person
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    // Job-specific greeting method
    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// Attach classes to window for Cypress testing
window.Person = Person;
window.Employee = Employee;
