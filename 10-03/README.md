# 개발 환경
- 앵귤러 12버전
- 리액트 17버전, 현재는 18.2 버전
- 리액트 네이티브 0.68버전, 현재 0.71 버전
- 넥스트 7.0.2, 현재는 13버전
- Express 4.17.1
- 리액트 네이티브는 cli 실무에서 경험해봤으며, mac os로 usb 연결해서 직접 확인해가면서 진행했습니다.
- 디자인 툴은 xd

# 불변성을 지켜야하는 이유
    리액트의 state 변화 감지 기준은 콜 스택의 주소값이기 때문입니다.
    리액트는 콜 스택의 주소값만을 비교해 상태 변화를 감지하는데이를 얕은 비교라고 합니다.
    이것이 리액트의 state를 빠르게 감지할 수 있는 장점이자 불변성을 유지해야 하는 이유입니다.
    하지만 참조타입의 경우 참조타입의 값만 변경하면 실제로 콜스택의 주소값은 변경이 없어
    state 감지가 되지 않아 리렌더링이 되지가 않습니다. 그래서 저희가 spread 연산자를 쓰고,
    immer 라이브러리를 사용해 새로운 배열과 오브젝트를 만들어 반환하는 이유가 그것입니다.

# 얕은복사와 깊은복사
    얕은복사 : 참조값이 복사되어서 원본이 변경되면 같이 변경되는 경우
    깊은복사 : 원본과 참조가 끊어져 각각 별개의 참조값을 가지고 있는 경우

# useState를 비동기로 업데이트 하는 이유
    state는 값이 변경되면 리렌더링이 발생한다. 그런데 변경되는 state가 많을 경우 리렌더링이 계속 일어날테고 속도도 저하될것이다.
    따라서 React는 성능을 위해서 변경된 값들을 모아 한번에 업데이트를 진행하여 렌더링을 줄이고자 배치(Batch) 기능을 사용해 비동기로 작동한다고 볼 수 있다.
    배치 업데이트는 16ms 주기이다.

# state변경시, 왜 setState, useState를 사용하는가?
    리액트는 state의 상태에 따라 재랜더링을 시키기 때문에, setState로 state의 불변성을 지키면서 업데이트 하여야한다.

# 랜더링이 많이 일어날 때 처리방법

# 타입스크립트에서 enum타입을 지양하는 이유
    https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking

# react Reconciliation

# stateful 과 stateless
    https://wooono.tistory.com/366

# session과 jwt의 차이
    인증정보를 클라이언트에서 가지고있냐 서버에서 가지고있냐의 차이
    서버에서 가지고 있는경우 세션, 클라이언트의 경우 jwt
    세션의 경우 사이즈도 작고 서버에서 관리하기 때문에 보안성에는 좋지만, 서버를 여러대 운영할경우 확장성이 없다.
    또한 모두 서버에서 관리하다보니 서버에 부담도 크다
    https://hudi.blog/session-based-auth-vs-token-based-auth

# Type과 Interface의 차이점에 대해 설명해주세요
    interface에서 할 수 있는 대부분의 기능들은 type에서 가능하지만,
    한 가지 중요한 차이점은 type은 새로운 속성을 추가하기 위해서 다시 같은 이름으로 선언할 수 없지만,
    interface는 항상 선언적 확장이 가능하다는 것입니다.

# 라이프 사이클
    mount - update - unmount
    함수형
    componentDidMount - componentDidUpdate - componentWillUnmount
    클래스형
    useEffect를 사용할 경우 함수를 반환하면 clean-up 작업을 통해 willUnmount 가능
    그외는 조건을 걸어서 사용가능 [] 초기, [state]

# hooks
    함수형 컴포넌트에서도 클래스형 컴포넌트에서도 사용하던 기능을 사용할 수 있게 했던 기능

# Props Drilling
    하위 컴포넌트가 많아지면서 props로 전달이 많아지면서 유지보수가 힘들어지는 과정

# 페이지
    - SPA
        페이지가 새로고침 되지 않고 다른 페이지로 넘어가지 않습니다.
    - MPA
        여러 개의 페이지로 이루어진 홈페이지
    - CSR
        구동 방식은 초기 로드 시 빈 HTML과 모든 로직이 담겨 있는 Javascript 다운로드를 합니다.
        그 후 빈 HTML에 Javascript를 이용하여 Dom을 동적으로 생성하여 그려 내게 됩니다.
        SEO에 취약
    - SSR
        서버에서 렌더링하여 완성된 HTML 파일을 로드해 줍니다.
        클라이언트에서 요청할 때마다 각 상황에 맞는 HTML 파일을 넘겨주기 때문에 페이지가 여러 가지일 수밖에 없습니다.
        페이지 이동시 느림, SEO 좋음

# 객체지향 프로그래밍
    https://jeong-pro.tistory.com/95

# 리덕스
    액션이 리듀서로 정보를 전달해서 리듀서가 스토어의 상태를 변경한다.
    이때 dispatch()를 이용하며, UI는 스토어를 쳐다보고 있다가 바뀌면 화면을 재랜더링 시킨다.

