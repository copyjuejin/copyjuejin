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
import articelItem from "../components/Article/articleItem.vue";
export default Vue.extend({
  components: { articleTab,articleList,articelItem},
  name: "IndexPage",
});
</script>
<style lang="less" scoped >

</style>
