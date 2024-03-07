// The object can be declared in two method 
// 1.using literal
// 2.using constructor


// 1. using literal 

// const JsUser = {} // declaration done  Object consist of key value pair

// creating the symbol and adding it in the object and access it 

const mySmb = Symbol("key1")

const JsUser = {
    name : "lekharaj",
    "full name ": "lekharaj gokak",
    [mySmb] : "mykey1",
    age : 20,
    location : "karnataka",
    email : "lekharaj@google.com",
    isLoggeIn : false,
    lastLoginDay : ["Monday" ,"Tuesday" ,"Thrusday"]
}

// console.log(JsUser.email);
// console.log(JsUser.full name );  // you cannot access like this so use the below mentioned syntax always 
// console.log(JsUser["full name "]);
// console.log(JsUser["email"]);

// console.log(JsUser[mySmb]);  // Accessing the symbol


// accessing the changing the value of the object

JsUser.email = "kiran@google.com"
// console.log(JsUser.email);

// we can also block the user by changing the values of the object by freezing the object 

// Object.freeze(JsUser);
JsUser.email = "kiran@chatgpt.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}

// console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name }`); // here this will refer to the current object 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());