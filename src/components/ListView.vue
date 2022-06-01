<template>
  <div class="container" id="list-view">
    <div class="list-header">
      <h2>{{ listTitle(cate) }}</h2>
      <span><em>{{ cateCount(cate) }}</em> posts</span>
    </div>
    <div class="post" v-for="item in posts" :key="item.id">
      <div class="post-box" v-if="cateSort(item.category)">
        <div class="post-tit">
          <h2>{{ item.title }}</h2>
        </div>
        <div class="post-cate" v-if="cate == '' ? true : false ">
          <span>{{ item.category }}</span>
        </div>
        <div class="post-cont">
          <p>{{ item.contents }}</p>
        </div>
        <div class="post-date"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PostsList from "../assets/data.json";
export default {
  name: "CateParams",
  props: {
    cate: {
      type: String,
      default: "",
    },
  },

  computed: {
    posts() {
      return PostsList.post.map((items) => {
        return items;
      });
    },
  },
  setup(props) {
    // 글 내 카테고리 중복
    // const cateFN = (_CateItem) => {
    //   const cate_len = _CateItem.length;
    //   let catelist = "";
    //   for (let i = 0; i < cate_len; i++) {
    //     catelist += `${_CateItem[i]} `;
    //   }
    //   return catelist;
    // };
    const cateSort = (_c) => {
      if (props.cate == _c) {
        return true;
      } else if (props.cate == "") {
        return true;
      }
    };
    const listTitle = (_c) => {
      if(_c == '') {
        return "Total";
      }
      else if (_c == "html") {
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
    };
  },
};
</script>

<style>
</style>