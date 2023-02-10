<template> 
<div class="all">
  <ArticleTab></ArticleTab>
   <div class="app">

     
      <ArticleDetail :info="info" :more="more"></ArticleDetail>

   </div>
   </div>
</template>

<script lang="js">
import Header from "./Header.vue";
import ArticleDetail from "./ArticleDetail.vue";
import ArticleTab from "../Article/articleTab.vue";
export default {
   components: { Header, ArticleDetail, ArticleTab },
   name: "IndexPage",
   async asyncData({ $axios, query }) {
      let a = await $axios({ url: `/api/articles/${query.id}` })
      let b = await $axios({ url: `/api/article-tabs/${query.sort}?_limit=5` })
      return { info: a.data, more: b.data.articles }

   },

};
</script>
<style lang="less">
* {
   margin: 0px;
   padding: 0px;
   /* css3盒子模型 */ 
   box-sizing: border-box;
   a{
      color: black;
      text-decoration: none;
   }
.all{
   background-color: #f4f4f5;
   width: 100%;
   display: inline-block;
  
   .app {
      width: 1500px;
       margin: 0 auto;
      overflow-x: hidden;

      img {
         width: 100%;
      }
   }
}
}
</style>
