<template>
  <div class="container">
    <el-row type="flex">
      <!-- 文章tabs -->
      <el-col :span="24"><articleTab></articleTab></el-col>
    </el-row>
    <el-row type="flex" class="main" :gutter="10">
      <!-- 文章列表 -->
      <el-col :span="16" :offset="2"><articleList></articleList></el-col>
      <!-- 侧边栏 -->
      <el-col :span="4">
        <authorList></authorList>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import articleTab from "./Article/articleTab.vue";
import articleList from "./Article/articleList.vue";
import authorList from "./Author/authorList.vue";
export default Vue.extend({
  components: { articleTab, articleList, authorList },
  name: "IndexPage",

});
</script>
<style lang="less">
@bg-color: white;
.box(@h) {
  margin-bottom: 20px;
  min-height: 60px;
  background: @bg-color;
  box-shadow: 1px 1px 3px 0px #86909c57;
  height: @h;
}
* {
  padding: 0;
  margin: 0;
}
container{
  background-color: #f4f4f4; 
  height:1000px; 
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
