<template>
  <div>
    <articleTab></articleTab>
    <articleList></articleList>
    <authorList></authorList>a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import articleTab from "../components/Article/articleTab.vue";
import articleList from "../components/Article/articleList.vue";
import articelItem from "../components/Article/articleItem.vue";
import authorList from "~/components/Author/authorList.vue";
export default Vue.extend({
  components: { articleTab, articleList, articelItem, authorList },
  name: "IndexPage",
});
</script>
<style lang="less" scoped >

</style>
