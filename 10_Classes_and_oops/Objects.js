function mutlipleBy5(num){
    
return num*5
}

mutlipleBy5.power = 2

console.log(mutlipleBy5(5));
console.log(mutlipleBy5.power);
console.log(mutlipleBy5.prototype); //prototype is not just some methods but also give some properities

function createUser(username , score){
    this.username = username
    this.score = score

}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25) //new is essential 
const tea = new createUser("tea", 250)


chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is create: The new keyword initiates the creation of a new
JavaScript objects

A prototype is linked: The newly created onject gets linked to the 
prototype property of the constructor function. This means that it has 
access to prpertis and methods defind on the constructor's prototype

The constructor is called: The constructor function is called with the
specified arguments and this is bound to the newly created object.
If no explicit return value is specified from the construtor. JavaScript
assume this, the newly created object, be the intended return value.

The new object is returned: After the constructor function has been
called, if it does'nt return a non-primitive value (object, array, function, etc.)
the newly created object is returned.

*/