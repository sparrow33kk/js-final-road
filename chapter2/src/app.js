'use strict'; 
// dyrektywa, ktora wskazuje JS'owi aby traktował kod w nowoczesny sposób (stare metody nie wspierane w nowym ES5~ nie beda obslugiwane)
// łuhi dodaje komentarz jedno liniowy 
// alert("I'm JavaScript!");

/*
Łuhi
a to jest komentarz
wieloliniowy 
*/

// zmienne służą do przechowywania wartości oraz manipulowania na nich
let myNameIs = 'Luke';

let admin;
let user; 

user = 'John';
admin = user; 

console.log(user);
console.log(admin);

let ourPlanetName = 'Earth';
let currentUserName = 'James';

//number data type 
/*
    Infinity -> greater then any number
    NaN -> not a number (x / 2);

*/
let myAge = 28; 

// big int  -> larger then 2^53-1 or less then
let bigNumber = 29999n;

// string -> just text value 
let myName = 'Łukasz';
let mySurname = "Jamesson";
let msg = `My name is ${myName}. My last name is ${mySurname}.`;

// boolean -> true or false (1 or 0)

let logged = true;
let isAdmin = false;

// null -> nothing, empty or unknown value
let imNull = null;

// undefined -> value is not assigned 
// If a variable is declared, but not assigned, then its value is undefined
let myAgeIsUndefined; 

// objects, symbols -> deep in another section/.chapter 

// typeof -> returns string with type of variable 

let giveMeAType = 'James';
console.log(typeof giveMeAType);

// interaction with prompts, confirms and alerts 

// alerts -> display something on screen and user can click Ok
alert('My name is James!')

// prompt -> wait for user input and display it on the screen (or you can click cancel)
prompt('What is your name?', undefined);

// confirm -> show a modal windows with a question and ok or cancel button
confirm('Are you 18 years old?');



let name = prompt('What is your name?', undefined);
alert(name);
