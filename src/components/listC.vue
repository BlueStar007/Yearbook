<template>
<div>
    nihao
        <div class="container" v-for="item in list" :key="item.id">
                <div class="left" v-show="item.havePic">
                    <a :href="item.link">
                        <img :src="item.imageurls.url" alt="">
                    </a>
                </div>
                <div class="right">
                    <div class="one"><span>{{item.tltle}}</span></div>
                    <div class="two">
                        <span>{{item.source}}</span>
                        <span>{{item.pubDate}}</span>
                        <span>{{item.channelName}}</span>
                    </div>
                    <div class="three">{{item.content.substring(0,145)}}</div>
                </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'List',
    data: ()=>{
        return{
           
         }
    },
    props: ['list'],
   
}
</script>

<style>
.container{
    display: flex;
    flex-direction: row;
    height: 300px;
}
.left{
    height: 300px;
}
</style>