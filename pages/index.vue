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
        <div class="content sign"></div>
        <!-- 广告 -->
        <div class="content advertisement"></div>
        <!-- 二维码 -->
        <div class="content link"></div>
        <!-- 作者榜 -->
        <div class="content author"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import articleTab from "../components/Article/articleTab.vue";
import articleList from "../components/Article/articleList.vue";
export default Vue.extend({
  components: { articleTab, articleList },
  name: "IndexPage",

  data() {
    return {};
  },
  //middleware:'auth',//页面层级中间件定义
  middleware(context) {},

  //参数的有效性
  validate({ params, query }) {
    return true;
  },

  //读数据，返回给组件
  asyncData(context) {
    //异步业务逻辑,请求服务端数据
    return {};
  },

  //读数据，返回vuex
  fetch({ store }) {},
});
</script>
<style lang="less" scoped>
@bg-color: white;
.box(@h){
    margin-bottom: 20px;
    min-height: 60px;
    background: @bg-color;
    box-shadow: 1px 1px 3px 0px #86909c57;
    height: @h;
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
