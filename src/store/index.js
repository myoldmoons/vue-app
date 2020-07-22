import Vue from 'vue'
import vueX from 'vuex'
Vue.use(vueX);

const user = {
    state: {
        is_login: false
    },
    getters: {
        not_login(state) {
            return !state.is_login;
        }
    },
    mutations: {
        switch_login(state) { //这里的state对应着上面这个state
            state.is_login = !state.is_login;
        }
    },
    actions: {
        switch_login(context) { //这里的context和我们使用的$store拥有相同的对象和方法
            context.commit('switch_dialog');
        },
    }
}
const car ={
    state:{
        count:1
    },
    mutations: {
        add_count(state){
            state.count++;
        },
    }
}

export default new vueX.Store({
    modules: {
        user: user,
        car:car
    }
})