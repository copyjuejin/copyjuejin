<template>
  <div style="background-color: #f4f4f4">
    <el-row type="flex">
      <!-- 文章tabs -->
      <el-col :span="24"><articleTab></articleTab></el-col>
    </el-row>

    <el-row type="flex" class="main" :gutter="10">
      <!-- 文章列表 -->
      <el-col :span="16" :offset="2"><articleList></articleList></el-col>
      <!-- 侧边栏 -->
      <el-col :span="4">
        <!-- 签到 -->
        <div class="sign"></div>
        <!-- 广告 -->
        <div class="advertisement"></div>
        <!-- 二维码 -->
        <div class="link"></div>
        <!-- 作者榜 -->
        <div class="author"></div>
      </el-col>
    </el-row>
    <authorList></authorList>a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import articleTab from "../components/Article/articleTab.vue";
import articleList from "../components/Article/articleList.vue";
import authorList from "~/components/Author/authorList.vue";
export default Vue.extend({
  components: { articleTab, articleList },
  name: "IndexPage",
 
  

  //读数据，返回vuex
  fetch({ store }) {},
});
</script>
<style lang="less" >
@bg-color: white;
.box(@h){
    margin-bottom: 20px;
    min-height: 60px;
    background: @bg-color;
    box-shadow: 1px 1px 3px 0px #86909c57;
    height: @h;
}
*{
  padding: 0;
  margin:0;
}
.main {
  margin-top: 20px;
  .sign {
    .box(80px);
  }
  .advertisement {
    .box(200px);
  }
  .link {
    .box(74px);
  }
  .author {
    .box(150px);
  }
}
</style>
