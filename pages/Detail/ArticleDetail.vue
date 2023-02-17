<template>
   <div class="all">
      <!-- 功能块 -->
      <div class="function" v-if="funcShow">
         <ul>
            <li><i class="el-icon-chicken"></i><span>{{ info.like }}</span></li>
            <li><i class="el-icon-chat-dot-square"></i><span>555</span></li>
            <li><i class="el-icon-star-on"></i></li>
            <li><i class="el-icon-share"></i></li>
            <li><i class="el-icon-warning"></i></li>
            <li><i class="el-icon-reading"></i></li>

         </ul>
      </div>
      <!-- 文章 -->
      <div class="detail" :style="styleVar">

         <ArticleRendering></ArticleRendering>

         <div id="ar"></div>
         <!-- <article></article> -->
         <!-- 相关推荐 -->
         <!-- <more></more> -->
      </div>
         <div class="writer" v-if="writerShow">
         <img :src="writerJpg">{{ info.writer }}<br>{{ info.time }}
      </div>
      <div class="more" v-if="writerShow">
         <div class="context">
            <span>相关推荐</span>
            <br>
            <br>
            <hr>
            <div class="item" v-for="(item, index) of more" :key="index">
               <NuxtLink :to="{ path: '/Detail', query: { id: item.id, sort: item.article_tab } }" target='_blank'>{{
                  item.title
               }}<br>
                  <div class="num">{{ item.like }}点赞&nbsp·&nbsp{{ item.comment }}评论</div>
               </NuxtLink>
            </div>
         </div>
      </div>
      <div class="catalogue" v-if="writerShow"></div>
      <div class="next" v-if="writerShow"></div>
   </div>
</template>
<script>
import ArticleRendering from './ArticleRendering.vue';




export default {
   name: "",
   props: ["info", "more"],
   data() {
      return {
         writerJpg: "/api",
         screenWidth: null,
         funcShow: true,
         writerShow: true,
      };
   },
   mounted() {
      this.writerJpg += this.info.writerJpg[0].url;
      this.screenWidth = document.body.clientWidth
      window.onresize = () => {
         return (() => {
            this.screenWidth = document.body.clientWidth
         })()
      }
   },
   watch: {
      screenWidth: {
         handler: function (val, oldval) {
            if (val <= 390) {
               this.funcShow = false
               this.writerShow = false
            }
         }
      }
   },
   components: { ArticleRendering }
}




</script>
<style lang='less' scoped>
@bgcolor:#ffffff;
.all {
   width: 90vw;

   margin-top: 2.3333vw;
   display: inline-block;

   .function {
      margin-left: 6.6667vw;
      margin-top: 2.3333vw;
      float: left;


      li {
         margin-top: 1.3333vw;
         margin-bottom: 1.3333vw;
         list-style-type: none;
         font-size: 1.6667vw;
         width: 3.3333vw;
         height: 3.3333vw;
         border-radius: 50%;
         background-color: @bgcolor;
         text-align: center;
         line-height: 3.3333vw;
         box-shadow: .6667vw;
         position: relative;

         &:nth-child(5) {
            margin-top: 3vw;
         }

         span {

            height: 1vw;
            position: absolute;
            left: 2.3333vw;
            top: -0.3333vw;
            font-size: .3333vw;

            background-color: #666565;
            line-height: .8667vw;
            color: @bgcolor;
            border-radius: .3333vw;
         }

      }



   }

   .detail {
      margin-left: 2.3333vw;
      float: left;
      background-color: @bgcolor;
      @media screen and (max-width: 390px) {
         width: 94.3333vw;
      }
      @media screen and (min-width: 391px) {
         width: 54.3333vw;
      }
      line-height: 2vw;
      font-size: 1.3333vw;
      padding: 1.6667vw;

      .writerBasic {
         height: 3.3333vw;
         width: 33.3333vw;
         display: inline-block;
         margin: 1vw 0;

         img {
            height: 3.333vw;
            float: left;
            margin-right: .6667vw;
         }

      }
   }

   .writer {
      margin-left: 1.3333vw;
      width: 20vw;
      background-color: @bgcolor;
      float: left;
      height: 10vw;
      clear: none;

      img {
         width: 3.3333vw;
         margin: 1vw 1vw;
      }
   }


   .more {
      margin-left: 1.3333vw;
      margin-top: 1.3333vw;
      width: 20vw;
      height: 33vw;
      background-color: @bgcolor;
      float: left;

      .context {
         margin: 1.3333vw 1.3333vw;

         span {
            font-size: 1.3333vw;

         }

         .item {
            margin: 1.3333vw 0vw;
            font-size: 1vw;

            .num {
               color: #7e7d7d;
               margin-top: .3333vw;
            }
         }
      }
   }

   .catalogue {
      margin-left: 1.3333vw;
      margin-top: 1.3333vw;
      width: 20vw;
      height: 33vw;
      background-color: @bgcolor;
      float: left;
   }

   .next {
      margin-left: 1.3333vw;
      margin-top: 1.3333vw;
      width: 20vw;
      height: 7.6667vw;
      background-color: @bgcolor;
      float: left;
   }
}
</style>