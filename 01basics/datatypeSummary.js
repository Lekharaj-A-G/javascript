
// There are two types of data types 

// 1.Primitive(call by value) : String ,Number, Boolean,Symbol,Null,undefined 

const outsideTemp = null
const id = 235
const isLoggedIn = true
const accountId = 1233


const userId = Symbol(1323)
const anotherUserId = Symbol(1323)
console.log(userId === accountId);  // false because we used the symbol which returns the unique values will be diffrent.


// 2.Non - Primitives(call by reference ) : Arrays, Objects, Functions 

// Array 
const superHeros = ["shaktiman" ,"spiderman","batman"]

// object 
const myData = {
    name :"lekharaj",
    age : 21,
    gender : "male"
}



// functions 
const myFunction = function(){
    console.log("hello world");
}


console.log(typeof myFunction)  // function
console.log(typeof myData)      // object
console.log(typeof superHeros)  // object