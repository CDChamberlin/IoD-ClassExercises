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

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'] ;
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


/*
    Working with JSON objects
*/

const user = {
    "first_name" : "Sammy",
    "last_name" : "Shark",
    "age" : 25,
    "followers" : 987
    }
    console.log(user["first_name"]);
    console.log(user["age"])

/*
    JSON Exercise
    
    • Try creating a json object for BOOK, the book should have a title,  
    description, author and number of pages
    
    • Try printing these values in your console
*/

const book = {
    "title" : "Wolf of the Blood Moon: A Blood Magic Lycanthrope LitRPG",
    "description" : `When a Demonic Assault occurs, most people stuck inside of a Fracture end up hiding inside of a bunker in the hopes that they don’t end up killed by a demon.
    Others might even hope for the slightest possible chance at signing a contract with a spirit and becoming a Guardian.
    What they don’t expect is to become a demon themselves.
    
    Exactly two centuries ago, humanity was struck with their very first Demonic Assault.
    The skies above the capital of the US, shattering as if made of glass; demons of all kinds appearing out of nowhere; and no way to effectively stop them before the end of the Assault.
    
    On the brink of devastation, some of the humans managed to find themselves offered a contract whilst inside of a Fracture.
    Who these beings are that are offering these contracts, the humans don’t know. Nor do they care.
    All they care about is that by becoming a Guardian, they were offered a chance.
    A chance to rebuild.
    A chance at life.
    
    And, in the case of those Guardians, a chance at power, fame, and fortune.
    
    Now, long after every nation of the world joined together to form the Terran Republic, Scarlet finds herself stuck trying to find a university from the Republic’s capital that will accept someone from a lower tier city into their midst.
    But, as if that wasn’t already enough trouble for one person to bear, she somehow ends up stuck in one of the Fractures of a Demonic Assault while visiting her father figure’s company building.
    
    However, she doesn't perish in the darkness and rather awakens her dormant bloodline as a noble demon.
    A Blood Lycan.
    
    Turns out she had been a demon all along and had literally been born for the apocalypse.`,
    "author" : "WolfShine",
    "page_count" : 2181,
    "src" : `https://www.royalroad.com/fiction/65324/wolf-of-the-blood-moon-a-blood-magic-lycanthrope`
}

console.dir(book["title"])
console.dir(book["author"])
console.dir(book["page_count"])