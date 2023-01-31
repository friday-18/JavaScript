const accountID = 85415
let accEmail = "friday@ironman.com"
var accPassword = "123852"
accCity = "Newyork"
// accountID = 799999998 // not allowed
console.log(accountID);

accEmail = " changed@invfo.com"
accPassword= "THis also changed "
accCity = " Lost angel"
let accState;

console.table([accountID,accPassword,accEmail,accCity,accState])

/*
    prefer not to use var 
    because of issue in block and functional scope !
*/
