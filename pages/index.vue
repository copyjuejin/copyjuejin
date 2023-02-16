<template>
  <div class="container">
    <el-row>
      <!-- 文章tabs -->
      <el-col :span="24"><articleTab></articleTab></el-col>
    </el-row>
    <el-row class="main" :gutter="10">
      <!-- 文章列表 -->
      <el-col :span="listSpan" :offset="offset"
        ><articleList></articleList
      ></el-col>
      <!-- 侧边栏 -->
      <el-col :span="4" id="author">
        <authorList :ad="ad" :author="author"></authorList>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from "vue";
import articleTab from "./Article/articleTab.vue";
import ArticleRendering from "./Article/ArticleRendering.vue";
import articleList from "./Article/articleList.vue";
import authorList from "./Author/authorList.vue";
export default Vue.extend({
  components: { articleTab, articleList, authorList, ArticleRendering },
  name: "IndexPage",
  data() {
    return {
      listSpan: 16,
      offset: 2,
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
    display:{
      immediate:true,
      handler(newValue,oldValue){
        console.log(newValue,oldValue)
        //如果是移动端
        if (newValue == "none") {
          this.listSpan = 24;
          this.offset = 0;
        }
        //如果是PC端 
        else if (newValue == "block") {
          this.listSpan = 16;
          this.offset = 2;
        }
    }
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
    //console.log(author.data);
    return { ad: ad.data[0], author: author.data };
    
  },
});
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
  
  
}
.container {
  background-color: #f4f4f4;
  height:calc(100vh);
  overflow-x:hidden
}
.main {
  margin-top: 20px;
  
}
#author {
  display: block;
}
//移动端
@media screen and (min-device-width: 0px) and(max-device-width:767px) {
  #author {
    display: none;
  }
}
//平板
@media screen and (min-device-width: 768px)and(max-device-width:1199px) {
  #author {
    display: block;
  }
}
//PC端
@media screen and(min-device-width:1200px){
   #author {
    display: block;
  }
}
</style>
