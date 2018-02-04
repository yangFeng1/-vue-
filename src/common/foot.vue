<template>
    <div class="foot">
        <ul>
       
        <li id="chat"> <router-link to="chat"> 
                <i class="iconfont icon-wechat"  v-on:click="cut($event)"></i>
                <p>微信</p>
                 </router-link>
            </li>
      
             
            <li id="content">
            <router-link to="content"> 
                 <i class="iconfont icon-icon_contact_fill" v-on:click="cut($event)"></i>
                    
                 <p>通讯录</p>
                  </router-link>
                </li>
            <li> 
         
                <i class="iconfont icon-find1" v-on:click="cut($event)"></i>
                <p>发现</p>
            </li>
            <li>
                <i class="iconfont icon-my" v-on:click="cut($event)"></i>
                <p>我</p>
            </li>
            
            
        </ul>
    </div>
</template>
<script>
import store from './../store/store'
    export default{
        data:function(){
            return {}
        },
        methods:{
            cut:function(e){
                // console.log(e.target)
                // $(e.target).addClass('active').parents('li').siblings('li').find('i').removeClass('active')
            }
        },
        store
    }
</script>
<style lang="scss" scoped>
    .foot {
        height: 50px;
        width: 100%;
        position: fixed;
        bottom: 0px;
        border-top: 1px solid #ccc;
        li {
            height: 50px;
            float: left;
            width: 25%;
            .active{
                color:#0bb908;
            }
            i {
                display: block;
                width: 100%;
                margin-top: 8px;
                font-size: 23px;
                text-align: center;
            }
            p {
                height: 12px;
                font-size: 12px;
                text-align: center;
            }
        }
    }
</style>