import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
Vue.use(Router)
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import vuex from 'vuex'
Vue.use(vuex);

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 引入rem
import './kits/rem'
// common  style
import './assets/common.css'


Vue.config.productionTip = false
import store from './store'
import router from './router/index'
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')