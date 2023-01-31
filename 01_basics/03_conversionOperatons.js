let score = 98

console.log(typeof (score));
score = "98"
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof(valueInNumber));

valueInNumber = Number("98abc");

console.log(valueInNumber);
console.log(typeof(valueInNumber));

// "33" --> 33
// "33ABC" --> NaN
// true-> 1 ; false-> 0

let isLoggedIn = 1;
let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsloggedIn);

// 1->true ; 0-> false
// "" -> false !!! imp 
// "Friday" -> true 

let someNum = 98;
let stringsumNum = String(someNum);
console.log(stringsumNum);
console.log(typeof stringsumNum);
