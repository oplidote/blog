### 작성 동기

현재 블로그 게시글을 `markdown` (.md) 형식으로 작성 후
불러오는 작업 중에 있다. 과정에서 `vuex` 로 게시글이 담긴 posts 라는 폴더를 가져오기 위해 `vuex` 의 개념에 대해 배우고 과정을 기록으로 남기려한다.
## vuex 란

> `Vuex` 는 애플리케이션의 모든 컴포넌트에 대한 __중앙 집중식 저장소__ 역할을 하는 `Vue.js`의 **상태관리 라이브러리** 이다.
의도에 따라 상태를 변경 및 관리할 수 있다고 한다. 기존 `Flux`의 아키텍처(ㅇ?)를 따라가고 있으며 `react`의 `redux` 를 비교 대상으로 볼 수 있다고 한다. `vue.js` 에서도 `redux` 사용이 가능하나 `vue.js` 는 `vuex` 와 호환이 좋고 더 직관적인 개발이 가능하다고 한다. 

`component` 는 __부모 - 자식__ 관계로 `props` 와 `emit` 를 통해 데이터를 주고 받는다. `vuex` 는 __중앙 집중식 저장소__ 이기 때문에 `props` 와 `emit` 를 신경쓰지 않아도 된다.

그러므로 `component` 의 구조가 복잡할 때에는 `props` 와 `emit` 를 통해 데이터 전달보다는 `vuex` 를 통해 별도의 저장소로부터 데이터를 중앙제어하는 것이 올바르다고 한다.

`vuex` 의 채택은 필수로 보이지만 규모가 작은 경우 __event Bus__ 를 사용 해도 무방하다.
하지만 그 역시도 규모가 조금만 커져도 관리가 힘들어지므로 `vuex` 사용을 추천
~~(대충 `vuex` 쓰라는 뜻)~~

`vuex` 를 이해하고 바로 도입하기에는 난이도가 있다.
컴포넌트의 설계보다 더 __중요한__ 설계라고 한다.
컴포넌트와 다르게 __중앙제어__ 라는 속성 때문이다.
## vuex 의 구조
>`vuex` 의 구조는 `state`,`mutation`,`action`,`getters` 네가지 형태로 관리된다.
이때 이 관리포인트를 `store` 패턴을 사용 흔히 store 라 불린다.
이 네가지는 서로간 간접적 영향이 있고 __단방향 데이터 흐름__ 으로 볼 수 있다.

### state
>`state`는 `vue` 컴포넌트의 data 라고 생각해도 된다. __원본 소스의 역할__ 을 하고 __view와 직접적으로 연결되어 있는 model__ 이다.
이 `state`는 직접적인 변경은 불가능하며 `mutation`을 __통해서만 변경__ 이 가능하다.
`mutation` 을 통해 `state` 가 변경이 되면 반응적으로 `view` 가 업데이트 된다.

### mutations
>`mutation` 은 `state` 를 변경하는 __유일한 방법__ 이고 __이벤트__ 와 유사하다. `mutation` 은 __함수__ 로 구현되며 첫 번째 인자는 `state` 두번째 인자는 `payload` 를 받을 수 있다. 여기서 `payload` 는 여러 필드를 포함할 수 있는 __객체형태__ 도 가능하다. 이 `mutation` 은 일반적으로 직접 호출이 불가능, `commit` 을 통해서만 호출이 가능하다.
_⭐️ `mutations` 에서는 api를 통해 전달받은 데이터를 가공하여 `state` 를 설정하는 데 많이 사용된다고 한다.(실무)_
#### ex) ####
```javascript
store.commit('setData',payload)
```

### actions
> `action` 은 `mutation` 과 비슷하지만 `mutation` 과 다르게 __비동기 작업__ 이 가능하다고 한다.
또한 `mutation` 에 대한 `commit` 이 가능해 `action` 에서도 `mutation` 을 통해 `state` 를 변경할 수 있다.
`action` 에서는 첫 번째 인자를 `context` 인자로 받을 수 있고 이 `context` 에는 `state`, `commit`, `dispatch`, `rootstate` 와 같은 속성들을 포함한다. 두 번째 인자는 `mutation` 과 동일하게 `payload` 로 받을 수 있다.
`commit` 을 통해 `mutation` 을 호출했다면 `action`은 `dispatch`를 통해서 호출한다.
`context` 의 속성을 보면 `dispatch`가 있는 것으로 보아 `action` 에서는 서로 다른 `action` 을 호출할 수 있다는 것을 볼 수 있다.
_⭐️  `actions`은 `axios` 를 통한 api 호출과 그 결과에 대해 반환(return)하거나 `mutation`으로`commit`하여 상태를 변경하는 용도로 사용된다.(실무)_
#### ex) ####
```javascript
store.dispatch('setData',payload)
```

### getters
>`getters` 는 쉽게 vue 컴포넌트에서 `computed` 라고 보면 된다.
말로 풀자면 __계산된 속성__ `getter` 의 결과는 종속성에 따라 캐시되고 일부 __종속성__ 이 변경된 경우에만 다시 __재계산__ 된다.
즉, 특정 `state`에 대해 어떠한 연산을 하고 그 결과를 `view`에 바인딩 할 수 있으며, `state` 의 변경 여부에 따라 `getter`는 재계산이 되고 `view` 역시 업데이트를 일으킨다.
이때 `state` 원본 데이터로서 변경은 일어나지 않음!
_⭐️ 실무에서도 `state`의 연산 처리가 필요한 내용에 대해 `getter` 를 사용하지만 `getters`의 경우 대용량 처리 시에 퍼포먼스와 연관이 되어있으므로 조심해야 한다고 한다고 한다고 한다._

## 마치며
`vuex` 의 기초적인 개념에 대해 알아보았다.
설치와 관련한 내용은 아래 링크를 참고하면 된다.

해당 게시글은 [이 곳](https://kdydesign.github.io/2019/05/09/vuex-tutorial/) 을 참고하여 작성되었습니다.
