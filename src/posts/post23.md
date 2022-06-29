``` js
// Infinity 는 무한대의 속성을 나타냄
console.log(Infinity) // Infinity
console.log(Infinity + 1) // Infinity
console.log(Infinity - 1) // Infinity
console.log(Infinity / 1) // Infinity
console.log(Infinity * 1) // Infinity
console.log(100 / 0) // Infinity
// Math.pow(base, exponent) : base의 exponent 제곱
console.log(Math.pow(100, 1000000)) // Infinity
------------------------------------------
// base(밑)가 음수이고 exponent(지수)가 분수 이면 NaN
Math.pow(-7, 1/3); // NaN
console.log(NaN) // NaN
// 해당 값이 NaN 인지 판별
console.log(isNaN(NaN)) // true
// isNaN() 은 몇몇 혼란스러운 케이스를 가지고 있어 ES2015 문법인 Number.isNaN() 을 권장
------------------------------------------
console.log(undefined)
let x;
console.log(x)
------------------------------------------
console.log(null) // null
console.log(null + 1) // 1
// == (Equal Operator) : 값을 비교한다.
// null 과 undefined 둘다 값이 없음을 뜻하기 때문에 true를 출력한다.
console.log(null == undefined) // true
// === (Strict Equal Operator) : 값과 값의 종류 (Data Type)까지 "엄격하게 비교"한다.
// null 의 값의 종류는 object undefined는 undefined 이므로 false를 출력한다.
console.log(null === undefined) // false
// typeof() 객체를 통해 값의 종류를 확인할 수 있다.
console.log(typeof(null)) // object
console.log(typeof(undefined)) // undefined
------------------------------------------
// parseInt(A,B) : A는 B진수이니 10진수로 변환하라.
// 숫자의 데이터타입이 문자열인 경우도 정수형으로 반환된다.
console.log(parseInt('100')) // 100
// 숫자가 아닌 문자를 만나는 즉시 중단된다.
console.log(parseInt('1003d1d2f3d952')) // 1003
// Number는 숫자가 아닌 문자를 포함되어 있으면 NaN을 반환한다.
console.log(Number('1003d1d2f3d952')) // NaN
// 숫자가 아닌 문자를 만나 NaN이 출력되는 모습 !
console.log(parseInt('d1')) // NaN
// 정수형 반환이기 때문에 소수점은 잘라냄
console.log(parseInt('100.123')) // 100
// 실수형 반환을 위한 parseFloat !
console.log(parseFloat('100.123')) // 100.123
console.log(parseFloat('100.123000')) // 100.123
console.log(parseFloat('100.1,2,3000')) // 100.1
// 10진수의 100을 10진수로 변환
console.log(parseInt(100,10)) // 100
// 16진수의 100을 10진수로 변환
console.log(parseInt(100,16)) // 256
// 8진수의 100을 10진수로 변환
console.log(parseInt(100,8)) // 64
// 2진수의 100을 10진수로 변환
console.log(parseInt(100,2)) // 4
------------------------------------------
let arr = [10,2,3,22,33,100,11]
let arr2 = [12,13]
// 두 배열을 이어붙힌 값을 반환 원본값에 직접적인 영향을 주지 않음
console.log(arr.concat(arr2))
// stack : First In Last Out
// 배열의 마지막 값을 제거하고 해당 값을 반환
console.log(arr.pop()) // 11
// 배열의 마지막에 값을 추가하고 배열의 길이를 반환
console.log(arr.push(1000)) // 8

// queue
// 배열의 첫번째 값을 제거하고 해당 값을 반환
console.log(arr.shift()) // 10
// 배열의 첫번째 자리에 값을 추가하고 배열의 길이를 반환
console.log(arr.unshift()) // 8
------------------------------------------
// 배열의 모든 요소를 123로 채운 후 해당 배열값으로 반환
console.log(arr2.fill(123)) // [123,123]
// 조건에 성립하는 값만 출력 x : arr안의 원소를 뜻함
// 배열 값이 문자인 경우 x.length 로 문자열의 길이도 가능
console.log(arr.filter(x => x > 30)) // [33,100]

let arr3 = [[1,2],3,[4,5,[6,7]]];
// 다차원 배열을 한 차례 벗겨낸다.
console.log(arr3.flat()) // [1,2,3,4,5,array(2)]
// 두번에 걸쳐 배열을 벗겨낸다.
console.log(arr3.flat(2)) // [1,2,3,4,5,6,7]
// 배열 내 해당 값이 있는 지 찾아낸다. n차원 배열일 경우 찾지 못함
console.log(arr.includes(10)) // true
// 배열 내 값을 하나의 문자열로 만든다.
console.log(arr.join('')) // 1023223310011
// 배열을 콜백함수에 의해 새로운 배열 재정의한다.
function Fn(x){ return parseInt(x)}
let arr3 = ['1','2','3'];
console.log(arr3.map(Fn)) // [1,2,3]
console.log(arr3.map(x => parseInt(x))) // [1,2,3]
// 배열을 사전식으로 정렬
console.log(arr.sort()) // [10, 100, 11, 2, 22, 3, 33]
// 배열을 역순으로 정렬
console.log(arr.reverse()) // [11, 100, 33, 22, 3, 2, 10]
// 요소를 삭제 및 교체한다.
// 2 번째 요소에 1개를 제거하고 'hi'를 추가한다.
// 제거된 값을 반환
console.log(arr.splice(2,1,'hi')) // [3]
console.log(arr) // [10, 2, 'hi', 22, 33, 100, 11]
// 요소를 인덱스 기준으로 잘라냄
// 3번쨰 부터 6번째 전까지 ( 3, 4, 5) 잘라냄
console.log(arr.slice(3,6)) // [22, 33, 100]
// 기존 배열 값에 영향을 주지 않음.
console.log(arr) // [10, 2, 3, 22, 33, 100, 11]
```

