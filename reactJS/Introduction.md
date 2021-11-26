# Introduction

```
node-v

npx

npx create-react-app new-folder-name
<!-- new-fopder-name이 생성됨 -->
```

yarn.lock 삭제
package.json 확인

```
npm start
: 개발용 서버가 만들어진다.
```

⭐ create-react-app을 사용해 만들어낸 어플리케이션의 초기 상태.

---

## CRA 결과물 살펴보기

📁src : 모든 파일을 넣을 폴더.
📂public : src에 들어가는 모든 코드, 파일들을 모아서 보여주는 폴더. (index.html)
📂node-modules : 기능적으로 사용되는 작업들이 설치된 폴더. gitignore필수.

⭐react는 auto-reload 기능을 지원한다. (수정한 코드 내용이 즉각적으로 반영된다.)

---

## 지워야할 내용

index.js에서 3가지 import(React, ReactDOM, App)와 ReactDOM.render 제외하고 다 지우기
App.js에서 css, logo 제거. <div> 내용 정리.

- App.test.js
- App.css
- index.css
- logo.svg
- reportWebVitals.js
- setupTests.js
파일 제거
<!-- 필요시 남겨놓을 수도 있으나, 기본 초기 상태를 지원하는 용도. -->

---

## ⭐PropTypes⭐

CRA 폴더에서 prop-types설치

```
npm i prop-types

```

⭐.s파일에서 import
import PropTypes from "prop-types";

---

## CRA 활용 중 CSS 사용법

1. styles.css 등의 일반적인 css파일을 사용하여 style 지정
   : index.js에서의 import가 필수 (전역 css style)

2. js 내에서 style 지정
   : componrent 내에서 style을 지정 (로컬 css style)

3. CSS module
   : module.css를 사용, className을 이용한 style 지정.
   실제 클래스명이 html내에서 랜덤하게 정해지고, 원하는 요소에만 style이 독립적으로 적용된다.

---

## ⭐Effect⭐

React App에서는 기본적으로 state가 변화하면 render가 다시 발생한다.
하지만 component가 처음 render되었을 때만 코드가 실행되기를 원할 수 있음.
그 경우를 위한 기능이 useEffect

- ex) API를 호출하는 경우, API를 통해 data를 반복적으로 받아오는 건 비효율적이기 때문.

```
useEffect(effectCallback, [dependencyList])
```

- effectCallback
  : Effect가 실행할 function.
  (Imperative function that can return a cleanup function.)
- dependencyList
  : Effect가 실행되는 조건. (ex. state, component의 data, value...) 여러개를 지정할 수 있다.
  (if present, effect will only activate if the values in the list change.)
