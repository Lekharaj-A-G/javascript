const accountId = 144563
let accountEmail = "lekh@gmail.com"
var accountPassword = "12345"
accountCity = "Belagavi"
let accountState; // this will give you undefined result



// accountId = 2  // not allowed 

/*
Pefer not use var 
because of issue in block scope and functional scope.

*/


accountEmail = "kiran@gmail.com"
accountPassword = "2121211"
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);