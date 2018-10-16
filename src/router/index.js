import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = resolve => require(['@/components/index.vue'],resolve)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
        },
    ]
})
