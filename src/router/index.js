import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import tabbar01 from '@/components/tabbar/tabbar01'
import tabbar02 from '@/components/tabbar/tabbar02'
import tabbar03 from '@/components/tabbar/tabbar03'
import tabbar04 from '@/components/tabbar/tabbar04'


Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
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
                },
                {
                    path: '/home/tabbar02',
                    name: 'tabbar02',
                    meta: {
                        type: 1
                    },
                    component: tabbar02
                },
                {
                    path: '/home/tabbar03',
                    name: 'tabbar03',
                    meta: {
                        type: 1
                    },
                    component: tabbar03
                },
                {
                    path: '/home/tabbar04',
                    name: 'tabbar04',
                    meta: {
                        type: 1
                    },
                    component: tabbar04
                },
            ]
        },
    ]
})