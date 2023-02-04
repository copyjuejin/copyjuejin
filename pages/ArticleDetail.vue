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

         <h1>{{ info.title }}</h1>
         <div class="writerBasic"><img :src="writerJpg">
            {{ info.writer }}<br>{{ info.time }}</div>

         <div id="ar"></div>
         <!-- <article></article> -->
         <!-- 相关推荐 -->
         <!-- <more></more> -->
      </div>
      <div class="writer">
         <img :src="writerJpg">
         {{ info.writer }}<br>{{ info.time }}
      </div>
      <div class="ad1"></div>
      <div class="ad2"></div>
      <div class="more"></div>
      <div class="catalogue"></div>
      <div class="next"></div>
   </div>
</template>
<script>


export default {
   name: '',
   props: ["info"],
   data() {
      return {
         writerJpg: "/api",
      }
   },
   mounted() {
      // 从index组件获取到文章内容并给markdown-it插件渲染
      var md = require('markdown-it')({
         html: true,
         linkify: true,
         typographer: true
      });
      var result = md.render(this.info.body);
      document.getElementById("ar").innerHTML = result
      this.writerJpg += this.info.writerJpg[0].url
      console.log(this.writerJpg)
   },
}




</script>
<style lang='less' scoped>
.all {
   width: 1210px;
   margin: 0 auto;





   .function {
      margin-left: -45px;
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
            
            background-color: #666565;
            line-height: 13px;
            color: #ffffff;
            border-radius: 5px;
         }

      }



   }

   .detail {
      margin-left: 35px;

      float: left;
      background-color: #ffffff;
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
      height: 225px;
      background-color: #ffffff;
      float: left;
   }

   .ad1 {
      margin-left: 20px;
      margin-top: 20px;
      width: 300px;
      height: 90px;
      background-color: #ffffff;
      float: left;
   }

   .ad2 {
      margin-left: 20px;
      margin-top: 20px;
      width: 300px;
      height: 245px;
      background-color: #ffffff;
      float: left;
   }

   .more {
      margin-left: 20px;
      margin-top: 20px;
      width: 300px;
      height: 540px;
      background-color: #ffffff;
      float: left;
   }

   .catalogue {
      margin-left: 20px;
      margin-top: 20px;
      width: 300px;
      height: 535px;
      background-color: #ffffff;
      float: left;
   }

   .next {
      margin-left: 20px;
      margin-top: 20px;
      width: 300px;
      height: 115px;
      background-color: #ffffff;
      float: left;
   }
}
</style>