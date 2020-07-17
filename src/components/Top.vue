<template>
  <div class="tapBar">

      <div class="logo"><img src="../assets/logo.png" alt=""></div>
      <div class="tapItem" v-for="(i,index) in item" :key="index">
          <a href="">{{i}}</a>
      </div>
     
  </div>
</template>

<script>
export default {
    props:[
        'item'
    ]
}
</script>

<style>
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
</style>