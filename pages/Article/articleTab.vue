<template>
  <div class="artcleTab">
    <el-tabs
      class="tabs"
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        class="pane"
        v-for="(item, index) in tabs"
        :key="item.id"
        :label="item.tabs"
        :name="item.tabs"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "articleTab",
  data() {
    return {
      index:1,
    };
  },
  methods: {
    // 标签被点击
    handleClick(tab, event) {
      //console.log(tab.index)
      this.index=tab.index//获取tabs数组坐标
      this.$store.dispatch('article/A_UPDATE_INDEX',{index:this.index})//传递到vuex
      this.$store.dispatch('article/A_UPDATE_ACTIVENAME',{sortActiveName:'推荐'})
    },
  },
  computed: {
    tabs() {
      return this.$store.state.article.tabs;//从vuex中读取tabs数据
    },
    activeName:{
      get(){
        return '综合'//默认值
      },
      //点击标签时改变activeName
      set(){}
    }
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
/* 修复el-tabs意外出现蓝色边框问题bug*/
::v-deep .el-tabs__item {
  box-shadow: none !important;
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
@media screen and (min-device-width: 1200px) {
  .artcleTab .tabs{
    margin-left: 10%;
  }
}
@media screen and (min-device-width: 0px) and(max-device-width:1199px) {
  .artcleTab .tabs{
    margin-left: 5%;
  }
}
</style>
