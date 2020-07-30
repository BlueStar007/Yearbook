<template>
  <div class="bomCon">
      <div class="bomItem">首页</div> 
      <div class="bomItem">上一页</div> 
      <div class="list">
            <div class='bomItem' v-for="i in indexx" @click="req(i)" :key="i">{{i}}</div>
      </div>
      <div class="bomItem" @click="req()">下一页</div> 
      <div class="bomItem">{{end}}页</div> 
  </div>
</template>

<script>
import {listData} from '../server/getDate'
export default {
      data(){
        return {
          list: '',
          index: [],
          end: 'undefault'
        }
      },
      watch: {
        id:  function(){
              this.req(1);
        }
      },
      props:['id'],
      computed: {
          indexx(){
            return this.index;
          }
      },
      methods: {
        req(num){
          this.$store.commit('show')
            let that=this;
              listData(this.id,num).then(function(res){
                  that.list=res;
                  // console.log(res);
              }).then(function(){
                  that.index=[]
                  console.log(that.list);
                  that.end=that.list.pagebean.allPages
                  that.index[0]=that.list.pagebean.currentPage
                  let index=that.list.pagebean.currentPage;
                  for(let up=index-1; up>index-4  ;up--){
                      that.index.unshift(up);
                      console.log(that.index);
                  }
                  for(let up=index+1; up<index+3  ;up++){
                      that.index.push(up);
                      console.log(that.index);
                  }
              }).then(function(){
                  that.$emit('Bom',num)
              })
        }
      },
  
}
</script>

<style scoped>
.bomCon{
    display: flex;
    text-align: center;
    justify-content: center;
}
.bomItem{
  display: inline-block;
  padding: 8px 15px;
  background-color: rgb(218, 218, 218);
  margin: 10px 15px 10px 0;
  border-radius: 0.25rem;
}
</style>