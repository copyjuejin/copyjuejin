<template>
  <div class="articleList">
    <div class="header">
      <el-tabs
        v-model="activeName"
        addable
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
            <articelItem></articelItem></div
        ></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import articelItem from "../Article/articleItem.vue";
export default {
  components: { articelItem },
  data() {
    return {
      tab: ["推荐", "最新", "热榜"],
      activeName: "综合",
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
.el-container {
  border: 1px solid black;
}
.articleList {
  .header {
    padding: 0% 2%;
  }
}
</style>
