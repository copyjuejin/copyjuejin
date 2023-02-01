<template>
  <div>
    <articleTab></articleTab>
    <articleList></articleList>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import articleTab from "../components/Article/articleTab.vue";
import articleList from "../components/Article/articleList.vue";
export default Vue.extend({
  components: { articleTab, articleList },
  name: "IndexPage",
  data() {
    return {};
  },
  //middleware:'auth',//页面层级中间件定义
  middleware(context) {},

  //参数的有效性
  validate({ params, query }) {
    return true;
  },

  //读数据，返回给组件
  asyncData(context) {
    //异步业务逻辑,请求服务端数据
    return {};
  },

  //读数据，返回vuex
  fetch({ store }) {},
});
</script>
<style lang="less" scoped></style>
