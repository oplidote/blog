이틀 전 __API__ 의 개념에 대해 공부했다. 정확한 개념에 대해 이해가지 않는 부분이 있었고 그 부분은 API를 직접 핸들링하면서 해소될 것이라 생각했다. 그래서 날씨정보에 대한 오픈 API를 사용하여 간단한 날씨 검색기를 만들어보았다.

## API 제공받기
https://openweathermap.org/
- 사이트 접속 후 __회원가입__ 및 __로그인__ 
- __API__ 카테고리 선택 후 필요한 정보에 대한 __API doc__ 선택
- __API call__ 에 기재된 url로 부터 API를 제공 받을 수 있다.
- 사용하기 전 로그인 키가 필요하므로 사이트 우측 상단 마이페이지에서 My API keys 로 이동 후 Key 복사
- Key 코드를 데이터 요청 시 기재해준다.


## 데이터 요청을 위한 코드 작성
~~~ js
// 검색 지역 입력 후 버튼 클릭 시 goSearch 함수로 진입한다
const goSearch = () => {
    // 입력 값 city : 도시명으로 전달받는다. ex)서울 / 부산 / 의정부 등
      let city = document.getElementById("city").value;

      if (!city) {
        // 입력값이 없을 시 경고문 출력 후 리턴
        alert("검색어를 입력해주세요 !");
        return;
      } else {
        let key = "*****************";
        // API call 에 기재된 url (q = 도시명 / appid = 로그인 키 코드 / units = 기온정보를 화씨가 아닌 섭씨로 요청)
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
        fetch(url)
          .then((res) => {
            // 상태코드 200 정상적으로 응답 시 전달 받은 json 데이터 반환
            if (res.status === 200) {
              showResult.value = true;
              return res.json();
            } else {
            // 정상적인 결과값을 응답 받지 못한 경우
              console.error(`HTTP error! status: ${res.status}`);
              alert(
                "검색에 실패했습니다.조회가 되지 않을 시 지역명을 영문으로 재검색해보세요."
              );
            }
          })
          .then((jsonData) => {
            // id = "temp" 태그에 기온 정보 innerHTML 로 밀어넣기
            temp.innerHTML = `약 ${jsonData.main.temp.toFixed(1)} ℃`;
            // 습도 정보 innerHTML 로 밀어넣기
            humidity.innerHTML = `약 ${jsonData.main.humidity.toFixed(1)} %`;
            // 체감온도 정보 innerHTML 로 밀어넣기
            feel_temp.innerHTML = `약 ${jsonData.main.feels_like.toFixed(1)} ℃`;
            // 날씨 정보 innerHTML 로 밀어넣기
            weather.innerHTML = `${jsonData.weather[0].main}`;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
~~~

## 결과
- fetch 를 이용하여 데이터를 읽기만을 위해 GET 방식으로 서버에게 데이터를 요청했다.
- 전달한 도시명에 해당하는 날씨에 관한 다양한 정보가 담긴 배열을 전달받았다.

# 마치며
생각보다 API를 통해 서버로부터 정보를 받는 것 자체는 어렵지 않았다. 하지만 오픈 API가 아닌 경우 혹은 요청 방식에 따라 복잡해질 것이고 분명 많은 에러를 경험하게 될 것이다. 그렇기 때문에 많은 에러에 대한 예외처리가 필요하며 이를 위해서 여러가지 상황에서의 서버 통신을 경험해야 한다고 본다.