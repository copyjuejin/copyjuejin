<template>
<!-- 右侧信息栏 -->
<div class="sidebar">
    <!-- 广告 -->
    <div class="sidebar__block">
        <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b6a58397c77485495a051142f1d863d~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?" alt="">
    </div>
    <!-- 广告 -->
    <div class="sidebar__block">
        <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a88a1ea956734105a5b002dfb48840cb~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?" alt="">
    </div>
    <!-- 掘金官网链接 -->
    <div class="block-body">
        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png" alt="">
        <div class="block-body-text">
            <div>下载稀土掘金APP</div>
            <div>一个帮助开发者成长的社区</div>
        </div>
    </div>
    <!-- 作者榜 -->
    <div class="user-body user-top">
        <div class="header-block">🎖️作者榜</div>
        <div class="user-list">
            <div class="item">
                <div class="item__img-box">
                    <img src="https://p3-passport.byteacctimg.com/img/mosaic-legacy/3792/5112637127~300x300.image" alt="">
                </div>
                <div class="item__user-info">
                    小明同学
                    <img src="~/assets/img/lv-2.png" alt="">
                </div>
            </div>
            <div class="item">
                <div class="item__img-box">
                    <img src="https://p9-passport.byteacctimg.com/img/mosaic-legacy/3793/3131589739~300x300.image" alt="">
                </div>
                <div class="item__user-info">
                    小雨同学
                    <img src="~/assets/img/lv-2.png" alt="">
                </div>
            </div>
            <div class="item">
                <div class="item__img-box">
                    <img src="https://p9-passport.byteacctimg.com/img/mosaic-legacy/3796/2975850990~300x300.image" alt="">
                </div>
                <div class="item__user-info">
                    小宋同学
                    <img src="~/assets/img/lv-2.png" alt="">
                </div>
            </div>
        </div>
        <div class="author-list">
            完整榜单&nbsp;&nbsp;>
        </div>
    </div>

    <!-- 悬浮信息栏 -->
    <transition name="el-fade-in-linear" >
    <div class="suspended" v-show="show" ref="suspendBox">
        <div class="sidebar__block user-top ">
            <div class="header-block">🎖️作者榜</div>
            <div class="user-list">
                <div class="item">
                    <div class="item__img-box">
                        <img src="https://p3-passport.byteacctimg.com/img/mosaic-legacy/3792/5112637127~300x300.image" alt="">
                    </div>
                    <div class="item__user-info">
                        小明同学
                        <img src="~/assets/img/lv-2.png" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="item__img-box">
                        <img src="https://p9-passport.byteacctimg.com/img/mosaic-legacy/3793/3131589739~300x300.image" alt="">
                    </div>
                    <div class="item__user-info">
                        工匠若水
                        <img src="~/assets/img/lv-2.png" alt="">
                    </div>
                </div>
                <div class="item">
                    <div class="item__img-box">
                        <img src="https://p9-passport.byteacctimg.com/img/mosaic-legacy/3796/2975850990~300x300.image" alt="">
                    </div>
                    <div class="item__user-info">
                        固体物质搬运工
                        <img src="~/assets/img/lv-2.png" alt="">
                    </div>
                </div>
            </div>
            <div class="author-list">
                完整榜单&nbsp;&nbsp;>
            </div>
        </div>
    </div>
    </transition>

</div>
</template>

<script>
export default {
    name:'authorList',
    data() {
        return {
            show:false
        }
    },
}
</script>

<style lang="less" scoped>
//右侧信息栏
.sidebar{
    width: 240px;
    position: absolute;
    top: 100px;
    right: 70px;
}
.sidebar>div{
    margin-bottom: 16px;
    border-radius: 3px;
}

.sidebar__block{
    width: 100%;
    /* height: 200px; */
    overflow: hidden;
    position: relative;
    background: #fff;
}
.sidebar__block>img{
    width: 100%;
}
//广告
.sidebar__block:not(:last-child)::after{
    content: '广告';
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 36px;
    height: 19px;
    background: rgba(0, 0, 0, 0.151);
    border: 1px solid rgb(199, 199, 199);
    border-radius: 3px;

    font-size: 8px;
    color: #fff;
    text-align: center;
    line-height: 19px;
}
.block-body{
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    background: #fff;
    display: flex;
}
.block-body>img{
    width: 50px;
    height: 50px;
    margin-right: 12px;
}
.block-body-text{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.block-body-text>:first-child{
    font-size: 14px;
}
.block-body-text>:last-child{
    font-size: 12px;
    line-height: 20px;
    color: #86909c;
}
.header-block{
    padding: 12px 15.6px;
    box-sizing: border-box;
    font-size: 14px;
    color: #333333;
}
//作者榜
.author-list{
    font-size: 14px;
    color: #007fff;
    text-align: center;
    padding: 12px 0;
}

.user-top>div{
    position: relative;
}
.user-top>div:not(:last-child)::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #e8f3ff;
}
.user-list>.item{
    padding: 12px 15.6px;
    box-sizing: border-box;
    display: flex;
}
.item__img-box{
    width: 45.6px;
    height: 45.6px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
}
.item__img-box>img{
    width: 100%;
}
.item__user-info{
    height: 100%;
    font-size: 14px;
    color: #333333;
    line-height: 45.6px;
    display: flex;
    align-items: center;
}
.item__user-info>img{
    width: 35px;
    height: 16px;
    margin-left: 6px;
}
.user-body{
    background: #fff;
}
//悬浮
.suspended{
    width: 240px;
    position: fixed;
    top: 130px;
    transition: all .3s linear;
}
.suspended>div{
    margin-bottom: 20px;
}
</style>