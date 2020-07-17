<template>
  <div id="app" >
    <TapBar :item="list.slice(0,5)" />
    <Lb />
    <router-view></router-view>
    <div>
      <Router-link :to="{name: 'one'}">head</Router-link>
      <Router-link :to="{ name: 'two', params:{ id: test}}">laoding</Router-link>
      <Router-link to="/three">lic</Router-link>
    </div>
    <img alt="Vue logo" src="./assets/logo.png">
    <sele @changer="one"/>
    <!-- <List :list="list" v-show="!show"></List> -->
    <div class="loading" v-show="show"><Loading /></div>
    
  </div>
</template>

<script>
import {ChannelId} from './server/getDate'
import sele from './components/sele.vue'
// import List from './components/listC'
import Loading from './components/Loading'
import Lb from './components/Lb'
import TapBar from './components/Top'
export default {
  name: 'App',
  components: {
    sele,
    // List,
    Loading,
    Lb,
    TapBar,

  },
  data(){
    return{
      list: 'undefault',
      test: 'load',
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
