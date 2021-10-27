# Variable

## Let and Const
: 이전에는 var 로 정의.

- let : 변수 정의. var과 유사.
- const : 값 변경이 불가능한 변수를 정의할 때 사용. 하지만 완전한 lock상태는 아님. (권장!)


## Dead zone
: temporal dead zone. 스코프의 시작 지점부터 초기화 시작 지점까지의 구간.

- 변수선언의 절차
[변수 선언의 절차](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCfdPQ%2FbtqFNFCCfWu%2FEBd8c7QUZLSChL2AVVaiyK%2Fimg.jpg)

   : *선언 단계(변수 객체로 등록) -> 초기화 단계(할당된 메모리가 undefined로 초기화)* -> 할당 단계(사용자가 지정한 값을 할당)

- var : hoisting
- let : hoisting X
<!-- 마크다운 파일 미리보기 -->
<!-- Markdown open Locked Preview to the Side -->