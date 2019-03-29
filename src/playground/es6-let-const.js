console.log('let and const examples');

let name = 'anmol';
name = 'khatri';
console.log(`Name variable using let - ${name}`);

const val = 'khd';

console.log(val);

const fullName = 'Anmol Khatri';
let firstName, lastName;
if(fullName) {
    firstName = fullName.split(' ')[0];
    lastName = fullName.split(' ')[1];
    console.log(firstName);
    console.log(lastName);
}

console.log(firstName);