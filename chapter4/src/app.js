'use strict';

// object -> store keyed collections of various data and entities. 
// object can be created by two methods 

// first method 
let person = {
    name: 'James',
    age: 27,
    'name title': 'Jamisson',
};

// another one 
let newPerson = new Object(
    
);

// to display some of information about object... 

console.log(person.name);
console.log(`I've got ${person.age} years old.`);


/* to delete property ... 
    delete person.name; 
    console.log(person);
*/


// to add multiword key, need to use 'foo bar' 
// and to display => []
console.log(person['name title']);



// property value shorthand 
// if properties are the same like variables then don't need to assign petName: petName. Just do it like this:
let petName = 'Max';
let petSex = 'male';
let petAge = 2;

let myPet = {
    petName, 
    petSex, 
    petAge,
};

console.log(myPet);

// to check if property exist in object - use 'in' operator 
console.log('petName' in myPet); //true
console.log('petSurname' in myPet); //false


// to iterate through object use for in loop
for(let i in myPet) {
    console.log(`Property Key => ${i}: Property value => ${myPet[i]}`);
};


// tasks 

let schedule = {}; 

function isEmpty(obj) {
    for(let i in obj) {
       return false;
    }
    return true;
};

console.log(isEmpty(schedule));


let salaries = {
    John: 100, 
    Ann: 160,
    Pete: 130,
    sumSallaries(obj) {
        
        let sum = 0;
        for(let i in obj) {
            sum+=obj[i];
        }
        console.log(sum);
    },
    getAllInfo() {
        console.log(`${this.John}, ${this.Ann}, ${this.Pete}`);
    }
};



// salaries.sumSallaries(salaries);
salaries.getAllInfo();

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {

    for(let i in obj) {
        if(Number(obj[i])) {
            obj[i] *= 2;
        }
    }
}

console.log(menu);
multiplyNumeric(menu);
console.log(menu);


// tasks 

let calculator = {
    x: 0,
    y: 0,

    read(x, y) {
        this.x = x;
        this.y = y;
    },

    sum() {
        return this.x + this.y;
    },
    mul() {
        return this.x * this.y;
    }
}

calculator.read(1, 2);
console.log(calculator.sum());
console.log(calculator.mul());


// function constructor 
function Calculator(name) {
    this.name = name; 
}

let newCalc = new Calculator();
console.log(newCalc);


// classes (just for example how it works with function constructors)
class Person {

    constructor(name, surname) {
        this.name = name; 
        this.surname = surname;
    }
}

let newPer = new Person();
console.log(newPer);


// tasks 

function Accumulator(startingValue, userPrompt) {
    this.value = startingValue;

    this.read = function() {
        this.value += userPrompt
    }
}

let accum = new Accumulator(200, 100);
accum.read();
console.log(accum.value);