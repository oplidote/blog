<template>
  <header class="header">
    <div @click="moveHome" class="logo">
      oplinote<span>_</span>
      <p>프론트 엔드 개발자 진현우의 블로그 입니다.</p>
    </div>
    <button class="m-all" @click="navOn" :class="{ active: isNavOn }"></button>
    <!-- <router-link :to="{ name: 'Create' }" class="create-btn"></router-link> -->
    <nav class="nav" :class="{ active: isNavOn }">
      <div class="gnb">
        <div id="html" class="menu" @click="category('html')">
          <span>HTML</span>
        </div>
        <div id="css" class="menu" @click="category('css')">
          <span>CSS</span>
        </div>
        <div id="js" class="menu" @click="category('js')">
          <span>Javascript</span>
        </div>
        <div id="vue" class="menu" @click="category('vue')">
          <span>Vue.js</span>
        </div>
        <div id="etc" class="menu" @click="category('etc')">
          <span>etc</span>
        </div>
      </div>
    </nav>
  </header>
  <div class="contents">
    <router-view />
  </div>
  <footer class="footer"></footer>
</template>

<script>
import { ref } from "vue";
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
      if (winY > 50) {
        $header.addClass("scroll");
      } else {
        $header.removeClass("scroll");
      }
    },
  },
  setup() {
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
      router.push({
        name: "Home",
      });
    };
    const moveCreate = () => {
      router.push({
        name: "Create",
      });
    };
    const category = (_c) => {
      // 중복 체크 시 toggleClass 로 교체할 것
      $('.menu').removeClass("active");
      $(`#${_c}`).addClass("active");
      router.push({
        name: "List",
        params:{
          cate:_c
          }
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
