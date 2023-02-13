<template>
   <div class="all">
      <!-- 功能块 -->
      <div class="function">
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
      <div class="detail">

         <ArticleRendering></ArticleRendering>

         <div id="ar"></div>
         <!-- <article></article> -->
         <!-- 相关推荐 -->
         <!-- <more></more> -->
      </div>
      <div class="writer">
         <img :src="writerJpg">{{ info.writer }}<br>{{ info.time }}
      </div>
      <div class="more">
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
      <div class="catalogue"></div>
      <div class="next"></div>
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
      };
   },
   mounted() {
      this.writerJpg += this.info.writerJpg[0].url;

   },
   components: { ArticleRendering }
}




</script>
<style lang='less' scoped>
@bgcolor:#ffffff;
.all {
   width: 1500px;

   margin-top: 35px;
   display: inline-block;

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

            background-color: #666565;
            line-height: 13px;
            color: @bgcolor;
            border-radius: 5px;
         }

      }



   }

   .detail {
      margin-left: 35px;

      float: left;
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

   .writer {
      margin-left: 20px;
      width: 300px;
      background-color: @bgcolor;
      float: left;
      height: 100px;

      img {
         width: 50px;
         margin: 15px 15px;
      }
   }


   .more {
      margin-left: 20px;
      margin-top: 20px;
      width: 300px;
      // height: 540px;
      background-color: @bgcolor;
      float: left;

      .context {
         margin: 20px 20px;

         span {
            font-size: 20px;

         }

         .item {
            margin: 20px 0px;
            font-size: 15px;

            .num {
               color: #7e7d7d;
               margin-top: 5px;
            }
         }
      }
   }

   .catalogue {
      margin-left: 20px;
      margin-top: 20px;
      width: 300px;
      height: 535px;
      background-color: @bgcolor;
      float: left;



   }

   .next {
      margin-left: 20px;
      margin-top: 20px;
      width: 300px;
      height: 115px;
      background-color: @bgcolor;
      float: left;
   }
}
</style>