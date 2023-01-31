<template>
  <div>
    <el-tabs v-model="activeName" addable  @tab-click="handleClick" @tab-remove="tabMove" @tab-add="tabAdd">
      <el-tab-pane v-for="(item,index) in tab" :key="index" :label="item" :name="item"></el-tab-pane>
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
    tabMove(){
      console.log('删除标签')
    },
    // 添加标签
    tabAdd(){
      console.log('添加标签')
    }
  },
};
</script>

<style scoped></style>
