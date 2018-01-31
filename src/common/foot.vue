<template>
    <div class="foot">
        <ul>
            <li>
                <i class="iconfont icon-wechat"></i>
                <p>微信</p>
            </li>
            <li>
                 <i class="iconfont icon-icon_contact_fill"></i>
                 <p>通讯录</p>
                </li>
            <li> 
                <i class="iconfont icon-find1"></i>
                <p>发现</p>
            </li>
            <li>
                <i class="iconfont icon-my"></i>
                <p>我</p>
            </li>
            
            
        </ul>
    </div>
</template>
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
            i {
                display: block;
                width: 100%;
                margin-top: 5px;
                font-size: 28px;
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