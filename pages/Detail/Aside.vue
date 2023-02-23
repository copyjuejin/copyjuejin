<template>
    <div>
        <div class="writer">
<<<<<<< HEAD
            <div ><img :src="writerJpg" /></div><div class="writerInfo">{{ info.writer }}</div><br><br><br>&nbsp;&nbsp;&nbsp;{{ info.time.slice(0,10) }}
=======
            <div ><img :src="writerJpg" /></div><div class="writerInfo">{{ manager.name }}</div><br><br><br>&nbsp;&nbsp;&nbsp;{{ manager.introduction}}
>>>>>>> 8bd417667835c8fb90415d59fc699d2236f0bccc
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
                            {{ item.like }}点赞&nbsp;·&nbsp;{{ item.comment }}评论
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
    props: ["more", "manager"],
    mounted() { 
        this.writerJpg += this.manager.jpg[0].url;
        this.$nextTick(function(){
       
        let h = document.querySelectorAll("h2");
        let ul = document.getElementById('catelogue')

        h.forEach((i) => { 
        i.id=i.innerHTML; 
        let li=document.createElement('li');
        li.innerHTML = "<a href=#" + i.innerHTML + ">" + i.innerHTML + "</a>";
        li.style.margin="10px 0px"
    ul.appendChild(li); })
<<<<<<< HEAD

    },
=======
        })},
>>>>>>> 8bd417667835c8fb90415d59fc699d2236f0bccc
    data() {
        return {
            writerJpg: "/api",
            h: []
        };
    },

}
</script>

<style lang="less" scoped>
@media screen and(max-device-width:1199px) {
    .writer{
        display: none;
       
    }
    .catalogue{
        display: none;
    }
    .more{
        width: 100%;
<<<<<<< HEAD
        
=======
        float:none;
>>>>>>> 8bd417667835c8fb90415d59fc699d2236f0bccc
    }
}
@bgcolor: #ffffff;

.writer {
    border-radius: 8px;
    width: 100%;
    background-color: @bgcolor;
    float: left;
    height: 100px;
    img {
        width: 50px;
       margin-left: 30px;
       margin-top: 20px;
       float: left;
    }
     .writerInfo{
         
   margin-top: 25px;
   float: left;
   margin-left: 15px;
}
   
}


.more {
    border-radius: 8px;
    margin-top: 20px;
    width:100%;
    background-color:@bgcolor;
    float: left;

    .context {
<<<<<<< HEAD
        margin: 20px 20px;
=======
        margin: 2% 2%;
>>>>>>> 8bd417667835c8fb90415d59fc699d2236f0bccc

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
    border-radius: 8px;
    margin-top: 20px;
    width: 100%;
    position: sticky;
    top: 50px;
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