const user = {
    username: "Hitesh",
    price: 999,
    
    welcomeMessage: function(){
    console.log(`${this.username} , welcome to website`);
    console.log(this);
    
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }

// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

const chai = () =>{
    let username = "hitesh"
    console.log(this);
}
//chai()

// const addTwo = (num1, num2) => {
// return num1 + num2    // when we use curly braces than we have necessary
// use the return keyword
// }


//const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2) // here no need to write the return keyword

const addTwo = (num1, num2) => ({username: "khem"})
console.log(addTwo(3, 7))

const myArray = [ 2, 2,3 4, 5, 6]

//myArray.forEach()