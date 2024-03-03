let name = "lekharaj"
let repCount = 29

console.log(name.length);


let normalString = "kiran"
let subNormalString = normalString.substring(0,3);
console.log(subNormalString);

console.log(normalString.charAt(0));
console.log(normalString.indexOf("k"));
console.log(normalString.includes("a"));
console.log(normalString.replace("ki","le"));


let spacedString = "   kiran    " 
console.log(spacedString.trim());

let oneMoreString = "    kiran"
console.log(oneMoreString.trimStart());

let againOneMoreString = "kiran      "
console.log(againOneMoreString.trimEnd());



let url = "https://www.google.com"
let newUrl = url.replace("google","youtube")
console.log(newUrl)



let paragraph = "hello-my-name-is-ramesh"
let paragraphSplit = paragraph.split("-") //[ 'hello', 'my', 'name', 'is', 'ramesh' ]
console.log(paragraphSplit);


let data = `hello my name is ${name} and my repoCount is ${repCount}`
console.log(data);




// All string methods 

let exampleString = "Learning Javascript is Awesome"

//at 
console.log(exampleString.at(6)); //n

//charCodeAt
console.log(exampleString.charCodeAt(3)) //114

//concat
let firstName = "lekharaj"
let lastName = " Gokak"
console.log(firstName + lastName); // lekharaj Gokak
console.log(firstName.concat(lastName));

//endsWith()
console.log(firstName.endsWith("j")); // true

//valueOf()
console.log(firstName.valueOf());
