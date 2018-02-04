<template>
    <div>
        <div class="top">
            <div class="callback fl"><</div>
            <div class="personalInfo fr">
                <i class="iconfont icon-my"></i>
            </div>
            <div class="linkman">李雷</div>
            
        </div>

    </div>
</template>
<script>
    export default {
        data:function(){
            return {}
        }
        
    }
</script>
<style scoped lang="scss">
    .top{
        height: 40px;
        width: 100%;
        background: #333;
        .callback{
            color:#fff;
            font-size:32px;
            line-height: 40px;
            margin-left:10px;
        }
        .linkman{
            color: #fff;
            text-align: center;
            font-size: 20px;
            line-height: 40px;
        }
        .personalInfo{
            color: #fff;
            margin-right: 10px;
            margin-top:7px;
            i{
            font-size: 24px;
            }
        }
    }
</style>