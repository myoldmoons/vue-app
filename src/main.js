import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.use(Router)
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
import vuex from 'vuex'

Vue.use(vuex);
import utils from './utils/utils'

Vue.prototype.$utils = utils;
import http from './utils/http'

Vue.prototype.$http = http;
import page from "./utils/scrollBottom";

Vue.prototype.$page = page;
// 引入rem
import './utils/rem'
// 公共  style
import './assets/common.css'


Vue.config.productionTip = false
import store from './store'
import router from './router/index'

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')