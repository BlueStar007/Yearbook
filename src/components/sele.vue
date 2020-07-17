<template>
  <div class="con">
    <div class="item" @click="btn(item.channelId)" v-for="item in show" :class="{
      active: item.channelId===index}" 
      :key="item.channelId">{{item.name}}</div>
    <a style="transform:translateY(15px)" href="" @click.prevent="kg=!kg">{{kg ? '关闭':'展开' }}</a>
  </div>
  
</template>

<script>
import {getPd} from '../server/getDate';
export default {
  name: 'HelloWorld', 
  computed: {
        show(){
          if(this.kg){
            return this.list
          }else{
           return this.list.slice(0,8)
          }
        }
  },
  data: ()=>{
    return {
      list: [],
      kg: false,
      index: null
    }
  },
  created(){
      this.get();
      
  },
  methods: {
    get() {
      getPd().then(
      (res)=>{
          this.list=res;  
          this.$emit('changer',res[0].channelId)
          
      }
      )
    },
    
    
    btn(id){
    this.index=id;
    this.$emit('changer',id)
    
  }
  },
 
}
</script>

<style  scoped>
.con{
  display :flex;
  flex-direction :row;
  flex-wrap: wrap;
}
.item{
  padding: 8px 15px;
  background-color: rgb(218, 218, 218);
  margin: 10px 15px 10px 0;
  border-radius: 0.25rem;
}
.item:hover{
  background-color: rgb(0, 0, 0);
  color: white;
}
.active{
  background-color: rgb(0, 0, 0);
  color: white;
}
</style>
