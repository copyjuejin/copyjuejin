<template>
  <div class="all">

    <div class="main">
     <Tabs :headers="headers"></Tabs>
<<<<<<< HEAD
<<<<<<< HEAD
      <ArticleTab></ArticleTab>
=======
>>>>>>> 8bd417667835c8fb90415d59fc699d2236f0bccc
=======
>>>>>>> ce47a310ff1685b46ba1a504306068d5e7f7a915
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
        <ArticleRendering :info="info"></ArticleRendering>
      </div>
      <div class="aside">
        <Aside :more="more" :manager="manager"></Aside>
      </div>
    </div>
  </div>
</template>
<script lang="js">
import ArticleRendering from "./ArticleRendering.vue";
import Aside from "./Aside.vue";
import Tabs from "../Tabs/tabs.vue";
<<<<<<< HEAD
<<<<<<< HEAD
import ArticleTab from "../Article/articleTab.vue";
=======
>>>>>>> 8bd417667835c8fb90415d59fc699d2236f0bccc
=======
>>>>>>> ce47a310ff1685b46ba1a504306068d5e7f7a915
export default {
  name: "IndexPage",
  async asyncData({ $axios, query }) {
    let a = await $axios({ url: `/api/articles/${query.id}` })
    let b = await $axios({ url: `/api/article-tabs/${query.sort}?_limit=5` })
<<<<<<< HEAD
<<<<<<< HEAD
=======
    let manager=await $axios({url:'/api/managers'});
>>>>>>> ce47a310ff1685b46ba1a504306068d5e7f7a915
    let headers=await $axios({url:'/api/headers'});
console.log(manager.data[0].jpg[0].url)
    return { info: a.data, more: b.data.articles,headers:headers.data,manager:manager.data[0]}
  },
 


<<<<<<< HEAD
  components: { ArticleRendering, Aside, ArticleTab,Tabs },
=======
    let manager=await $axios({url:'/api/managers'});
    let headers=await $axios({url:'/api/headers'});
console.log(manager.data[0].jpg[0].url)
    return { info: a.data, more: b.data.articles,headers:headers.data,manager:manager.data[0]}
  },
 


  components: { ArticleRendering, Aside,Tabs },
>>>>>>> 8bd417667835c8fb90415d59fc699d2236f0bccc
=======
  components: { ArticleRendering, Aside,Tabs },
>>>>>>> ce47a310ff1685b46ba1a504306068d5e7f7a915
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
    display: none;

   }
        .detail {
          width: 100%;
          margin-top: 15px;
          margin-left: 0px;
          float: none;
          padding: 2%;        

          font-size: 1px;
          box-shadow:none;
          overflow-x: hidden;

          font-size: 1px;
          box-shadow:none;
          overflow-x: hidden;
        }

        .function {
          display: none;
        }
      }
    }
  }
}</style>
