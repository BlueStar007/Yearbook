import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
var router = new VueRouter({
    routes: [{
            path: './one',
            name: 'one',
            component: () =>
                import ('./header')

        },
        {
            path: '/:id',
            name: 'two',
            component: () =>
                import ('./Loading')

        },
        {
            path: './three',
            name: 'three',
            component: () =>
                import ('./listC')

        },
    ],

    mode: 'history'

})
export default router;