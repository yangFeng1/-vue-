<template>
    <div class="top">
      
            <p>微信</p>
            <span class="icon fr"></span>
        </div>
</template>
<style lang="scss" >
 @import './../assets/css/app.scss';
    .top {
        height: 40px;
        width: 100%;
        background: #333;
        position: relative;
        p {
            text-align: center;
            color: #fff;
            line-height: 40px;
            font-size: 18px;
        }
        .icon {
            position: absolute;
            right: 24px;
            top: 5px;
            display: block;
            width: 30px;
            height: 30px;
            background: url('../../static/images/add.png');
        }
    }
</style>
<script>
export default{
    
}
</script>