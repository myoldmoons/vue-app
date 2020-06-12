import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import tabbar01 from '@/components/tabbar/tabbar01'


Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            redirect: '/home/tabbar01'
        },
        {
            path: '/home',
            component: home,
            children: [{
                path: '/home/tabbar01',
                name: 'tabbar01',
                meta: {
                    type: 1
                },
                component: tabbar01
            }]
        },
    ]
})