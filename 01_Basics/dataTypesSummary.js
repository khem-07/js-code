// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 //js is dynamically typed language
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null 
let userEmail;

// Reference (Non primitive )

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);


const bigNumber = 438470473n




//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {

    name: "Khem",
    age: 22,
}

const myFunction = function(){
console.log("Hellow World");

}

console.log(typeof heros);
