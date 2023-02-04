<template>
   <div class="all">
      <!-- 功能块 -->
      <div class="function">
         <ul>
            <li><i class="el-icon-chicken"></i></li>
            <li><i class="el-icon-chat-dot-square"></i></li>
            <li><i class="el-icon-star-on"></i></li>
            <li><i class="el-icon-share"></i></li>
            <li><i class="el-icon-warning"></i></li>
            <li><i class="el-icon-reading"></i></li>
         </ul>
      </div>
      <!-- 文章 -->
      <div class="detail">
      <h1>{{ info.title }}</h1>
         <div id="ar"></div>
         <!-- <article></article> -->
         <!-- 相关推荐 -->
         <!-- <more></more> -->
      </div>
      <div class="writer">
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
   props:["info"],
   mounted() {

      var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});
var result = md.render(this.info.body);
document.getElementById("ar").innerHTML=result
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

         &:nth-child(5) {
            margin-top: 45px;
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