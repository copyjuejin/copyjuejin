<template>
  <div class="app">

    <Header></Header>
    <ArticleDetail :info="info"></ArticleDetail>

  </div>
</template>

<script lang="js">
import Header from "./Header.vue";
import ArticleDetail from "./ArticleDetail.vue";
export default {
  components: { Header, ArticleDetail },
  name: "IndexPage",
 
  async asyncData({$axios}) {
    let a=await $axios({url:"/api/articles"})
    
    return {info:a.data[0]}
    
  },

};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  /* css3盒子模型 */
  box-sizing: border-box;

  .app {
    background-color: #f4f4f5;
    display: inline-block;
    width: 100%;
  }
}
</style>
