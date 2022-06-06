<template>
  <div class="container" id="list-view">
    <div class="list-header">
      <h2>{{ listTitle(cate, "header") }}</h2>
      <span
        ><em>{{ cateCount(cate) }}</em> posts</span
      >
    </div>
    <div class="list-wrap">
      <div class="post" v-for="(item, index) in posts" :key="item.id">
        <div class="post-box" v-show="cateSort(item.category)">
          <div class="post-date">{{ postDate(item.date) }}</div>
          <div class="post-tit">
            <h2>{{ item.title }}</h2>
          </div>
          <div class="post-cate" v-if="cate == '' ? true : false">
            <span>#{{ listTitle(item.category) }}</span>
          </div>
          <div v-html="markText(index + 1)" class="post-cont"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostsList from "../assets/data.json";
import _ from "lodash";
import { marked } from "marked";
import prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-liquid";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-php";
import "prismjs/components/prism-scss";

export default {
  components: {},
  name: "CateParams",
  props: {
    cate: {
      type: String,
      default: "",
    },
  },
  async created() {},
  computed: {
    posts() {
      return PostsList.post.map((items) => {
        return items;
      });
    },
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value;
    }, 300),
  },
  setup(props) {
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
    });
    const postDate = (_createDate) => {
      
      let date1 = new Date(); // 현재 일자
      let date2 = new Date(_createDate); // 파일 생성일자

      // 일자의 격차 구하기
      const diffDate = date1.getTime() - date2.getTime();

      // 분 단위로 변경
      let diffMin = parseInt(diffDate / (1000 * 60));
      
      if (diffMin < 1) {
        return "방금 전";
      } 
      // 1 시간 이내
      else if (diffMin < 60) {
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
    const markText = (_index) => {
      return marked.parse(
        require(`raw-loader!../posts/post${_index}.md`).default
      );
    };
    const cateSort = (_c) => {
      if (props.cate == _c) {
        return true;
      } else if (props.cate == "") {
        return true;
      }
    };
    const listTitle = (_c, _type) => {
      if (_c == "" && _type == "header") {
        return "Total";
      } else if (_c == "html") {
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
    const cateCount = (_c) => {
      let count = 0;
      if (_c == "") {
        count = PostsList.post.length;
      } else {
        for (let i = 0; i < PostsList.post.length; i++) {
          if (PostsList.post[i].category == _c) {
            count++;
          }
        }
      }
      return count;
    };
    return {
      cateSort,
      listTitle,
      cateCount,
      markText,
      prism,
      postDate,
    };
  },
};
</script>

<style>
</style>