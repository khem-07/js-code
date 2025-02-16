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


///+++++++++++++++++++++++++++++++++++
//Memory


// stack(Primitive):the variable declared inside this is given as a copy to the user
// Heap(Non-Primitive): the reference of the variable is given to the user


let myNickname = "Raman"

let anothername = "Ravan"
anothername = "Chai aur Code"

console.log(myNickname);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"

}

let userTwo = userOne
 userTwo.email = "Khem98397@gmail.com"

 console.log(userOne);
 console.log(userTwo);
 
 