<template>
  <div id="home">
    
      <transition name="vux-pop-out">
      <router-view></router-view>
        
          </transition>
      
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
        },
          components:{
          myheader: header,
         myfoot: foot
          }
    }
</script>
<style>
.vux-pop-out-enter-active,
 .vux-pop-out-leave-active,
 .vux-pop-in-enter-active,
 .vux-pop-in-leave-active {
 will-change: transform;
 transition: all .25s;
 width:100%;
 height: 100%;
 top: 0;
 position: absolute;
 backface-visibility: hidden;
 perspective: 1000;
 }
 
 .vux-pop-out-enter {
 opacity: 0;
 transform: translate3d(-100%, 0, 0);
 }
 
 .vux-pop-out-leave-active {
 opacity: 0;
 transform: translate3d(100%, 0, 0);
 }
 
 .vux-pop-in-enter {
 opacity: 0;
 transform: translate3d(100%, 0, 0);
 }
 
 .vux-pop-in-leave-active {
 opacity: 0;
 transform: translate3d(-100%, 0, 0);
 }

</style>
