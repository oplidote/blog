# 변수
ES6 문법부터 `let`과 `const` 가 생겼다.이 전에는 `var` 가 존재했다.

`var` `let` `const` 세 변수의 차이점에 대해 알아보자.

``` js
var number = 1;
console.log(number); // 1
var number = 2;
console.log(number); // 2
```
위 코드는 오류가 발생하지 않는다.
`var` 는 한번 선언된 변수를 다시 선언할 수 있다.

``` js
let number = 1;
console.log(number); // 1
let number = 2;
console.log(number); // error!
```
같은 변수를 `let`으로 선언했을 경우 오류가 발생한다.

# 호이스팅
`var` 는 선언하기 전에 사용할 수 있다.
``` js
console.log(number); // undefined
var number = 1;
```
`var` 는 아래 코드처럼 실질적으로 코드가 옮겨지진 않지만 최상위로 끌어올려진 것처럼 동작한다.
``` js
var number;
console.log(number); // undefined
number = 1;
```
이를 __호이스팅(hoisting)__ 이라고 한다. 하지만 선언은 호이스팅이 되지만 값은 호이스팅이 되지 않는다. 고로 undefined 가 출력되는 것을 볼 수 있다.

## let 과 const 는 호이스팅이 일어나지 않을까?
아래처럼 `let` 변수를 선언 전에 사용하면 에러가 발생한다.
``` js
console.log(number); // ReferenceError
let number = 1;
```
이를 통해 `let` 변수는 호이스팅이 일어나지 않는다고 생각할 수 있지만 사실 `let` 과 `const` 모두 __호이스팅__ 이 일어난다. 그런데 왜 `let` 과 `const` 는 에러가 출력되는 것일까?

## TDZ(Temporal Dead Zone)
`let` 과 `const` 가 호이스팅이 되지만 에러가 발생하는 이유는 __TDZ(Temporal Dead Zone)__ 때문이다. __TDZ__ 는 `let` 과 `const` 가 실질적으로 선언된 위치 이 전의 영역이다. `let` 과 `const` 가 호이스팅이 된다하더라도 __TDZ__ 에서 사용될 시 에러를 출력한다.