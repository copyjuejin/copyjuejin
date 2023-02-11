<template>
  <div class="articleItem">
    <div class="header">
      <span>{{ listItem.writer }}</span>
      <span class="line">|</span>
      <span class="date">{{ time }}</span>
      <span class="line">|</span>
      <span class="tab">{{ listItem.tab }}</span>
    </div>
    <div class="main">
      <div class="left">
        <div class="title">{{ listItem.title }}</div>
        <div class="body">
          {{ listItem.intro }}
        </div>
        <div class="bottom">
          <i class="el-icon-view">&nbsp{{ listItem.read }}</i>
          <div class="like">
           <img
            style="width: 14px; height: 14px"
            src="../../assets/img/like.png"
            >
            &nbsp{{ listItem.like }}</img>
            </div>
          <i class="el-icon-chat-round">&nbsp{{ listItem.comment }}</i>
        </div>
      </div>
      <div class="right" v-if="show_img">
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
  props: ["listItem"],
  data() {
    return {
      
    };
  },
  computed: {
    //是否显示预览图
    show_img() {
      if (this.listItem.preview === null) {
        return false;
      } else {
        return true;
      }
    },
    //预览图地址
    url() {
      if (this.listItem.preview != null) {
        return "/api" + this.listItem.preview.url;
      }else{
        return null
      }
    },
    //日期格式化
    time(){
      return this.listItem.time.slice(0,10)
    }
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
    justify-content: space-between;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-content: center;
      height: 100px;
      .title {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #1d2129;
        width: 100%;
        display: -webkit-box;
        overflow: hidden;
        .textEllipsis();
      }
      .body {
        color: @fontcolor;
        display: -webkit-box;
        overflow: hidden;
        .textEllipsis();
      }
      .bottom {
        display: flex;
        flex-direction: row;
        width: 180px;
        justify-content: space-between;
        color: @fontcolor;
        align-items: center;
        .like{
          display: flex;
          flex-direction: row;
          align-items: center;
        }
      }
    }
  }
}
</style>