# 스코프
- 블록스코프
```javascript
let
```
- 함수스코프
```javascript
var
```
- 렉시컬 스코프
```javascript
// 함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정된다
var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // ?
bar(); // ?
```

# 호이스팅
- 코드가 빌드되기 전 변수선언/함수선언이 해당 스코프의 최상단으로 끌어 올려진 것 같은 현상을 말한다.


# 클로져
- 클로져는 어떤 함수(outer) 내부에 선언된 함수(inner)가 바깥 함수(outer)의 지역변수(outerVariable)를 참조하는 것이 함수(outer)가 종료된 이후에도 계속 유지되는 현상을 말합니다.
```javascript
const counterCreator = () => {
  let value = 0;

  return {
    increase() {
      console.log(++value);
    },
    decrease() {
      console.log(--value);
    },
  };
};

const counter = counterCreator();

counter.increase(); // 1
counter.increase(); // 2
counter.decrease(); // 1
```
- 주요 예시는 함수를 연속적으로 실행할때 변수를 저장하고 싶을때 (리액트 훅)
- 변수를 숨기고 싶을때
```javascript

```

- 함수가 독립적으로 동작해야할 때
```javascript
let myValue = 0;
let yourValue = 0;

function increaseMyCounter() {
console.log(++myValue);
};

function decreaseMyCounter() {
console.log(--myValue);
}

function increaseYourCounter() {
console.log(++yourValue);
};

function decreaseYourCounter() {
console.log(--yourValue);
}
  
// 카운터 두 개를 만들기 위해서 두 배의 코드를 작성했습니다. 비효율적입니다!
const counterCreator = () => {
  let value = 0;

  return {
    increase() {
      console.log(++value);
    },
    decrease() {
      console.log(--value);
    },
  };
};

const myCounter = counterCreator();
const yourCounter = counterCreator();

myCounter.increase(); // 1
myCounter.increase(); // 2
yourCounter.increase(); // 1
myCounter.decrease(); // 1
  
```

# 브라우저 실행 순서
## IP주소 확인
- 브라우저는 DNS를 통해 웹 서버의 IP 주소를 파악한다.
## 3-way Handshake
- 브라우저와 서버가 3-way Handshake를 나눈다.
## HTTP Request & Response
- 브라우저가 서버에게 HTTP Request를 보내면, 서버는 브라우저에게 HTTP Response를 보낸다.
## 데이터 Parsing
- 서버로부터 받은 데이터의 HTML을 Parsing하여 Dom Tree를 생성한다.
- 이 때 style 태그를 만나면 HTML Parsing을 중단하고 CSS Parsing하여 CSSOM Tree를 생성한다.
- script 태그를 만나면 HTML Parsing을 중단하고 자바스크립트 엔진에게 권한을 넘겨 Script Parsing하고, Abstract Syntax Tree(AST)를 생성한다.
- Dom Tree와 CSSOM Tree를 합쳐 Render Tree를 생성한다.
- 렌더링 엔진은 Render Tree에 있는 노드를 화면에 배치한다.
- Render Tree에 있는 노드의 UI를 그린다.
- 노드들의 레이어를 z-index에 맞게 순서대로 구성한다.
## 화면 출력
- 

# 로컬 스토리지, 세션 스토리지, 쿠키의 차이
- 로컬 스토리지 : 영구적 보관
- 세션 스토리지 : 탭별로 보관, 탭이 닫히면 초기화
- 쿠키 : 클라이언트 PC에 보관, 만료일 필수, 적은 용량

# 이벤트 버블링
- 자식에서 부모까지 이벤트가 전파되는 것

# 이벤트 캡쳐링
- 부모에서 자식까지 이벤트가 전파되는 것

# 이벤트 버블링을 막는 방법
```javascript
event.stopPropagation()
```

# 뱅크몰
- useEffect, useRef, useState 설명
- spa, mpa 설명과 차이점
- props drilling

# 하이블럭스
- 지원동기 : 요즘 sns가 엄청 활성화 되어있는데, 그것을 한번에 본다는 것에서 기능이 있다는것에 큰 흥미를 느꼈고,
  그걸 블록체인을 이용해서 구현한다고 해서 호기심이 생겼습니다.

- 디자인깨져있는곳이 몇개 보임
- 유튜브 쇼츠랑 인스타 릴스같은거는 큐레이션 못하나요?
- 스페이스를 유튜브 쇼츠처럼 옆으로 넘기는걸로 만들면 더 괜찮을 것 같다.

제가 블록체인은 잘 몰라서 그러는데, 블록체인은 테스트할때 디비를 직접 건드려서 조작을 못하잖아요?
그럼 테스트는 어떻게 하는지?


# 메소드 체이닝
https://developerntraveler.tistory.com/116

# 함수 선언식과 함수 표현식, 차이와 장점
https://string.tistory.com/117
