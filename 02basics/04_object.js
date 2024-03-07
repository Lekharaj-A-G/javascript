// singleton object = creating the object using the constructor 

const tinderUser = new Object();

tinderUser.id ="123abc"
tinderUser.name ="kiran"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userFullname :{
            fistName : "Lekharaj",
            lastName : "Gokak"
    }
}
}

// console.log(regularUser.fullname.userFullname.fistName);


// combining the objects 

const obj1 = {1:"a" ,2:"b"}
const obj2 = {3:"a" ,4:"b"}
const obj3 = {5:"a" ,6:"b"}


const combinedObject = Object.assign(obj1,obj2,obj3)
// console.log(combinedObject); 

const combinedObject_spread = {...obj1,...obj2,...obj3}
// console.log(combinedObject_spread);


// we can also have the array of objects 

const users = [
    {
        id:"abc124",
        email:"h@gmail.com"
    }
    ,
    {
        id:"abc125",
        email:"i@gmail.com"
    } 
    ,
    {
        id:"abc126",
        email:"k@gmail.com"
    }
]

// console.log(users[1].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));


// console.log(Object.entries(tinderUser));  //[ [ 'id', '123abc' ], [ 'name', 'kiran' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));  // checks whether the tinderuser has the property "isLoggedIn" if yes than returns true or else false




// destructing of objects and array 


const course = {
    courseName : "javascript",
    price : "999",
    courseInstructor :"Hitesh"
}

console.log(course.courseInstructor)  // hitesh

const {courseInstructor} = course        //=> this is called object destructuring 
console.log(courseInstructor);   // hitesh

const {courseInstructor : instructor} = course   //=> this is called as object destructuring 
console.log(instructor); // hitesh      