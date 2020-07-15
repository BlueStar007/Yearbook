import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
let router = new VueRouter({
    routes: [{
        path: '',
        name: '',
        component: () =>
            import ('@componets/Loading')
    }],
    mode: 'history'
})
export default router;