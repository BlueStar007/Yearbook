<template>
<div class="conLb">
        
        <div class="conItem" :style="{transform: `translateX(-${ind}00%)` }"  v-for="(i,index) in imgList" :key="index">
            <a :href="i" >
                <img  :src="i" alt="">
            </a>
        </div>
        <div class="change">
            <img @click="ind>=0?ind--: 0" src="../assets/left button-fill.png" alt="">
            <img @click="ind<imgList.length-1?ind++: 0" style="width:59px; height: 59px"     src="../assets/right.png" alt="">
        </div>
</div>
</template>

<script>
export default {
    name: 'Lb',
    data(){
        return {
        imgList: [
                    'http://www-file.huawei.com/-/media/corp2020/home/banner/1/sustainability-cn2.jpg',
                    'http://www-file.huawei.com/-/media/corp2020/home/banner/1/hwcloud-discount.jpg',
                    'http://www-file.huawei.com/-/media/corp2020/home/banner/1/vmall_sv_pc.png'
                 ],
        ind: 0,
      

        }

    },
    created(){
        setInterval(()=>{
            if(this.ind===this.imgList.length-1){
                this.ind=0
            }else{
                this.ind++
            }
        },2000)
    }
}
</script>

<style>
.conLb{
    display: flex;
    flex-direction: row;
    width: 1200px;
    overflow: hidden;
    height: 600px;
}   
.conItem{
    transition: all 300ms;
    width: 100%;
    margin: 0 auto;
}
img{
    height: 100%;
    width: auto;
}
.change{
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 600px;
    width: inherit;
}
.change img{
    width: 70px;
    height: 70px;
    padding: 0 45px;
}
</style>