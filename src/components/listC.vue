<template>
<div>
        <div class="container" v-for="item in list" :key="item.id">
                <div class="left" v-if="item.havePic">
                    <a :href="item.link">
                        <img class="TitleImg" :src="item.imageurls[0].url" alt="">
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
import {ChannelId} from '../server/getDate'
export default {
    name: 'List',
    watch: {
        id :function(){
            let res= this.getD(this.id)
            this.list=res;
        }
    },
    data(){
        return{
            list: ''
         }
    },
    props: ['id'],
    created(){
        this.getD(this.id)
 
    },
    methods: {
        async   getD(id){
            let res= await ChannelId(id);
            this.list=res
        }
    }
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: row;
    margin: 30px 0;
}
.left{
    
}
.right{
    text-align: left;
    margin-left: 30px;
}
.TitleImg{
    width: 120px;
    height: 80px;
}

</style>