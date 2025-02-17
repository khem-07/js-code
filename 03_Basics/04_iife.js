//Immediately Invoked Functions Expressions (IIFE)
//Global variabel pollution create problem sometime so to remove that pollution 
// iife is used

(function chai(){  // named iife
    console.log(`DB CONNECTED`);
})();  // this semicolon is explicitly used for compeletion of function
// generally this is not used

// (definition)(execution call)

// ( function aurcode(){
//     console.log(`DB CONNECTED`);
    
// })()

// ( () => {
//     console.log(`DB CONNECTED`);
    
// })()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('hitesh')
