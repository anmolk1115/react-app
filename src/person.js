console.log('person.js is running');
export const isAdult = (age) => {
    if(age>18){
        return true;
    } else {
        return false;
    }
}

export const canDrink = (age) => {
    if(age>21){
        return true;
    } else {
        return false;
    }
}

const isSenior = (age) => age>=65;

export default isSenior;