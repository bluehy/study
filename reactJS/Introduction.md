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

App.test.js
App.css
index.css
logo.svg
reportWebVitals.js
setupTests.js

<!-- 필요시 남겨놓을 수도 있으나, 기본 초기 상태를 지원하는 용도. -->
