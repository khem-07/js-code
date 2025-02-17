
function sayMyName(){
console.log("K");
console.log("H");
console.log("E");
console.log("M");
}

//sayMyName()

// function addTwoNumbers(number1, number2){
// console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
    }
const result = addTwoNumbers(3, 5)

//console.log("Result = ", result);

// function loginUserMessage(username){
//     if (username === undefined) {
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username = "Sam Emanul"){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("khem"))
console.log(loginUserMessage("Khem"));


function calculateCartPrice(val1, val2, ...num1) {       //also called rest operator as well as spread operator
return num1
}
//console.log(calculateCartPrice(200, 400, 500, 2000))

const user ={
    username: "Khem",
    price: 199
}

function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

//handleObject(user)
handleObject({
    username: "Sam",
    price: 400
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
