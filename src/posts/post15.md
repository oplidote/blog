게시글의 태그가 카테고리 목록에 없는 태그일 경우 '기타' 카테고리로 분류되도록 하는 코드를 작성해야한다.
특정 문자를 찾아내 해당 문자의 index를 반환하는 __indexOf()__ 로 구현했다.
목록에 없는 경우 -1 를 반환하도록 되어있는 특징을 이용했다.

``` js
// 다섯 종류의 카테고리가 담긴 배열 cateList
const cateList = ['html','css','js','vue','etc'];
// 게시글의 태그를 통해 게시글의 카테고리를 분류하는 함수 cateSort()
const cateSort = (_c) => {
  // 게시글의 태그가 카테고리목록에 존재하지 않을 시
  // 게시글의 태그를 기타('etc')로 변경 후 진행
  if (cateList.indexOf(_c) == -1) _c = 'etc';
  // indexOf 는 해당 인자가 목록에 존재하지 않을 시
  // -1 를 반환하도록 되어있다.

  // 게시글의 태그와 사용자가 선택한 카테고리(props.cate)가 
  // 일치하면 true를 반환하여 해당 글을 보여 줌
  if (props.cate == _c) {
    return true;
  } 
  // 사용자가 카테고리를 선택하지 않은 경우
  // 태그와 상관없이 true를 반환하여 모든 글을 보여줌
  else if (props.cate == "") {
    return true;
  }
};
```

