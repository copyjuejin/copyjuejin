<template>
  <div class="artcleTab">
    <el-tabs
      class="tabs"
      v-model="activeName"
      @tab-click="handleClick"
      @tab-remove="tabMove"
      @tab-add="tabAdd"
    >
      <el-tab-pane
        class="pane"
        v-for="(item, index) in tab"
        :key="index"
        :label="item"
        :name="item"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "articleTab",
  data() {
    return {
      tab: [
        "综合",
        "关注",
        "后端",
        "前端",
        "Android",
        "ios",
        "人工智能",
        "开发工具",
        "代码人生",
        "阅读",
      ],
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
/* 去掉el-tab-pane底部灰色线条 */
/deep/.el-tabs__nav-wrap::after {
  height: 0 !important;
}
/* 去掉el-tab-pane切换时的蓝色下划线*/
/deep/ .el-tabs__active-bar {
  background-color: transparent;
}

.artcleTab {
  background-color: white;
  margin: auto;
  height: 46px;
  border-top: 0.5px solid #86909c2f;
  border-bottom: 0.5px solid #86909c2f;
  box-shadow: 0px 1px 1px 0px #86909c2f;
  .tabs {
    width: 90%;
    margin-left: 10%;
  }
}
</style>
