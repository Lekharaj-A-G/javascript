const score = 222

const balance = new Number(344)
console.log(balance);


console.log(balance.toString());

// converting the number into string 
console.log(balance.toString().length);


//toFixed(number)
console.log(balance.toFixed(2));

let number = 11.22
console.log(number.toPrecision(2));  //11

let oneMoreNumber = 111.12
console.log(oneMoreNumber.toPrecision(1)); // 1e+2 


let accountBalance  = 10000000
console.log(accountBalance.toLocaleString()) // 10,000,000
console.log(accountBalance.toLocaleString("en-IN")); // 1,00,00,000



let anotherNumber = 3.2
console.log(Math.abs(anotherNumber));
console.log(Math.sqrt(anotherNumber));
console.log(Math.round(anotherNumber));
console.log(Math.ceil(anotherNumber));


console.log((Math.floor(Math.random()*10)+1));