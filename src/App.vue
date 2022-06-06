<template>
  <header class="header">
    <router-link :to="{ name: 'List' }" class="logo" @click="goTop()">
      plinote<span>_</span>
      <p>프론트 엔드 개발자 진현우의 블로그 입니다.</p>
    </router-link>
    <button class="m-all" @click="navOn" :class="{ active: isNavOn }"></button>
    <!-- <router-link :to="{ name: 'Create' }" class="create-btn"></router-link> -->
    <nav class="nav" :class="{ active: isNavOn }">
      <div class="gnb">
        <router-link :to="{ name:'Html', params:{cate:'html'} }" id="html" class="menu">
          <span class="category">HTML</span>
        </router-link>
        <router-link :to="{ name:'Css', params:{cate:'css'} }" id="css" class="menu">
          <span class="category">CSS</span>
        </router-link>
        <router-link :to="{ name:'Js', params:{cate:'js'} }" id="js" class="menu">
          <span class="category">JavaScript</span>
        </router-link>
        <router-link :to="{ name:'Vue', params:{cate:'vue'} }" id="vue" class="menu">
          <span class="category">Vue.js</span>
        </router-link>
        <router-link :to="{ name:'Etc', params:{cate:'etc'} }" id="etc" class="menu">
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
    });
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
    const goTop = () => {
        window.scroll({ top: 0 });
    };

    return {
      useRouter,
      navOn,
      isNavOn,
      menuOn,
      isMenuOn,
      moveHome,
      moveCreate,
      goTop,
    };
  },
};
</script>

<style>
</style>
