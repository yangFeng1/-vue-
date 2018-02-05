<template>
    <div id="dialogue">
        <div class="top">
            <div class="callback fl" v-on:click="routerBack()"><</div>
            <div class="personalInfo fr">
                <i class="iconfont icon-my"></i>
            </div>
            <div class="linkman">李雷</div>
            
        </div>

    </div>
</template>
<script>
    export default {
        data: function() {
            return {}
        },
        methods: {
            routerBack: function() {
                this.$router.go(-1)
            }
        }

    }
</script>
<style scoped lang="scss">
    #dialogue {
        width: 100%;
        height: 100%;
    }
    
    .top {
        height: 40px;
        width: 100%;
        background: #333;
        .callback {
            color: #fff;
            font-size: 32px;
            line-height: 40px;
            margin-left: 10px;
        }
        .linkman {
            color: #fff;
            text-align: center;
            font-size: 20px;
            line-height: 40px;
        }
        .personalInfo {
            color: #fff;
            margin-right: 10px;
            margin-top: 7px;
            i {
                font-size: 24px;
            }
        }
    }
</style>