## 작성동기
현재도 블로그 제작 중에 있고 블로그를 제작하며 한없이 부족함을 느끼고 있다.
`store/index.js` 의 `modules` 에서 import 된 디렉토리 default 를 불러오면 해당 디렉토리의 `index.js` 를 자동으로 찾는 듯하다.


## 디렉토리 내용물 한번에 import 하기

1. import 할 디렉토리에 `index.js` 생성 후 아래 내용 작성
``` javascript
const files = require.context('.', false, /\.확장자명$/)
const modules = {}
files.keys().forEach((key) => {
  if (key === './index.js') return
  modules[ key.replace(/(\.\/|\.확장자명)/g, '') ] = files(key).default
})
export default modules
```
2. 확장자명 부분 import 할 내용물의 확장자로 변경

왜 md 파일만 raw-loader 가 그대로 가져오지 못하는 거지..?
txt는 있는 그대로 가져오는데 md 는 이상하게 나온다..
다른 플러그인과 충돌이 있는건가..
일단 설치한 플러그인을 삭제 후 다시 진행..

+뒤늦은 해결
 - 우선 inline 방식으로 raw-loader! 를 기재함으로써 파일을 있는 그대로 읽어온다.
 - 하지만 raw-loader! 의 위치가 잘못되었다. 읽어오는 위치에 있어야 하는 데 읽어온 후의 엉뚱한 위치에 있었기 때문..!

## 디렉토리 파일 배열로 리턴받기
디렉토리 내용물들을 배열로 리턴해주는 함수를 찾아보니
fliesystem api 가 있었다. 
`fs.readdir()` 를 사용하면 아주 간단하게 가져올 수 있을 것 같았다.
그런데..구글링을 하는데 모든 글에 `node.js` 가 태그돼있었다..
불안감이 엄습했고..
아니나 다를까 fs 는 백엔드에서 사용가능하고 프론트엔드(클라이언트)에서는 
보안상의 이유로 사용할 수 없다.(사실 생각해보면 당연한 거 였음ㅋㅋ)

결론적으로 뭐 일단 안되는 이유를 확실하게 알아서 좋고 또 안돼서 싫은ㅋㅋㅋ
다음 방법으로 가보자~

## 다음 방법
디렉토리에 파일을 배열로 받지 못했기 때문에 다른 방법을 선택했다.


### script
``` javascript
// _index 는 v-for="(item,index) in posts 의 index

const markText = (_index) => {
      let text = marked(require(`raw-loader!../posts/post${_index}.md`).default.replace(/\n|#|__|```|~~/g, ""));
      return text;
    }
```
1. 우선 .md 파일들의 이름을 통일 했다 (ex : post1.md / post2.md / post3.md)
2. marked.js 를 이용하여 .md 파일을 읽게끔 해주었다.
2. 블로그 글 목록의 내용물이기 때문에 replace로 개행과 마크다운 특문 제거 후 text 를 리턴

### templete

```html
    // v-if 로 해당 카테고리에 해당하는 글만 출력되게 했다.
<div class="post-box" v-if="cateSort(item.category)">
		// 파일명(post1.md)이 1부터 시작하기 때문에 index + 1
        <div v-html="markText(index + 1)" class="post-cont"></div>
</div>

```

드디어 카테고리별로 글들이 정상 출력된다.

하지만 보란듯이 문제점이 있다.
- post1.md post2.md 처럼 제목을 통일 해야 한다.
- 해당 글에 대한 카테고리를 json 파일에 따로 기재해주어야 한다.

하지만 전체적인 틀을 갖추고 세부적인 개선이 필요하다고 판단했다.

굳이 안 적어도 프로불편러라 알아서 투머치 개선하겠지만..
혹시나 하는 마음에 문제점을 기재한다.
미래의 나자신 해결 '해 줘'

