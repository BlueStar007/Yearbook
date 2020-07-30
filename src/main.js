import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from '../state/main'
import './plugins/element.js'
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store: store
}).$mount('#app')