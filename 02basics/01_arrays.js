const myNumbers = [1,2,23,3,43,3]
console.log(myNumbers[1]);


const myHeros = ["shaktiman", "leelu","jai"]
console.log(myHeros[2]);


//Array methods 
console.log(myNumbers.push(32));
console.log(myNumbers);

myNumbers.pop()
console.log(myNumbers);

myNumbers.unshift(34)
console.log(myNumbers);


myNumbers.shift()
myNumbers.shift()
console.log(myNumbers);


console.log(myNumbers.includes(8));
console.log(myNumbers.indexOf(23))



let newArray = myNumbers.join()
console.log(newArray);
console.log(myNumbers);