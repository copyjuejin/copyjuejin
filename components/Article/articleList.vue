<template>
  <div class="articleList">
      <el-tabs
        v-model="activeName"
        type="border-card"
        @tab-click="handleClick"
        @tab-remove="tabMove"
        @tab-add="tabAdd"
      >
        <el-tab-pane
          v-for="(item, index) in tab"
          :key="index"
          :label="item"
          :name="item"
          ><div>
            <articelItem></articelItem>
            <articelItem></articelItem>
            <articelItem></articelItem>
            <articelItem></articelItem>
            </div
        ></el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
import articelItem from "../Article/articleItem.vue";
export default {
  components: { articelItem },
  data() {
    return {
      tab: ["推荐", "最新", "热榜"],
      activeName: "推荐",
    };
  },
  methods: {
    // 标签被点击
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 删除标签
    tabMove() {
      console.log("删除标签");
    },
    // 添加标签
    tabAdd() {
      console.log("添加标签");
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
