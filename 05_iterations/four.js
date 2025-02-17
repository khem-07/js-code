const myObject ={
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) { // by using forin loop keys and value of objects can be found
    //console.log(key); //giving keys of object
    //console.log(myObject[key]); //giving values of objects

 // console.log(`${key} shortcut is for ${myObject[key]}`);
  
}

const programming  = [ "js", "rb", "py", "java" , "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
    
}
const  map = new Map()  // not iteratable 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr',"France")

for (const key in map) {
    console.log(key);
    
}