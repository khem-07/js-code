//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abh"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUSer = {
    email: "some@gmail.com",
    fullname: {
        userFullname:
        {
            firstname: "Khem",
            lastname: "Singh"
        }
    }
}
//console.log(regularUSer.fullname?.userFullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 ={3: "c", 4: "d"}
const obj4 ={5: "c", 6: "d"}
const obj5 ={3: "c", 4: "d"}

//const obj3 ={obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2, obj4)


const obj3 = {...obj1, ...obj2}   //Spread Operator
//console.log(obj3);


const users = [
    {
        id:1,
        email: "hl@gmail.com"
    },
    {
        id:1,
        email: "hl@gmail.com"
    },
    {
        id:1,
        email: "hl@gmail.com"
    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//+++++++++++++++Destructuring++++++++++++++

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//course.courseInstructor.coursename

const {courseInstructor: instructor} = course 

//console.log(courseInstructor);
console.log(instructor);

// {                 // its a JASON although its an object because object has name but jason have not name
//     name: "Khem",
//     coursename: "js in hindi",
//     price: "free"
// }
