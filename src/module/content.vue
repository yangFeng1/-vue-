<template>
 <div id="content">
 <myheader></myheader>
    <h1>通讯录</h1>
       <myfoot></myfoot>
     </div>
</template>
 
<script>
     import header from './../common/header.vue'
 import foot from './../common/foot.vue'
 export default {
     data:function(){
         return {}
     },
     created:function(){
         console.log($('#content'))
       setTimeout(function(){
            $('#content i').addClass('active')
       },0)
     },
     components:{
          myheader: header,
           myfoot: foot
          }
 }
</script>
<style lang="">
    
</style>