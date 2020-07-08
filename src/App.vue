<template>
  <div id="app" >
    <img alt="Vue logo" src="./assets/logo.png">

    <HelloWorld @changer="one"/>
    <List :list="list"></List>
  </div>
</template>

<script>
import {ChannelId} from './components/getDate'
import HelloWorld from './components/sele.vue'
import List from './components/listC'
export default {
  name: 'App',
  components: {
    HelloWorld,
    List,
  },
  data(){
    return{
      list: 'undefault'
    }
  },
  methods: {
    one(e){
      this.itemId=e;
      this.getList(e)
      
    },
    async getList(id){ 
            var i= await ChannelId(id);  
            this.list=i;
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
</style>
