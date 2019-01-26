import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'mall',
            component: () => import('@/Mall')
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('@/Search')
        }
    ]
})