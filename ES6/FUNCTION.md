# Function
[백링크](./README)
ES6 :: 함수 기본 이론


---
## 🔹 Arrow Function
: 함수의 모습을 개선한 케이스. 대체가 아니라 새로운 형태.

```javascript
const hello = function(arg){
   // 기존 function의 형태
}

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
```

- arrow function의 기본 형태<sup>[1](#footnote_1)</sup>
```javascript
const Name = () => {};
```


- ***implicit return*** : 같은 줄에 뭘 적던지 간에 return된다. {return} 을 제거해도 return의 기능을 수행하게 된다. {}나 return을 추가하면 사라진다.
   
```javascript
   const arrowHearts = names.map(item=>item +"❤");
   console.log(arrowHearts);
   // ['Melchior❤', 'Aslan❤', 'Arthur❤']
   const arrowHearts = names.map(item=>{item +"❤"});
   // [undefined, undefined, undefined]
   ```


---
## 🔹 'this' in Arrow Functions
: this키워드를 사용해야하는 경우, arrow function을 쓸 수 없다.

- 이미 사용법이 정해진, 예약된 용어.
```javascript
button.addEventListener("click", function(){
   console.log(this);
   // this-> HTMLbuttonElement
   console.log("i have been clicked.");
   // 클릭할 때마다 i have been clicked.
});
```
- arrow function내에서 this를 사용할 경우, window를 가리킨다. 
```js
button.addEventListener("click", function(){
   console.log(this);
   // this-> window obj을 표시하게 됨.
});

const handleClick = () => {
   console.log(this);
};

button.addEventListener("click", handleClick);
// 끌어와서 사용해도 동일한 결과가 출력된다.
```


---
## 🔹 Arrow Function in The REAL WORLD
: array operation.

- [array.prototype.find](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
: 제공되는 테스트 조건을 만족(true)하는 ***첫번째*** 엘리먼트 값을 리턴하는 함수.

- [array.prototype.filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
: 제공된 함수의 조건을 만족한 모든 엘리먼트로 새로운 array를 만들어서 출력한다.

- [array.prototype.forEach](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
: array의 엘리먼트마다 제공된 함수를 실행한다. 새로운 array를 만들지는 않는다. 실행만 할뿐.
   - ✔ map 은 forEach하고 반환된 element들로 새로운 array를 만들어준다.
   -> object로 이루어진 array도 반환할 수 있는데, 이때 implicit return이 깨지기 때문에 {}를 ()로 감싸주면 된다. object를 반환하는 방법이다.

---
## 

---
### 🔸 각주
---
<a name="footnote_1">1</a> : arguments가 하나일 때는 ()를 사용하지 않아도 된다. 아무것도 없는 경우 또는 두개 이상부터는 ()를 사용해야한다.