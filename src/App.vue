<template>
  <div class="theme"></div>
  <header class="header">
    <div class="container">
      <router-link :to="{ name: 'List' }" class="logo" @click="goTop()">
        plinote<span>_</span>
        <p>프론트 엔드 개발자 진현우의 블로그 입니다.</p>
      </router-link>
      <div class="user-area">
        <button class="mode" @click="modeChange"></button>
        <div class="search-form" :class="{ active: isSearchOn }">
          <button class="search" @mouseenter="isSearchOn = true"></button>
          <input
            class="form-control"
            placeholder="준비 중입니다."
            @mouseleave="isSearchOn = false"
          />
        </div>
        <button
          class="cate-btn"
          :class="{ active: isBtnOn }"
          @click="navOn"
        ></button>
      </div>
    </div>
<Snakke />

    <!-- <router-link :to="{ name: 'Create' }" class="create-btn"></router-link> -->
    <nav class="nav" :class="{ active: isNavOn }">
      <div class="gnb">
        <router-link
          :to="{ name: 'Html', params: { cate: 'html' } }"
          id="html"
          class="menu"
        >
          <span class="category">HTML</span>
        </router-link>
        <router-link
          :to="{ name: 'Css', params: { cate: 'css' } }"
          id="css"
          class="menu"
        >
          <span class="category">CSS</span>
        </router-link>
        <router-link
          :to="{ name: 'Js', params: { cate: 'js' } }"
          id="js"
          class="menu"
        >
          <span class="category">JavaScript</span>
        </router-link>
        <router-link
          :to="{ name: 'Vue', params: { cate: 'vue' } }"
          id="vue"
          class="menu"
        >
          <span class="category">Vue.js</span>
        </router-link>
        <router-link
          :to="{ name: 'Etc', params: { cate: 'etc' } }"
          id="etc"
          class="menu"
        >
          <span class="category">etc</span>
        </router-link>
      </div>
    </nav>
  </header>
  <div class="contents">
    <router-view />
  </div>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <router-link :to="{ name: 'List' }" class="logo" @click="category()">
          oplinote<span>_</span>
        </router-link>
        <div class="contact">
          <ul class="sns-link">
            <li>
              <a
                href="https://github.com/oplidote"
                class="link-box"
                id="github"
                target="_blank"
              ></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/wlsusn/"
                class="link-box"
                id="instagram"
                target="_blank"
              ></a>
            </li>
            <li>
              <a
                href="https://open.kakao.com/o/sxZVj0de"
                class="link-box"
                id="kakaotalk"
                target="_blank"
              ></a>
            </li>
            <li>
              <a
                href="mailto:jkr2505@naver.com"
                class="link-box"
                id="mail"
                target="_blank"
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <span class="copy">© 2022 oplinote. All Rights Reserved.</span>
    </div>
  </footer>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Snakke from './components/SnakkeLib.vue';
import $ from "jquery";

export default {
  name: "App",
  components: {
    Snakke,
  },
  mounted() {
    document.addEventListener("scroll", this.headerScroll);
  },
  methods: {
    // header motion
    headerScroll: function () {
      const winY = window.scrollY;
      let $header = $(".header");
      if (winY > 30) {
        $header.addClass("scroll");
      } else {
        $header.removeClass("scroll");
      }
    },
  },
  setup() {
    onMounted(() => {
      router.push({
        name: "List",
      });
    });
    // 날씨 
    let key = "89387cb975ca5ede5877cd62d36ec15c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=daegu&appid=${key}&units=metric`;
    fetch(url)
    .then((res) => {
      if (res.status === 200) {
              return res.json();
            } else {
              console.error(`HTTP error! status: ${res.status}`);
              alert(
                "검색에 실패했습니다.조회가 되지 않을 시 지역명을 영문으로 재검색해보세요."
              );
            }
    })
    .then((jsonData) => {
      document.body.classList.add(jsonData.weather[0].main);
    })
    .catch((err) => {
      console.log(err);
    })
    const router = useRouter();
    // 변수
    const isMenuOn = ref(false);
    const isNavOn = ref(false);
    const isBtnOn = ref(false);
    const isSearchOn = ref(false);
    // all button
    const navOn = () => {
      const winY = window.scrollY;
      console.log(winY);
      if (isNavOn.value == false) {
        isNavOn.value = true;
        isBtnOn.value = true;
      } else if (isNavOn.value == true) {
        isNavOn.value = false;
        isBtnOn.value = false;
      }
      isSearchOn.value = false;
    };
    const DeleteActive = () => {
      isNavOn.value = false;
      isSearchOn.value = false;
    };
    // all menu
    const menuOn = () => {
      if (isMenuOn.value == false) {
        isMenuOn.value = true;
      } else if (isMenuOn.value == true) {
        isMenuOn.value = false;
      }
    };
    const modeChange = () => {
      $("body").toggleClass("light");
    };
    // 메인 이동
    const moveHome = () => {
      $(".menu").removeClass("active");
    };
    const moveCreate = () => {
      router.push({
        name: "Create",
      });
    };
    const goTop = () => {
      window.scroll({ top: 0 });
    };

    return {
      useRouter,
      modeChange,
      navOn,
      isNavOn,
      isBtnOn,
      menuOn,
      isMenuOn,
      isSearchOn,
      DeleteActive,

      moveHome,
      moveCreate,
      goTop,
    };
  },
};
</script>

<style>
</style>
