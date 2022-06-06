## 문제 발생
- 현재 카테고리에서 다른 카테고리로 이동 시 `prism.js` 가 코드블럭에 대해 부여해주었던 `class` 가 제거되는 현상이 발생했다.

## 해결
`v-if`를 사용하였기 때문에 다른 카테고리 이동 시에 `html` 내 태그 자체가 제거되는 것이였고 태그자체를 제거하지 않고 `display:none` 스타일 속성을 부여하는 `v-show` 로 수정하여 문제를 해결하였다.

## 게시글 작성일자 추가하기
- .md 파일의 생성일과 수정일 정보를 가져오려했지만 
해당 정보 역시 `fileSystem api` 를 사용해야 했고 보안상 프론트엔드에서 수행할 수 없는 작업이다.

- 어쩔 수 없이 해당 .md 파일 생성일자를 로컬에서 확인 후 json 파일 "date" 데이터에 수기로 작성해주었다.
`isO-8601` 방식으로 작성하여 별도의 파싱 없이 `Date()` 객체에 넣을 수 있었다.

이 후 아래와 같이 현재 일자와 파일 생성일자의 격차를 구하여 기간 별로 다른 멘트를 리턴한다.

``` js
const postDate = (_createDate) => {
      
      let date1 = new Date(); // 현재 일자
      let date2 = new Date(_createDate); // 파일 생성일자
      // 일자의 격차 구하기
      const diffDate = date1.getTime() - date2.getTime();
      // 분 단위로 변경
      let diffMin = parseInt(diffDate / (1000 * 60));

      // 1 시간 이내
      if (diffMin < 60) {
        return diffMin + "분 전";
      } 
      // 1시간 ~ 24시간 이내
      else if (diffMin > 60 && diffMin < 60 * 24) {
        return parseInt(diffMin / 60) + "시간 전";
      }
      // 하루 전 ~ 이틀 전
      else if (60 * 24 < diffMin) {
        if (120 * 24 < diffMin) return "이틀 전";
        else return "하루 전";
      }
      // 이 후
      else if (180 * 24 < diffMin) {
        return parseInt((diffMin / 60) * 24) + "일 전";
      }
      return diffMin;
    };
```

## 최신글 상단 게시
- 게시글에 일자를 추가하고 나서야 블로그가 이상함을 느꼈다. 
- 오래된 글이 위에 있고 최신글이 밑으로 쌓여 사용자 경험상 좋지 못하다고 판단되었다.

>`reverse()` 객체를 이용하여 배열을 역순으로 정렬 시도 하였으나 post 파일을 배열을 통해 가져온 것이 아니기 때문에 해결할 수 없었다.

## css 를 이용하여 해결
- 고민 끝에 post가 나열돼있는 list-wrap 에 
`flex-direction : column-reverse`
속성을 부여했다.
``` css
.list-wrap {
        display: flex;
        flex-direction: column-reverse;
        .post {
        	---
        }
    }
```
효율적으로도 나쁘지 않은 해결 방법인 것 같아 불편함 없이 채택했다.

_ ps 코딩 15시간 째 슬슬 피폐해지는 기분이다..
시간이 너무 빨리 가는 듯 하다..다음에 계속..!반응형도 해야지!_