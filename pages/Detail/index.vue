<template>
  <div class="all">
    
  <div class="main">
    <ArticleTab></ArticleTab>
    <!-- 功能块 -->
    <div class="function">
      <ul>
        <li>
          <img style="width: 24px; height: 24px ;color:black" src="../../assets/img/like.png"><span>{{ info.like }}</span>
        </li>
        <li><i class="el-icon-chat-dot-square"></i><span>555</span></li>
        <li><i class="el-icon-star-on"></i></li>
        <li><i class="el-icon-share"></i></li>
        <li><i class="el-icon-warning"></i></li>
        <li><i class="el-icon-reading"></i></li>
      </ul>
    </div>
    <!-- 文章 -->
    <div class="detail">
      <ArticleRendering></ArticleRendering>
    </div>
    <div class="aside">
      <Aside :more="more" :info="info"></Aside>
    </div>
  </div>
  </div>
</template>
<script lang="js">
import ArticleRendering from "./ArticleRendering.vue";
import Aside from "./Aside.vue";

import ArticleTab from "../Article/articleTab.vue";
export default {
  name: "IndexPage",
   async asyncData({ $axios, query }) {
      let a = await $axios({ url: `/api/articles/${query.id}` })
      let b = await $axios({ url: `/api/article-tabs/${query.sort}?_limit=5` })
      return { info: a.data, more: b.data.articles }
   },
   async fetch({$axios,store,app}){
    let res=await $axios({url:"/api/article-tabs"})
    store.dispatch("article/A_UPDATE_TABS",{
        tabs:res.data
    })
  },

  components: { ArticleRendering, Aside,ArticleTab },
};
</script>
<style lang="less" >
@bgcolor: #ffffff;
* {
  margin: 0px;
  padding: 0px;
  /* css3盒子模型 */
  box-sizing: border-box;
  
  .all {
    background-color: #f4f4f5;
    width: 100%;
    display: inline-block;

    a {
    color: black;
    text-decoration: none;
  }
  li{
    list-style-type: none;
  }
      img {
        width: 100%;
      }
   
.main {
  width: 1500px;
  
  .function {
    margin-left: 100px;
    margin-top: 35px;
    float: left;

    li {
      margin-top: 20px;
      margin-bottom: 20px;
      list-style-type: none;
      font-size: 25px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #ffffff;
      text-align: center;
      line-height: 50px;
      box-shadow: 10px;
      position: relative;



      &:nth-child(5) {
        margin-top: 45px;
      }

      span {
        height: 15px;
        position: absolute;
        left: 35px;
        top: -5px;
        font-size: 5px;

        background-color: #969595;
        line-height: 13px;
        color: @bgcolor;
        border-radius: 5px;
      }
    }
  }


  .detail {
    margin-left: 35px;
    float: left;
    margin-top: 20px;
    background-color: @bgcolor;
    width: 815px;
    line-height: 30px;
    font-size: 20px;
    padding: 25px;
   
    

    .writerBasic {
      height: 50px;
      width: 500px;
      display: inline-block;
      margin: 15px 0;

      img {
        height: 50px;
        float: left;
        margin-right: 10px;
      }
    }
  }

  .aside {
    float: left;
    width: 300px;
    margin-top: 20px;
   
  }
}}}
</style>
