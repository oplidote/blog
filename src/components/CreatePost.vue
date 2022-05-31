<template>
    <div class="container" id="create-post">
      <form @submit.prevent="onSubmit">
        <input
          class="title"
          type="text"
          placeholder="제목"
          v-model="post.title"
          autofocus
        />
        <textarea
          name=""
          id=""
          cols="50"
          rows="10"
          placeholder="내용을 입력하세요"
          v-model="post.body"
        ></textarea>
        <div class="category">
          <span class="cate-tit">Category</span>
          <div class="cate-box">
            <input type="checkbox" id="html" />
            <label for="html"
              ><span class="plus">+</span><span class="minus"></span>HTML</label
            >
            <input type="checkbox" id="css" />
            <label for="css"
              ><span class="plus">+</span><span class="minus"></span>CSS</label
            >
            <input type="checkbox" id="js" />
            <label for="js"
              ><span class="plus">+</span
              ><span class="minus"></span>Javascript</label
            >
            <input type="checkbox" id="vue" />
            <label for="vue"
              ><span class="plus">+</span
              ><span class="minus"></span>Vue.js</label
            >
            <input type="checkbox" id="etc" />
            <label for="etc"
              ><span class="plus">+</span><span class="minus"></span>etc</label
            >
          </div>
        </div>
        <div class="submit-box clearfix">
          <button type="button" class="cancel" @click="moveHome"></button>
          <button type="submit" class="done">Done</button>
        </div>
      </form>
    </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {},
  setup() {
    const router = useRouter();

    const post = reactive({
      title: "",
      body: "",
    });
    const moveHome = () => {
      router.push({
        name: "Home",
      });
    };
    const onSubmit = () => {
      if (!post.title) {
        return;
      }
      if (!post.body) {
        return;
      }
    };
    return {
      post,
      moveHome,
      onSubmit,
    };
  },
};
</script>

<style>
</style>