const person ={
   name: "dione"
};

person = true; 
// error

person.name = "Kleio";
// 정상작동


// ===========================================
// Dead Zone
console.log(myName);
// undefined. not Error
var myName = "Chell";
console.log(myName);
// Chell

// hoisting : variable를 top으로 끌어올리는 error.

console.log(myNameL);
// ERROR
let myNameL = "Chell";
console.log(myNameL);
// Chell
