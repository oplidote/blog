<template>
  <div class="container" id="list-view">
    <div class="post" v-for="item in posts" :key="item.id">
      <div class="post-tit">
        <h2>- {{ item.title }}</h2>
      </div>
      <div class="post-cate">
        <span>{{ item.category }}</span>
      </div>
      <div class="post-cont">
        <p>{{ item.contents }}</p>
      </div>
      <div class="post-date">
        <!-- 프롭스 데이터 가져오기 완료 -->
        <p> {{ cate }}</p>
        <span>{{ item.category }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import PostsList from "../assets/data.json";
export default {
  name: 'CateParams',
  props: {
    cate: {
      type:String,
      default: '',
    },
  },
  
  computed: {
    posts() {
      return PostsList.post.map((items) => {
        return items;
      });
    },
  },
  setup() {
    // 글 내 카테고리 중복
    // const cateFN = (_CateItem) => {
    //   const cate_len = _CateItem.length;
    //   let catelist = "";
    //   for (let i = 0; i < cate_len; i++) {
    //     catelist += `${_CateItem[i]} `;
    //   }
    //   return catelist;
    // };
    return {
    };
  },
};
</script>

<style>
</style>