<template>
  <header class="header">
    <router-link :to="{ name: 'List' }" class="logo" @click="category()">
      oplinote<span>_</span>
      <p>프론트 엔드 개발자 진현우의 블로그 입니다.</p>
    </router-link>
    <button class="m-all" @click="navOn" :class="{ active: isNavOn }"></button>
    <!-- <router-link :to="{ name: 'Create' }" class="create-btn"></router-link> -->
    <nav class="nav" :class="{ active: isNavOn }">
      <div class="gnb">
        <div id="html" class="menu" @click="category('html')">
          <span class="category">HTML</span>
        </div>
        <div id="css" class="menu" @click="category('css')">
          <span class="category">CSS</span>
        </div>
        <div id="js" class="menu" @click="category('js')">
          <span class="category">JavaScript</span>
        </div>
        <div id="vue" class="menu" @click="category('vue')">
          <span class="category">Vue.js</span>
        </div>
        <div id="etc" class="menu" @click="category('etc')">
          <span class="category">etc</span>
        </div>
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
            <li><a href="https://github.com/oplidote" class="link-box" id="github" target="_blank"></a></li>
            <li><a href="https://www.instagram.com/wlsusn/" class="link-box" id="instagram" target="_blank"></a></li>
            <li><a href="https://open.kakao.com/o/sxZVj0de" class="link-box" id="kakaotalk" target="_blank"></a></li>
            <li><a href="mailto:jkr2505@naver.com" class="link-box" id="mail" target="_blank"></a></li>
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
import $ from "jquery";

export default {
  name: "App",
  components: {},
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
    })
    const router = useRouter();
    // 변수
    const isNavOn = ref(false);
    const isMenuOn = ref(false);

    // all button
    const navOn = () => {
      if (isNavOn.value == false) {
        isNavOn.value = true;
      } else if (isNavOn.value == true) {
        isNavOn.value = false;
      }
    };
    // all menu
    const menuOn = () => {
      if (isMenuOn.value == false) {
        isMenuOn.value = true;
        console.log("d");
      } else if (isMenuOn.value == true) {
        isMenuOn.value = false;
      }
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
    const category = (_c) => {
      // 중복 체크 시 toggleClass 로 교체할 것
      $(".menu").removeClass("active");
      $(`#${_c}`).addClass("active");
      router.push({
        name: "List",
        params: {
          cate: _c,
        },
      });
    };

    return {
      useRouter,

      navOn,
      isNavOn,
      menuOn,
      isMenuOn,
      moveHome,
      moveCreate,
      category,
    };
  },
};
</script>

<style>
</style>
