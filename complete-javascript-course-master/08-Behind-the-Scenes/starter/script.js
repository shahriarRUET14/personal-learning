'use strict';
// const calcAge = function(birthYear){
//     console.log(2037 -birthYear)
//     console.log(this)
// }
// calcAge(1991);

// const calcAgeArrow = (birthYear)=>{
//     console.log(2037 -birthYear)
//     console.log(this)
// }
// // calcAgeArrow(1991);
// const jonas = {
//     firstName: 'Jona',
//     year:1996,
//     calcAge:function(){
//         console.log(2023 -this.year)
//         console.log(this)
//     }
//     greet: () => console.log(`Hey ${this.firstName}`)
// }
// const methodBorrowing = {
//     year: 1995
// }
// methodBorrowing.calcAge = jonas.calcAge
// jonas.calcAge();
// methodBorrowing.calcAge(); 

// const f = jonas.calcAge;

// const jonas = {
//     firstName: 'Jonas',
//     year:1996,
//     calcAge:function(){
//         console.log(2023 -this.year)
//         console.log(this)
//     },
//     greet: () => console.log(`Hey ${this.firstName}`)
// }
// jonas.greet() 

//mutating a primitive value
let lastName = 'initiak LastName stored in a Call stack as its primitive'
let oldLastName = lastName
lastName = "Changed"
console.log(lastName, oldLastName)
//Calling Reference type data
const obj = {
    fistName: 'Jesical',
    type: 'Married'
}
const objRef = obj  //simply new ref no extra memory
objRef.type = 'Divorced'
console.log(obj) // changing as Reference are changing and no secondary obj instance is created. 

//Copyinh Object

// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
  };
  
  const jessicaCopy = Object.assign({}, jessica2);
  jessicaCopy.lastName = 'Davis';
  
  jessicaCopy.family.push('Mary');
  jessicaCopy.family.push('John');
  
  console.log('Before marriage:', jessica2);
  console.log('After marriage: ', jessicaCopy);
  
  
  