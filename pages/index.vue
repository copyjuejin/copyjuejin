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
    return {};
  },
  computed: {
    index() {
      return this.$store.state.index;
    },
    sortIndex: {
      get() {
       /*  let res2 = this.$axios({
          url: `/api/articles?article_tab=${this.index}`,
        });
        console.log(res2); */
        return this.$store.state.sortIndex;
      },
      set() {},
    },
  },
  methods: {},
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
});
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.container {
  background-color: #f4f4f4;
  height: 1000px;
}
.main {
  margin-top: 20px;
}
</style>
