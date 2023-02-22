<template>
  <div class="all">

    <div class="main">
      <ArticleTab></ArticleTab>
      <!-- 功能块 -->
      <div class="function">
        <ul>
          <li>
            <img style="width: 24px; height: 24px ;color:black" src="../../assets/img/like.png"><span>{{ info.like
            }}</span>
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
  async fetch({ $axios, store, app }) {
    let res = await $axios({ url: "/api/article-tabs" })
    store.dispatch("article/A_UPDATE_TABS", {
      tabs: res.data
    })
  },


  components: { ArticleRendering, Aside, ArticleTab },
};
</script>
<style lang="less">
@bgcolor: #ffffff;
@indexcolor:#f4f4f4;
* {

  margin: 0px;
  padding: 0px;
  /* css3盒子模型 */
  box-sizing: border-box;
  .all {
    background-color:@indexcolor;
    display: inline-block;
    width: 100%;
    a {
      color: black;
      text-decoration: none;
    }
    li {
      list-style-type: none;
    }

    img {
      width: 100%;
    }

    .main {
      width: 100%;

      .function {
        margin-left: 5%;
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
          background-color: @bgcolor;
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
        margin-left: 3%;
        float: left;
        margin-top: 20px;
        background-color: @bgcolor;
        width: 65%;
        line-height: 30px;
        font-size: 20px;
        padding: 2%;
        box-shadow: 1px 1px 1px 1px rgb(165, 163, 163);
        border-radius: 5px;
      }

      .aside {
        float: left;
        width: 20%;
        margin-top: 20px;
        margin-left: 2%;
        background-color: @indexcolor;
        border-radius: 5px;
      
      }

      @media screen and(max-device-width:1199px) {
        
       
   .aside{
    width: 100%;
    float: left;
    margin-left: 0px;
   }
        .detail {
          width: 100%;
          margin-top: 15px;
          margin-left: 0px;
          float: none;
          padding: 2%;        
        }

        .function {
          display: none;
        }
      }
    }
  }
}</style>
