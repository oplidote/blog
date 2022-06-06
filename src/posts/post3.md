## 작성 동기
블로그를 제작하면서 카테고리에 해당 되는 게시물만 출력시키기 위해 v-if 와 v-show 에 대해 알아 보았고 둘에 차이점도 존재했다.
이에 대한 기록을 하고자 한다.

### v-if
우선 v-if 는 조건에 해당되지 않으면 렌더링을 하지않는다.

``` html
<div v-if="true">True</div>
<div v-if="false">False</div>
```
### v-else
v-if 와 함께 사용되는 v-else 는 v-if 가 조건에 해당하지 않을 경우 렌더링된다.
``` html
<div v-if="false">true 아니면 안나가</div>
<div v-else>유감입니다..어떻게 이거라도..출력을</div>
```
### v-show
v-show 는 v-if 와 결과는 같을 수 있지만 v-show 는 조건에 해당하지 않더라도 태그를 렌더링을 하지만 `display:none` 처리 시킨다.
``` html
<div v-show="true">True</div>
<div v-show="false">False</div>
```
