import Vue from 'vue'
import Router from 'vue-router'
import chat from './../module/chat.vue'
import content from './../module/content.vue'
import dialogue from './../module/dialogue.vue'
Vue.use(Router)
Router.prototype.go = function() {
    this.isBack = true
    window.history.go(-1)
}
export default new Router({
    mode: 'history',
    routes: [{
        path: "/",
        component: chat
    }, {
        path: '/chat',
        name: 'chat',
        component: chat
    }, {
        path: '/content',
        name: 'content',
        component: content
    }, {
        path: "/dialogue",
        component: dialogue
    }]
})