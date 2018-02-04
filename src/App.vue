<template>
  <div id="home">
    
    
       
      <router-view></router-view>
        
        
      
  
   
        
  </div>
</template>

<script>
import store from './store/store'
 import header from './common/header.vue'
 import foot from './common/foot.vue'
    export default {
        data: function() {
            return {
                dialogueItem: [{
                    src: "./../static/images/u=3802769585,1517263243&fm=58.jpg",
                    tisp: "1",
                    name: "胡歌",
                    content: "我喜欢白豆腐"
                }, {
                    src: "./../static/images/u=4164692487,3062951903&fm=85&s=111319DF467607906834A19C03008013.jpg",
                    tisp: "1",
                    name: "白豆腐",
                    content: "滚"
                }]
            }
        },
        created: function() {
            setTimeout(function() {
                $('.homeImg').fadeOut('500')
                $('.Temporary').css('display', 'block')
            }, 1500)
        },
         components:{
          myheader: header,
           myfoot: foot
          }
    }
</script>
