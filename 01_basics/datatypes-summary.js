// Primitive Data_types : 
// There are 7 : 
// String, Number, Boolean, null, undefined,BigInt,Symbol 

const score = 100
const scoreValue = 199.3

const isLoggedIn = false
const outsideTemp = null
let userEmail ; // undefined 
// or 
let userEmail1 = undefined ; 

const id = Symbol('1234');
const anotherId = Symbol('1234');
// lets check whether both are same or no ? 
console.log(id === anotherId);

const bigNumber = 897465123598764546231n
// ------------------------------------------=----------------------------------------------=--
// Non-primitive Or Reference Datatypes : 
// 3 are there :
// Arrays , Object , functions 

const heroes = ["Hanuman","Shaktiman","Bheem","IronMan"];
let myObj = {
    name : "FRIDAY",
    age : 19,
    gender : "Male",
}


const myFunction = function(){
    console.log("Hello World ! ");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof heroes);
console.log(typeof id);
console.log(typeof outsideTemp);