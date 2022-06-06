## 게시물 상세 보기
리스트에 출력된 게시물을 클릭 시 해당 글로 이동하게 하려고 한다.
- List의 post-box에 @click를 이벤트를걸어주었다.
- movePost 함수를 실행하도록 하였고 파라미터로 `item.id` 를 넘겨주었다.
``` html
<div class="post-box" @click="movePost(item.id)">
```

- router 로 name 과 prams를 밀어준다.
``` javascript
const movePost = (_id) => {
      router.push({
        name: "Post",
        params: {
          id: _id,
        },
      });
    };
```
- router/index.js 에 사용할 컴포넌트를 추가
- params로 전달을 위해 props : true 도 추가
``` js
{
	path: '/post',
	name: 'Post',
	component: PostView,
	props: true,
},
```


- 게시물 상세내용을 출력해 줄 PostView.vue 를 생성한다
- `props` 로 `id`값을 전달받는다.
- data.json 파일 import
- post() 객체에서 post.id 가 담긴 Number type 의 props를 파라미터로 넣어준다.
- 전달해 준 props를 이용하여 data.json 파일의 post 배열의 props 번째 데이터를 리턴해준다.
- props.id 는 1부터 시작하지만 배열은 0번째 시작이므로 -1 해준다.
``` js
// PostView.vue
import PostsList from "@/assets/data.json";
export default {
  props: {
    id: Number,
  },
  computed: {
    post(props) {
      return PostsList.post[props.id - 1];
    },
  },
},
```
- 이 후 템플릿에서 사용할 post 배열에 담긴 data를 아래처럼 작성한다
- 선택한 게시물에 대한 내용이 출력된다.
``` html
<h1 class="post-tit">{{ post.title }}</h1>
<span class="post-date">{{ post.date }}</span>
<span class="post-cate">{{ post.category }}</span>
```

## 문제

게시글 상세 컴포넌트 제작 중 
뒤로가기 버튼을 만들던 도중 문제가 발생했다.
``` html
<button class="back" onclick="history.back()"></button>
```
history.back() 함수를 사용하면 바로 전 url 로 돌아간다.
하지만 list 의 url 은 카테고리를 선택하더라도 변함 없이  '/' 이다
그렇기 때문에 예를 들어
vue 카테고리를 선택 후 특정 게시물로 진입 후 뒤로가기 할 시 vue 카테고리를 다시 보여주는 게 아닌 total 로 돌아간다.
### 해결시도
- 모든 카테고리 버튼을 div >  router-link 로 수정했다.
- 이후 router/index.js 에서 카테고리별 url을 다르게 수정했다.

### 결과는 실패

- url 은 다르게 했으나 같은 component를 사용하기 때문이다.

### 해결시도
- params 로  postView.vue 컴포넌트 진입 시 바로 전 페이지의 카테고리를 전달해준다.
- 뒤로가기 버튼을 router-link 로 수정 후   클릭 시 params 로 전달 받았던 카테고리를 다시 넘겨준다.

### 또 실패
- 같은 컴포넌트를 사용함에 있는 문제인 것 같다.

cache 를 배우면 해결할 수 있는 부분인 것 같다.
잠시 버튼 기능은 비활성화 하고 텍스트 출력으로..

### prism 문제

- 예전에 v-show 로 해결했던 pre 태그에 클래스가 사라져 클래스에 부여돼있던 스타일시트 속성들이 사라지는 문제가 게시물 상세보기로 갈 때 다시 나타났다.

### 해결
- 개발자 도구에서 확인해본결과 코드블럭 속의 언어에 대한 각각의 스타일시트가 아닌 코드블럭 전체에 대한 별개가 아닌 공통적인 클래스였다
- 사라진 pre 태그에 대한 css 속성을 직접 부여해주어 해결하였다.

### 결론
- 사라진 이유에 대해서는 router와 관련있는 것 같고 공부를 하다보면 자연스레 알게 될 것 같다.
- pre 태그에 대한 커스터마이징을 할 수 있어서 오히려 좋은 오류였다..ㅋㅋㅋ




