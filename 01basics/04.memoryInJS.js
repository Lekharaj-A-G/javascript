

// Memory in javascript 
// stack (primitives)  and heap(non-primitives) 

let name = "lekharj"
let nickName = name
nickName = "kiran"

console.log(name);
console.log(nickName);



let userOne = {
    email : "useOne@gmail.com",
    upi : "userOne@ybl"

}

let userTwo = userOne


userTwo.email = "lekharaj@google.com"

console.log(userOne.email);
console.log(userTwo.email);
