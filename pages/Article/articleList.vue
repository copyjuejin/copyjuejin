<template>
  <div class="articleList">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane
        v-for="(tab, index) in tab"
        :key="index"
        :label="tab"
        :name="tab"
        ><div v-for="(item, index) in articleList" :key="index">
            <NuxtLink :to="{path:'/Detail',query:{id:1,sort:1}}" target='_blank'>
              <articelItem :listItem="item"></articelItem>
            </NuxtLink>
          </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState, mapMutations, mapAction } from "vuex";
import articelItem from "../Article/articleItem.vue";
export default {
  components: { articelItem },
  data() {
    return {
      tab: ["推荐", "最新", "热榜"],
      activeName: "推荐",
    };
  },
  computed: {
    tabs() {
      return this.$store.state.article.tabs; //从vuex中读取tabs数据
    },
    index() {
      return this.$store.state.article.index;
    },
    articleList() {
      //console.log(this.tabs, this.index);
      return this.tabs[this.index].articles;
    },
  },

  methods: {
    // 标签被点击
    handleClick(tab, event) {
      console.log(tab, event);
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
