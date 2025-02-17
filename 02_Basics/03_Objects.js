//Singleton
//object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    full_name: "Choudhary",
    [mySym]: "mykey1", // special case for symbol index we use [] 
    age: 65,
    location: "Jaipur",
    email: "khene@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser.full_name)
// console.log(JsUser["email"]);
// console.log(JsUser["full_name"]);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"

Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`); 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


