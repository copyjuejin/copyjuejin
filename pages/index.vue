<template>
  <div class="container">
     <el-row>
      <!-- 顶部tabs -->
      <el-col :span="24"><tabs :headers="headers"></tabs></el-col>
    </el-row>
    <el-row>
      <!-- 文章tabs -->
      <el-col :span="24"><articleTab></articleTab></el-col>
    </el-row>
    <el-row class="main" :gutter="10">
      <!-- 文章列表 -->
      <el-col id="article" :span="listSpan" >
        <articleList></articleList>
      </el-col>
      <!-- 侧边栏 -->
      <el-col id="author" :span="4" >
        <authorList :ad="ad" :author="author"></authorList>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from "vue";
import articleTab from "./Article/articleTab.vue";
import articleList from "./Article/articleList.vue";
import authorList from "./Author/authorList.vue";
import tabs from './Tabs/tabs.vue'
export default Vue.extend({
  components: { articleTab, articleList, authorList,tabs },
  name: "IndexPage",
  data() {
    return {
      listSpan: 16,
      //offset: 2,
      //author的display属性
      display: "",
    };
  },
  computed: {
    index() {
      return this.$store.state.index;
    },
  },
  watch: {
    display: {
      immediate: true,
      handler(newValue, oldValue) {
        console.log(newValue, oldValue);
        //如果是移动端
        if (newValue == "none") {
          this.listSpan = 24;
          //this.offset = 0;
        }
        //如果是PC端
        else if (newValue == "block") {
          this.listSpan = 16;
          //this.offset = 2;
        }
      },
    },
  },
  mounted() {
    var author = document.getElementById("author");
    //获取到display属性
    this.display = window.getComputedStyle(author).getPropertyValue("display");
  },
  async fetch({ $axios, store, app }) {
    let res = await $axios({ url: "/api/article-tabs" });
    let res1 = await $axios({ url: "/api/syntheses" });
    store.dispatch("article/A_UPDATE_TABS", {
      tabs: res.data,
    });
    store.dispatch("article/A_UPDATE_SORT", {
      sortTab: res1.data,
    });
  },
  async asyncData({ $axios, query }) {
    let ad = await $axios({ url: "/api/advertisements" });
    let author = await $axios({ url: "/api/authors" });
    let headers=await $axios({url:'/api/headers'});
    //console.log(author.data);
    return { ad: ad.data[0], author: author.data,headers:headers.data };
  },
});
</script>
<style lang="less" >
* {
  padding: 0;
  margin: 0;
  a {
    color: black;
    text-decoration: none;
  }
}
.container {
  background-color: #f4f4f4;
  height: calc(100vh);
  overflow-x: hidden;
  .main {
    margin-top: 20px;
  }
}

//移动端
@media screen and (min-device-width: 0px) and(max-device-width:767px) {
  #author {
    display: none;
  }
  #article{
    margin-left: 0%;
  }
}
//平板
@media screen and (min-device-width: 768px) and(max-device-width:1199px) {
  #author {
    display: block;
  }
  #article{
      margin-left: 5%;
  }
}
//PC端
@media screen and(min-device-width:1200px) {
  #author {
    display: block;
  }
  #article{
      margin-left: 10%;
  }
}
</style>
