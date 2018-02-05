<template>
<div id="chat">
    <myheader></myheader>
      <div class="Temporary">
      
        <div class="search">
            <mt-search cancel-text=""></mt-search>
        </div>
        <div class="dialogue">
            <ul>
            <router-link to="/dialogue" v-for="item in dialogueItem">
              <li  v-on:click="changeName(item.name)">
                <img v-bind:src=item.src alt="" class="portrait fl">
                <span class="tisp">{{item.tisp}}</span>
                <div class="fl">
                    <div class="name">{{item.name}}</div>
                    <div class="content">{{item.content}}</div>
                </div>
              </li>
              </router-link>
            </ul>
        </div>
        <button @click="addAction">+{{$store.state.count}}</button>
        <button @click="reduceAction">-{{$store.state.count}}</button>
      
      </div>
         <myfoot></myfoot>
  </div>
        
  
</template>

<script>
import store from './../store/store'
import header from './../common/header.vue'
 import foot from './../common/foot.vue'
  import {mapState,mapMutations,mapActions} from 'vuex';
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
         computed:mapState(["dialogueName"]),
        components:{
           myheader: header,
            myfoot: foot
        },
        created:function(){
            var _this = this
       setTimeout(function(){
        
            $('#chatIcon i').addClass('active')
       },0)
        },
        methods:{...mapMutations(['add','reduce','changeName']),
        count(){
            return this.$store.getters.count;
        },...mapActions(['addAction','reduceAction'])
        },
        store
    }
</script>

<style lang="scss" scoped type="text/css">
    @import './../assets/css/app.scss';
    
</style>