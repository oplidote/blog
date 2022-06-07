<template>
  <div class="container" id="post-view">
    <div class="post-wrap">
      <div class="post-control"></div>
      <div class="post-header">
        <h1 class="post-tit">
          <span>{{ post.title }}</span>
        </h1>
        <div class="post-cate">
          <span>{{ cateText(post.category) }}</span>
        </div>
        <span class="post-date">{{ postDate(post.date) }}</span>
      </div>
      <div class="post-contents">
        <div v-html="markText(post.id)" class="post-txt"></div>
      </div>
      <div class="post-footer">
        <div class="post-author">
          <span class="author-name"><strong>진현우</strong>hyunwoo Jin</span>
          <div class="author-info">
            <p>주니어 프론트엔드 개발자 진현우입니다.</p>
            <p>A junior front-end developer.</p>
          </div>
        </div>
        <!-- <div class="author-contact">
          <b>contact</b>
          <p>
            <span>kakao : </span>
            <a href="https://open.kakao.com/o/sxZVj0de"
              target="_blank"
              >https://open.kakao.com/o/sxZVj0de</a>
          </p>
          <p>
            <span>github : </span>
            <a href="https://github.com/oplidote"
              target="_blank"
              >https://github.com/oplidote</a>
          </p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import PostsList from "@/assets/data.json";
import { marked } from "marked";
import prism from "prismjs";

export default {
  props: {
    id: Number,
  },
  computed: {
    post(props) {
      return PostsList.post[props.id - 1];
    },
  },
  setup() {
    // 진입 시 최상단으로 이동
    window.scroll({ top: 0 });
    const postDate = (_createDate) => {
      let date1 = new Date(); // 현재 일자
      let date2 = new Date(_createDate); // 파일 생성일자
      // 일자의 격차 구하기
      const diffDate = date1.getTime() - date2.getTime();
      // 분 단위로 변경
      let diffMin = parseInt(diffDate / (1000 * 60));
      let diffDay = parseInt(diffMin / 1440);
      let diffWeek = parseInt(diffDay / 7);
      let diffMon = parseInt(diffDay / 30);
      let diffYear = parseInt(diffDay / 365);
      // 게시일자 별 멘트
      if (diffMin < 1) {
        return "방금 전";
      } else if (diffMin < 60) {
        // 1 시간 이내
        return diffMin + "분 전";
      } else if (diffMin > 60 && diffMin < 1440) {
        // 1시간 ~ 24시간 이내 60m ~ 1440m
        return parseInt(diffMin / 60) + "시간 전";
      } else if (1 <= diffDay && diffDay < 3) {
        // 하루 전 ~ 이틀 전
        if (2 <= diffDay) return "이틀 전";
        else return "하루 전";
      } else if (3 <= diffDay && 7 > diffDay) {
        // 3일 전 ~ 1주일 이내
        return diffDay + "일 전";
      } else if (1 <= diffWeek && 4 > diffWeek) {
        // n주 전
        return diffWeek + "주 전";
      } else if (1 <= diffMon && 12 > diffMon) {
        // 1년 이내
        return diffMon + "개월 전";
      }
      return diffYear + "년 전";
    };
    // 카테고리 text 출력
    const cateText = (_c) => {
      if (_c == "html") {
        return "HTML";
      } else if (_c == "css") {
        return "CSS";
      } else if (_c == "js") {
        return "JavaScript";
      } else if (_c == "vue") {
        return "Vue.js";
      } else if (_c == "etc") {
        return "기타";
      }
    };
    // 게시물 내용
    const markText = (_index) => {
      return marked.parse(
        require(`raw-loader!../posts/post${_index}.md`).default
      );
    };
    const renderer = new marked.Renderer();
    const linkRenderer = renderer.link;
    renderer.link = (href, title, text) => {
      const html = linkRenderer.call(renderer, href, title, text);
      return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
    };
    // marked.js 옵션
    marked.setOptions({
      renderer: renderer,
      // prism.js 속성 부여
      highlight: (code, lang) => {
        if (prism.languages[lang]) {
          return prism.highlight(code, prism.languages[lang], lang);
        } else {
          return code;
        }
      },
      gfm: true,
      breaks: true,
    });
    return {
      postDate,
      cateText,
      markText,
    };
  },
};
</script>

<style>
</style>