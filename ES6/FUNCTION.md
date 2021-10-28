# Function
ES6 :: 함수 기본 이론

---
## Arrow Function
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
### 각주
---
<a name="footnote_1">1</a> : arguments가 하나일 때는 ()를 사용하지 않아도 된다. 아무것도 없는 경우 또는 두개 이상부터는 ()를 사용해야한다.