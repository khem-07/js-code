const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
// Math.PI = 5   cant't overwrite like this value of pi
// console.log(Math.PI);


//console.log(chai);

console.log(descripter);


 const chai = {
    name: 'ginger chai',
    price: 240,
    isAvailable: true

    // orderChai: function(){
    //     console.log("chai nhi bni");
        
    // }
 } 
 
//  Object.defineProperty(chai, 'name',{
//      Writable: false,
//      enumerable: false,
//      configurable: false
//     })

//     console.log(Object.getOwnPropertyDescriptor(chai, "name"));
 

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);     
    }
}