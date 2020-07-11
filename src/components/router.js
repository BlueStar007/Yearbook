import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use('VueRouter')
var router = new VueRouter({
    routes: [{
            path: '/loading',
            component: () =>
                import ('./header')
        },
        {
            path: '/',
            component: () =>
                import ('./header')
        },
        {
            path: '*',
            component: () =>
                import ('./header')
        }

    ],
    mode: 'hash'

})
export default router;