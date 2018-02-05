import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)


const getters = {
    count:function (state){
        return state.count += 100
    }
}
const actions ={
        addAction(context){
            // context.commit('add',10)
            // setTimeOut(()=>{context.commit(reduce)},3000);
            setTimeout(function(){
                context.commit(reduce)
            },3000)
    console.log('我比reduce提前执行');
        },
        reduceAction({commit}){
            commit('reduce')
        }
    }
export default new Vuex.Store({
    actions,
    state: {
        count: 1,
        dialogueName:'韩梅梅'
    },
    mutations: {
        add(state) {
            state.count += 10;
        },
        reduce(state) {
            state.count -= 10;
        },
        changeName(state,k){
            // console.log('触发了'+k+y)
            state.dialogueName = k
        }
    }

});