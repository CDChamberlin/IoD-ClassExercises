function SayHello(){
    console.log('Hello World, again.');
}

SayHello();

/*

Create 4 functions for the 4 main operations (-,+,/,*). Return the value and output it to the 
screen. 
Create a function that takes the name of a person as an argument, and prints out “Hello Name” 
to the console. Hint search online on how to concatenate two strings

*/

function Sum(A, B){
    return A + B
}
console.log(Sum(2, 25))

function Subtract(A, B){
   return A - B;
}

console.log(Subtract(10, 5))

function multiply(A, B){
    return A * B
}
console.log(multiply(12, 23))

function division(A, B){
     return (A/B)
}
console.log(division(20, 4))

function Greet(A){
    return ("Hello " + A)
}

console.log(Greet("Robert"));
/*
    NPM Practice with Sentiment Module
*/

const Sentiment = require('sentiment')
const sentiment = new Sentiment()
const result = sentiment.analyze("Cats are clever and stupid.")
console.dir(result)

/* 
    Module 1 part 7
    Algorithms and Data Structures
*/

let helloText = "say Hi";
let check = 4;
if (check>3){
    let hello = "say Hello instead";
    console.log(hello);
}
//console.log(hello)

let mountains = ["Everest", "Fuji", "Nanga Parbat"]

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'], ;
// console.log(seas);
seas.push('Red Sea'); // adds to the end of the array
// console.log(seas);
// seas.unshift('Blue Sea') // adds to the begining of the array

// const lastElement = seas.pop;
// const firstElement = seas.shift;

let index = seas.indexOf('North Sea')

/*
Exercise 
    • For understanding more about arrays try creating an array that has 5 elements.
    • Replace the value of the element at position 1 and 4. 
    • Print the array to the console.
*/

let oceans = ["Alantic", "Pacific", "Indian", "Artic", "Southern"];
oceans[1] = "Red Sea";
oceans[4] = "Black Sea";

console.dir(oceans)
