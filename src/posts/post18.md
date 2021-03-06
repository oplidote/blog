## 앞서
개발 관련 유튜브나 글을 보면 아키텍처라는 용어가 자주 등장한다. 개발이 아니라도 한번쯤은 들어본 용어일 것이다. 들을 당시에는 이야기의 흐름이나 뉘앙스로 짐작만 할 뿐 정의는 알지 못했다. 그래서 아키텍처가 무엇인지 알아보았다.

# 아키텍처란?
## 사전적 정의
>구성 요소들간의 관계,환경,설계와 발전을 관리하는 원칙으로 이루어진 시스템의 근본적인 구조
### 소프트웨어 아키텍처
>주요 컴포넌트 사이의 인터페이스와 인터랙션을 포함한 시스템 구조의 설계 유형

### 아키텍처 설계
>개발 중인 시스템에 대한 아키텍처를 정하는 의사 결정 과정

### 컴포넌트
>명백한 역할을 가지고 있으며 독립적으로 존재할 수 있는 시스템의 부분 (같은 기능을 함에 한해서 다른 컴포넌트로 대체가 가능하다.)

### 모듈
>프로그래밍 언어의 문법 구조에서 정의된 컴포넌트
_ex) Java : method class package_

_해당 [링크](https://luv-n-interest.tistory.com/394) 를 참고하여 작성하였습니다._



## 아키텍처의 중요성
소프트웨어 거장인 __마틴 파울러__ 의 아키텍처 관련 연설도 여러번 정독했지만 아키텍처를 추상적으로 이해한 사람들을 대상으로 한 연설이라 내용을 이해하기는 힘들었다. 하지만 __아키텍처의 중요성__ 에 대한 내용은 여러가지 구조체의 개념을 포괄하는 내용이라 어느정도 이해할 수 있었다. 똑같은 기능을 가진 소프트웨어 중에서도 100달러를 추가해서라도 내부적으로 더 좋은 품질의 소프트웨어를 선택해야 하는 이유를 설명했다. 기능의 고도화에 따라 기존의 소스코드를 바꾸는 데 시간이 점차 오래걸린다는 내용이다. 이를 __디자인 스태미너 가설 (Design Stamina Hypothesis)__ 이라고 했다. 정리하자면 __시스템 디자인__ 과 __아키텍처__ 에 대해 고려하지 않으면 업데이트나 유지보수에 있어서 많은 시간이 투자되는 비효율적인 상황을 경험하게 된다는 것이다.
[마틴 파울러 연설 영상 링크](https://youtu.be/DngAZyWMGR0)

## 마치며

여러가지 좋은 자료들을 보았지만 __아키텍처__ 에 대해 컴포넌트를 포함한 전체적인 시스템의 구조(?), 좋은 아키텍처란 지속적인 업데이트와 유지보수가 고려된 체계적인 설계정도로 추상적으로 밖에 이해할 수 없었다. 하지만 아키텍처 설계 뿐만 아니라 프로그래밍에 있어서 좀 더 미래지향적인 사고를 해야 한다고 생각했다. 앞으로 다른 공부를 하거나 프로젝트를 경험하며 __아키텍처__ 에 대한 두루뭉실한 개념이 좀 더 명확하게 정의되었으면 좋겠다.


_+ 아키텍처의 이해를 위한 도움 혹은 그 외의 피드백을 주실 분께서는 페이지 하단을 통해 연락하실 수 있습니다. 감사히 받겠습니다._