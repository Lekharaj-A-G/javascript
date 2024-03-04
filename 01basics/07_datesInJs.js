const myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString);


// let myCreatedDate = new Date(2025,0,23)
// let myCreatedDate = new Date(2025,0,23,5,3)
// let myCreatedDate = new Date("2025-02-12")  // yyyy//mm//dd
// let myCreatedDate = new Date("1-13-2023")  // yyyy//mm//dd



// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);

let myCreatedDate = new Date("04-03-2024")
// console.log(myCreatedDate.getTime());


const newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());



let newDates = newDate.toLocaleString("defalut",{
    weekday : "long"
})



console.log(newDates);

