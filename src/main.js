// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import jquery from 'jquery'
import './assets/css/common.css'
import './assets/css/icon/iconfont.css';
import Mint from 'mint-ui';
import store from './store/store'
import 'mint-ui/lib/style.css';
Vue.use(Mint);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
window.$ = jquery