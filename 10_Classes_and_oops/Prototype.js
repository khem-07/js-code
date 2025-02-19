// let myName = "Khem     "
// let mychannel = "Chai  with  Kezin "
// console.log(myName.trueLength);

let myHeros = ["thor","spiderman"]

let heroPower ={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
       // console.log(`Spidy power is ${this.spiderman}`);

    }
}

Object.prototype.khem = function(){
    // console.log(`Khem is present in all objects`);
    
}
Array.prototype.heyKhem = function(){
    // console.log(`Khem says hello`);
    
}
// heroPower.khem()
myHeros.khem()
myHeros.heyKhem()
//heroPower.heyKhem()


//inhertance 

const User = {
    name: "sam",
    email: "sam@gmail.com"
}

const Teacher = {
    makeVideo: true 

}

const TeachingSuport = {
    isAvailable: false
}
const TASupport = {
    makeAssignement : 'JS assignment',
    fullTime: true,
    __proto__: TeachingSuport  //proto inherit teahingsupport properity
}

Teacher.__proto__ = User

//modern sytax

Object.setPrototypeOf(TeachingSuport, Teacher)

let anotherUsername = "chaiAurCoffe"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherUsername.trueLength()
"khem".trueLength()
"iceTea".trueLength()