# Variable
ES6 :: 변수 기본 이론 

---
## Let and Const
: 이전에는 var 로 정의.

- let : 변수 정의. var과 유사.
- const : 값 변경이 불가능한 변수를 정의할 때 사용. 하지만 완전한 lock상태는 아님. (권장!)

---
## Dead zone
: temporal dead zone. 스코프의 시작 지점부터 초기화 시작 지점까지의 구간.

- 변수선언의 절차
![변수 선언의 절차](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCfdPQ%2FbtqFNFCCfWu%2FEBd8c7QUZLSChL2AVVaiyK%2Fimg.jpg)

   : *선언 단계(변수 객체로 등록) -> 초기화 단계(할당된 메모리가 undefined로 초기화)* -> 할당 단계(사용자가 지정한 값을 할당)

- var : hoisting
- let : hoisting X

---
## Block scope
: bubble, variable이 접근가능한지 아닌지를 감지한다.
{} 내부의 변수에는 접근(정의된 변수를 참조)이 불가능한 특성.

- var : block scope가 없는 변수. function scope만 가지고 있다.
- let, const : block scope 존재.

*버블 안에서 밖의 변수로 접근은 가능하지만, 밖에서 안의 변수로 접근은 불가능하다.

---
## var
: STOP using var. 


<!-- ++++++++++++++++++++++++++++++++++++++++ -->
<!-- 마크다운 파일 미리보기 -->
<!-- Markdown open Locked Preview to the Side -->