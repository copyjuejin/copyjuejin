<template>
  <div class="articleList">
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">

       <el-tab-pane
        v-for="(sortTab, index) in sortTab"
        :key="index"
        :label="sortTab.tabs"
        :name="sortTab.tabs"
        >
        <div v-for="(item, index) in articleList" :key="index">
          <NuxtLink
            :to="{
              path: '/Detail',
              query: { id: item.id, sort: item.article_tab },
            }"
            target="_blank"
          >
            <articelItem :listItem="item"></articelItem>
          </NuxtLink>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import articelItem from "../Article/articleItem.vue";
export default {
  components: { articelItem },
  data() {
    return {
      sortIndex: 0,
      newList:'',
      hotList:'',
    };
  },
  computed: {
    //顶部导航栏
    tabs() {
      return this.$store.state.article.tabs; //从vuex中读取tabs数据
    },
    //导航栏当前index
    headerIndex() {
      return this.$store.state.article.index;
    },
    //排序导航栏
    sortTab() {
      return this.$store.state.article.sortTab;
    },
    activeName:{
      get(){
        return this.$store.state.article.sortActiveName;
      },
      set(){}
    },
    //当前文章列表
    articleList(){
        if(this.sortIndex==0||this.activeName=='推荐'){
        return this.tabs[this.headerIndex].articles;
        }else if(this.sortIndex==1){
          return this.newList
        }else if(this.sortIndex==2){
          return this.hotList
        }
    }
  },

  methods: {
    // 标签被点击
    async handleClick(tab, event) {
      this.sortIndex=tab.index
      this.$store.dispatch('article/A_UPDATE_ACTIVENAME',{sortActiveName:tab.name})
      if(this.sortIndex==1){
        let res=await this.$axios({url:`/api/articles?article_tab.id=${Number(this.headerIndex)+1}&_sort=time:DESC&_limit=5`})
        this.newList=res.data
        //console.log(this.newList,"最新")
      }else if(this.sortIndex==2){
        let res2=await this.$axios({url:`/api/articles?article_tab.id=${Number(this.headerIndex)+1}&_sort=comment:DESC&_limit=5`})
        this.hotList=res2.data
        //console.log(this.hotList,"热榜")
      }

    },
  },
};
</script>

<style lang="less" scoped>
/* 修复el-tabs意外出现蓝色边框问题bug*/
::v-deep .el-tabs__item {
  box-shadow: none !important;
}
.articleList {
  padding: 0% 2%;
}
</style>
