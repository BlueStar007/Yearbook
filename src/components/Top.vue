<template>
  <div class="tapBar">
      <div class="logo"><img src="../assets/logo.png" alt=""></div>
      <div class="tapItem" v-for="i in list" :key="i.channelId">
          <Router-link :to="{name: 'one',params: {id: i.channelId}}">{{i.name}}</Router-link>
          <!-- <a href="" @click.prevent="one" params='i.channelId'>{{i.name}}</a> -->
      </div>
     <div class="right">
            <Router-link class="rightt" to="three">登录 |</Router-link>
            <Router-link class="rightt" to="three"> 注册</Router-link>
     </div>
  </div>
</template>

<script>
import {getPd} from '../server/getDate';
export default {
    props:[
        'item'
    ],
    data(){
        return {
            list: 0,
        }
    },

    created(){
      this.get()
    },
    methods: {
    // one(){
    //    this.$router.push({
    //        name: 'one'
    //    })
    // },
    get() {
      getPd().then(
      (res)=>{
          this.list=res.slice(0,6);  
          
      }
      )
    },
    }
}
</script>

<style scoped>
.tapBar{
    display: flex;
    justify-content: left;
    padding: 0 45px;
}
.logo{
    height: 70px;
    width: 70px;
    display: flex;
    align-items: center;
}
.logo img{
    height: 60px;
    width: 60px;
}
.tapItem{
  
    height: 60px;
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    flex-wrap: nowrap;
}
.tapItem a{
    font-size: 18px;
    color: rgb(26, 26, 26);
    text-decoration: none;
    transition: all 300ms;
    margin: 0 26px;
}
.tapItem a:hover{
    color: #41B883;
    transform: translateX(8px);
}
.right{
    margin-left: 176px;
}
.rightt{
    color: rgb(56, 56, 56);
    text-decoration: none;
}
</style>