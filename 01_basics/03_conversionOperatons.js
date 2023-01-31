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

// ============================   operations   ================================//

let value = 3;
let negvalue = -value;
console.log(negvalue);

// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2/2);
// console.log(2**3);
// console.log(30%3);

let st1 = " new ";
let st2 = " York";
let st3 = st1+st2;
console.log(st3);


console.log(1+"2");
console.log("1"+2);
console.log("1"+2+2);
console.log(1+2+"2");

console.log((3+4)*8%63);


console.log(+true);  // (true+) ERROR
console.log(+"");


let num1 , num2 ,num3

num1=num2=num3=2+2 // aise Kyu hee karna hai ? 

let gameCounter = 100
gameCounter++;
console.log(gameCounter);








