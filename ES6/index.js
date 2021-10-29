// VARIABLE
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


// ===========================================
// Block Scope
if(true){
   const hello ="hi";
}

console.log(hello);
// ERROR _ hello는 {} 안에서만 존재

if(true){
   var hi = "hello";
}

console.log(hi);
// hello _ var는 block scope가 없고, function scope가 존재. function 안에 있는 경우만 외부에서 접근이 불가능한 형태.


// ===========================================
// FUNCTION
// arrow function
const names = ['Melchior', 'Aslan', 'Arthur'];

const addHearts = names.map(function(item){
   return item + "❤";
})
console.log(addHearts);
// ['Melchior❤', 'Aslan❤', 'Arthur❤']

// arrow function 사용하기
const arrowHearts = names.map((item)=>{
   return item +"❤"
});
console.log(arrowHearts);
// ['Melchior❤', 'Aslan❤', 'Arthur❤']


// ===========================================
// 'this'
const button = document.querySelector("button");

const handleClick = () => {
   console.log(this);
};

button.addEventListener("click", handleClick);
// this => window object

button.addEventListener("click", function(){
   console.log("i have been clicked.");
});
// 클릭할 때마다 i have been clicked.