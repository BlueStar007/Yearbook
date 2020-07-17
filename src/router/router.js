import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
var router = new VueRouter({
    routes: [{
            path: './one',
            name: 'one',
            component: () =>
                import ('../components/header')

        },
        {
            path: '/:id',
            name: 'two',
            component: () =>
                import ('../components/Loading')

        },
        {
            path: './three',
            name: 'three',
            component: () =>
                import ('../components/listC')

        },
    ],

    mode: 'history'

})
export default router;