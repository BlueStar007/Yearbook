<template>
  <div class="con">
       <h2> 你好呀，跳转成功 </h2>
       <h3>{{$route.params.id}}</h3>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
  .con{
    height: 400px;
    background-color: teal;
  }
</style>