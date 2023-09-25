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