

const marvel_heros =["thor", "spiderman","ironman"] 
const dc_heros = ["batman","flash","shaktiman"]

// push   == this will give the array inside the array
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);   //[ 'thor', 'spiderman', 'ironman', [ 'batman', 'flash', 'shaktiman' ] ]

// concat() == this combine the two array and returns the new array

let newArray = marvel_heros.concat(dc_heros)
// console.log(newArray);  //[ 'thor', 'spiderman', 'ironman', 'batman', 'flash', 'shaktiman' ]



const all_new_heros = [...marvel_heros , ...dc_heros]
// console.log(all_new_heros);



const another_array = [1,2,3,[4,5],6,7,[8,5,3,[3,2,1],21,1]]
const new_another_array = another_array.flat(Infinity)
// console.log(new_another_array);


console.log(Array.isArray("Lekharaj"));
console.log(Array.from("Lekharaj"));

console.log(Array.from({name : "lekharaj"}));   // interesting


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2,score3));


