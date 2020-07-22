import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import tabbar01 from '@/components/tabbar/tabbar01'
import tabbar02 from "../components/tabbar/tabbar02";


Vue.use(Router)
export default new Router({
    routes: [{
        path: '/',
        redirect: '/home/tabbar01'
    },
        {
            path: '/home',
            component: home,
            children: [
                {
                    path: '/home/tabbar01',
                    name: 'tabbar01',
                    meta: {
                        type: 1
                    },
                    component: () => import('../components/tabbar/tabbar01')
                }, {
                    path: '/home/tabbar02',
                    name: 'tabbar02',
                    meta: {
                        type: 1
                    },
                    component: resolve => require(['../components/tabbar/tabbar02'], resolve)
                }
            ]
        }
    ]
})