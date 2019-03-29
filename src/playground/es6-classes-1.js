class Person {
    constructor (name= 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `. Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation){
            greeting += `I am visiting from ${this.homeLocation} `;
        }

        return greeting;
    }
}

const me = new Student('Anmol Khatri', 26, 'computer science');
// console.log(me.getGreeting());
// console.log(me.getDescription());
console.log(me.getDescription());
console.log('----------------------------');


const other =  new Student();
// console.log(other.getGreeting());
// console.log(other.getDescription());
console.log(other.getDescription());
console.log('----------------------------');

const travel = new Traveler('Anmol Khatri', 26, 'Delhi');
console.log(travel.getGreeting());
console.log(travel);