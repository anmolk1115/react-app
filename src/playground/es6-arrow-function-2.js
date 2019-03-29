console.log('arrow 2 started');

//no arguments parameter can be used in arrow function

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy)
    }
}

console.log(multiplier.multiply());

const user = {
    name: 'Anmol',
    cities: ['Delhi', 'Chandigarh', 'Ahmedabad'],
    printPlaceLived() {
        return this.cities.map((city) => `${this.name} has lived in ${city}`);
    }
}

console.log(user.printPlaceLived());