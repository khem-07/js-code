// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

 let myCreatedDate = new Date(2025, 2, 16)

// console.log(myCreatedDate.toDateString());


// let myTimeStamp = Date.now()

// console.log(myTimeStamp); //output in millisecond

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
})

