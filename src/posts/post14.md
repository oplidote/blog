## fetch 이해하기
클라이언트와 서버가 통신할 때 클라이언트는 fetch() 함수로 요청한다.
서버는 요청에 맞는 데이터를 제공해준다.
응답에는 시간이 걸릴 수 있는 데 그 동안 클라이언트가 아무 것도 하지않으면 비효율적일 것이다. 그것을 위한 함수가 .then() 이다.
.then() 은 웹 브라우저가 서버로부터 응답 받는 것이 끝나면 호출된다.
fetch() 의 실행되고 완료여부와 상관없이 다음 코드가 진행된다.
이를 비동기적 실행, 실행을 끝마친 후에 다음 코드가 실행되는 것을 동기적인 실행이라고 한다.
then을 비롯한 이를 비동기 함수(Asynchronous)라고 한다.


``` js
function callbackme() {
  console.log("response end");
}
fetch("api").then(callbackme();
console.log("1");
console.log("2");

// console
> 1
> 2
> response end
```
.then() 이 console.log 보다 위에 작성되어 있지만 마지막에 실행되는 것을 볼 수 있다.

- fetch(API주소,옵션)로 사용되며 API주소와 옵션을 인자로 사용한다.
- 옵션은 필수 인자가 아니다.
- promise 타입의 객체를 반환한다.