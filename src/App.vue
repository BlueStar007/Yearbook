<template>
  <div id="app" >
    <TapBar :item="list.slice(0,5)" />
    <!-- <router-view></router-view> -->
    <Lb />
    <sele @changer="one"/>
    <List :id="id" v-show="!isShow"></List>
    <div class="loading" v-show="isShow"><Loading /></div>
    <BomBar/>
    <Test/>
  </div>
</template>

<script>
import sele from './components/sele.vue'
import List from './components/listC'
import Loading from './components/Loading'
import Lb from './components/Lb'
import TapBar from './components/Top'
import BomBar from './components/bomBar'
import {login,reg} from './server/test';
import {mapState} from 'vuex'
import Test from './components/Test'
export default {
  name: 'App',
  components: {
    sele,
    List,
    Loading,
    Lb,
    TapBar,
    BomBar,
    Test,
  },
  computed: {
     id(){
       return this.itemId
     },
     ...mapState({
       isShow: 'isShow'
     })
  },
  data(){
    return{
      list: 'undefault',
      test: 'load',
      itemId:''
    }
  },
  async created(){
      let res= await reg()
      console.log(res);
      login();
  },
  methods: {
    one(e){
      this.itemId=e;
    
    },
    
  }
}
</script>

<style scoped>
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