<template>
    <div>
        <div class="writer">
            <img :src="writerJpg" />{{ info.writer }}<br />{{ info.time }}
        </div>
        <div class="more">
            <div class="context">
                <span>相关推荐</span>

                <br />
                <br />
                <hr />
                <div class="item" v-for="(item, index) of more" :key="index">
                    <NuxtLink :to="{
                        path: '/Detail',
                        query: { id: item.id, sort: item.article_tab },
                    }" target="_blank">{{ item.title }}<br />
                        <div class="num">
                            {{ item.like }}点赞&nbsp·&nbsp{{ item.comment }}评论
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="catalogue">
            <div class="name"><span>目录</span><br><br><hr></div>
            
            <ul id="catelogue">

            </ul>
        </div>

    </div>
</template>

<script lang="js">
export default {
    props: ["more", "info"],
    mounted() {
        this.writerJpg += this.info.writerJpg[0].url;
        let h = document.querySelectorAll("h2");
        let ul = document.getElementById('catelogue')

        h.forEach((i) => { 
        i.id=i.innerHTML; 
        let li=document.createElement('li');
        li.innerHTML = "<a href=#" + i.innerHTML + ">" + i.innerHTML + "</a>";
        li.style.margin="10px 0px"
    ul.appendChild(li); })

    },
    data() {
        return {
            writerJpg: "/api",
            h: []
        };
    },

}
</script>

<style lang="less" scoped>
@bgcolor: #ffffff;


.writer {
    margin-left: 20px;
    width: 300px;
    background-color: @bgcolor;
    float: left;
    height: 100px;

    img {
        width: 50px;
    }
}


.more {
    margin-left: 20px;
    margin-top: 20px;
    width: 300px;
    background-color:@bgcolor;
    float: left;

    .context {
        margin: 20px 20px;

        .item {
            margin-top: 15px;
            margin-bottom: 15px;
        }

        .num {
            color: #7e7d7d;
            margin-top: 5px;
        }

        span {
            font-size: 20px;
        }
    }
}

.catalogue {
    margin-left: 20px;
    margin-top: 20px;
    width: 300px;
    height: 500px;
    background-color: @bgcolor;
    float: left;
    .name{
        width: 85%;
        margin: 15px auto;
        span{
            font-size: 20px;
        }
        
    }
    ul{
        margin: 15px auto;
        width: 85%;
    }
    
}
</style>