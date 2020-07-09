<template>
  <div id="app" >
    <img alt="Vue logo" src="./assets/logo.png">

    <sele @changer="one"/>
    <List :list="list" v-show="!show"></List>
    <div class="loading" v-show="show"><Loading /></div>
  </div>
</template>

<script>
import {ChannelId} from './components/getDate'
import sele from './components/sele.vue'
import List from './components/listC'
import Loading from './components/Loading'
export default {
  name: 'App',
  components: {
    sele,
    List,
    Loading
  },
  data(){
    return{
      list: 'undefault',
      show: true
    }
  },
  methods: {
    one(e){
      this.show=true;
      this.itemId=e;
      this.getList(e)
      
    },
    async getList(id){ 
            var i= await ChannelId(id);  
            this.list=i;
            this.show=false
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 1200px;
  margin: 0 auto;
}
.loading{
  height: 300px;
  overflow: hidden;
}
</style>
