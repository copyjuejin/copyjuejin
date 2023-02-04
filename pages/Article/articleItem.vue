<template>
  <div class="articleItem">
    <div class="header">
      <span>作者名</span>
      <span class="line">|</span>
      <span class="date">日期</span>
      <span class="line">|</span>
      <span class="tab">前端</span>
    </div>
    <div class="main">
      <div class="left">
        <div class="title">一行代码,让网页变为黑白配色</div>
        <div class="body">
          让网页变为黑白配色，是个常见的诉求。而且往往是突如其来的诉求，是无法预知的。当发生这样的需求时，我们需要迅速完成变更发布。
        </div>
        <div class="bottom">
          <i class="el-icon-view">&nbsp4.9w</i>
          <i class="el-icon-chicken">&nbsp474</i>
          <i class="el-icon-chat-round">&nbsp123</i>
        </div>
      </div>
      <div class="right">
        <el-image
          style="width: 150px; height: 80px"
          :src="url"
          fit="contain"
        ></el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13af4ba28bc14ca5a6e09d405b26c3d8~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
    };
  },
};
</script>

<style lang="less" scoped>
/*灰色文字*/
@fontcolor: #86909c;
/* 文字省略 */
.textEllipsis() {
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.articleItem {
  display: flex;
  flex-direction: column;
  padding: 0% 2% 2% 0%;
  line-height: 22px;
  font-size: 13px;
  .header {
    display: flex;
    flex-direction: row;
    span {
      padding: 0% 0.5%;
    }
    .line {
      color: @fontcolor;
    }
    .date {
      color: @fontcolor;
    }
    .tab {
      color: @fontcolor;
    }
  }
  .main {
    display: flex;
    flex-direction: row;
    padding-bottom: 1%;
    border-bottom: 1px solid #86909c2f;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-content: center;
      .title {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #1d2129;
        width: 100%;
        display: -webkit-box;
        overflow: hidden;
        .textEllipsis()
      }
      .body {
        color: @fontcolor;
        display: -webkit-box;
        overflow: hidden;
        .textEllipsis()
      }
      .bottom {
        display: flex;
        flex-direction: row;
        width: 30%;
        justify-content: space-between;
        color: @fontcolor;
      }
    }
  }
}
</style>
