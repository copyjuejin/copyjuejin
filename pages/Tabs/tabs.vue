<template>
  <div class="Tab">
    <!-- <div class="tag">码上掘金</div> -->
    <img
      src="../../assets/img/logo.png"
      ></img>
      <el-tabs
        class="tabs"
        v-model="activeName"
        @tab-click="handleClick"
      >
       
        <el-tab-pane
          class="pane"
          v-for="(item, index) in headers"
          :key="item.id"
          :label="item.tab"
          :name="item.tab"
        >
        <span slot="label"> 
          <el-badge :value="item.tag"  style="margin:5px 40px 0px 0px;"><span >{{item.tab}}</span></el-badge>
        </span>
        </el-tab-pane>
        </el-badge>
      </el-tabs>
    <i class="el-icon-sunny"></i>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props:['headers'],
  data() {
    return {
      index:1,
      url:''
    };
  },
  methods: {
    // 标签被点击
    handleClick(tab, event) {
      this.index=tab.index//获取tabs数组坐标
    },
  },
  computed: {
    activeName:{
      get(){
        return '首页'//默认值
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

.Tab {
  background-color: white;
  margin: auto;
  height:60px;
  border-top: 0.5px solid #86909c2f;
  border-bottom: 0.5px solid #86909c2f;
  box-shadow: 0px 1px 1px 0px #86909c2f;
  display: flex;
  align-content: center;
  padding-top:0.5%;
  .tag{
    position: absolute;
    background-color: red;
    color: white;
    border-radius: 20px;
    left:39%;
  }
  .tabs {
    width: 90%;
    margin-left:3%;
  }
  img{
    margin-top:1%;
    width: 10%;
    height: 60%;
  }
  i{
    margin: 1% 1% 0 0;
  }
}
//平板
@media screen and (min-device-width: 768px) and(max-device-width:1199px) {
  .Tab img{
    width: 15%;
    height: 70%;
    margin-top:1%;
  }
   .Tab .tabs{
    width: 70%;
  }
  .Tab i{
    margin-left: 5%;
  }
}
//移动端
@media screen and (min-device-width: 0px) and(max-device-width:767px) {
   .Tab img{
    //display: none;
    width:30%;
    height: 60%;
    margin-top:2%;
  }
   .Tab .tabs{
    width: 60%;
  }
  .Tab i{
    margin-left: 2%;
  }
}
</style>
