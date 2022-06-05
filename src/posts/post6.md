## 작성동기
md 파일을 출력에 성공한 나 자신.. 기쁨도 잠시..
아래 문제에 봉착했다.
- marked.js 는 ``` 코드블럭을 지원하지 않는 것 같다.
- 감싸진 것들이 날 것 그대로 출력되고 있다.
- 해결을 위해서 prism.js 를 사용한다고 한다.
- prism.js 는 marked.js 가 지원하지 않는 코드블럭 양식에 대해 지원하고 특정 태그로 감싸주는 고마운 역할을 한다고 한다.


1. prism.js 를 설치 해준다.
>$ npm install --save prismjs
2. prism.js 패키지와 구성요소들을 import 했다.

```javascript 
import { marked } from "marked";
import prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-liquid";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-php";
import "prismjs/components/prism-scss";
```

3. 그리고 marked 에게  prism 구성요소를 사용하도록 해주었다.

>``` javascript
marked.setOptions({
  highlight: (code, lang) => {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang);
    } else {
      return code;
    }
  },
});

4. 그 후 옵션이 부여된 marked 를 사용해본다.

``` javascript
marked.parse(text)
```

정상적으로 출력된다 !

### 여기서 잠깐 ! 
적용 후 지켜보니
- marked.js 에서는 > 인용문 지원이 안되는 것 같았다.
- 조금 더 파보니 html 상에는 `<blockquote>` 태그로 인용문이 들어가있다.
- 결론적으로 지원은 되지만 디자인(css)이 따로 없는 것 같다.
- 그래서 아래 처럼 blockqoute 에 대한 css 구문을 추가했다.
- css는 자신있기 때문에..! 소소한 재미를 또..!
``` css
blockquote {
	padding-left: 20px;
	border-left: 3px solid #3d3dff;
	}
```

### 죄송합니다 한번만 더 멈춰 !!


사실 안 멈춰도 됩니다.
문제가 있어서는 아니구요.

- 링크로 클릭 시 페이지를 탈출 이동 한다는 점
- target="_blank" 옵션을 갖고 싶다는 말입니다.

marked.js 에서 `target` 은 지원하지 않는 것 같습니다.
이 부분 역시 marked.js 옵션을 부여해주어야 합니다.

_제가 불편한 걸 그냥 못 넘어가서 죄송합니ㄷ.._

## 렌더러속성
- 우선 marked.js 의 렌더러 함수를 변수에 담아준 후
- 링크에 해당하는 부분에 replace 함수로 target 속성을 부여해주는 방식입니다.

뭔가했는데 잘 보니 생각보다 단순한 방법이네요
``` js
const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
      const html = linkRenderer.call(renderer, href, title, text);
      return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
    };
```

## 기존에 있던 코드에서 renderer 추가
``` js
marked.setOptions({
      renderer: renderer, // 이 부분 추가해주었습니다.
      highlight: (code, lang) => {
        if (prism.languages[lang]) {
          return prism.highlight(code, prism.languages[lang], lang);
        } else {
          return code;
        }
      },
    });
```

코딩 인생 얼마 안 됐지만 몇 안되는 속전속결의 순간..
별 오류없이 잘 진행된..
어려운 내용은 아니였지만 뭔가를 사례와 검색에 이해하고 해결했다는 것이 뿌듯..
그 와중에 빠르게 해결이 또 되다니..신기하다
~~오늘 삽질 12시간째인건 비밀~~


해당 게시글은 [이 곳](https://benborgers.com/posts/marked-prism) 을 참고하여 작성되었습니다.
